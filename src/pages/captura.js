import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/captura.module.css';

export default function Captura() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [isClosingPopup, setIsClosingPopup] = useState(false); // Para animación de cierre del popup
    const videoRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        setIsMobile(isMobileDevice);

        async function setupCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
                setErrorMessage('No se pudo acceder a la cámara. Verifica los permisos.');
                setShowErrorPopup(true);
            }
        }

        setupCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);

    const captureImage = async () => {
        if (!videoRef.current) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(async (blob) => {
            if (!blob) return;

            setIsLoading(true);
            setErrorMessage('');
            setShowErrorPopup(false);

            try {
                const textoGoogle = await processImage(blob);
                const codigoDepto = await analyzeText(textoGoogle);
                const nombreResidente = await fetchResidenteData(codigoDepto);
                await sendNotification(codigoDepto, blob);

                alert(`Se ha notificado a ${nombreResidente}, residente del departamento ${codigoDepto}.`);
                router.push('/envio-confirmacion');
            } catch (error) {
                console.error('Error en el flujo:', error);
                setErrorMessage(error.message || 'Hubo un error al procesar la solicitud.');
                setShowErrorPopup(true);
            } finally {
                setIsLoading(false);
            }
        });
    };

    const processImage = async (blob) => {
        try {
            const formData = new FormData();
            formData.append('image', blob, 'photo.jpg');
            const url = 'http://34.46.252.163/api/process-image/';
            const response = await axios.post(url, formData);
            return response.data.text;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                throw new Error('Imagen no válida.');
            } else {
                throw new Error('Error al procesar la imagen.');
            }
        }
    };

    const analyzeText = async (text) => {
        try {
            const url = 'http://35.193.164.187/api/analyze-text/';
            const response = await axios.post(url, { text });
            return response.data.openai_depto;
        } catch (error) {
            throw new Error('Error al analizar el texto.');
        }
    };

    const fetchResidenteData = async (codigoDepto) => {
        try {
            const url = 'http://34.29.123.189/api/residente/';
            const response = await axios.get(url, { params: { codigo_departamento: codigoDepto } });
            return response.data.nombre_completo;
        } catch (error) {
            throw new Error('Error al obtener los datos del residente.');
        }
    };

    const sendNotification = async (codigoDepto, blob) => {
        try {
            const formData = new FormData();
            formData.append('codigo_departamento', codigoDepto);
            formData.append('image', blob, 'photo.jpg');
            const url = 'http://146.148.75.57/api/notifications/send/';
            await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        } catch (error) {
            throw new Error('Error al enviar la notificación.');
        }
    };

    const handleClosePopup = () => {
        setIsClosingPopup(true);
        setTimeout(() => {
            setShowErrorPopup(false);
            setIsClosingPopup(false);
        }, 300); // Duración de la animación
    };

    return (
        <div className={isMobile ? styles.mobileContainer : styles.desktopContainer}>
            {isMobile && (
                <div className={styles.mobileHeader}>
                    <button
                        className={`${styles.closeButton} ${styles.animateCloseButton}`}
                        onClick={() => router.push('/')}
                    >
                        ✕
                    </button>
                </div>
            )}
            {isLoading && <p className={styles.loading}>Procesando...</p>}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                className={isMobile ? styles.mobileVideo : styles.desktopVideo}
            ></video>
            <button
                onClick={captureImage}
                className={`${isMobile ? styles.mobileCaptureButton : styles.desktopCaptureButton} ${styles.animateCaptureButton}`}
                disabled={isLoading}
            >
                <i className="fas fa-camera" aria-hidden="true"></i>
            </button>

            {showErrorPopup && (
                <div className={`${styles.errorPopup} ${isClosingPopup ? styles.fadeOutPopup : ''}`}>
                    <div className={styles.errorPopupContent}>
                        <i className={`fas fa-exclamation-circle ${styles.errorIcon}`} aria-hidden="true"></i>
                        <h3 className={styles.errorTitle}>Error</h3>
                        <p className={styles.errorMessage}>{errorMessage}</p>
                        <button
                            onClick={handleClosePopup}
                            className={`${styles.errorCloseButton} ${styles.animateCloseButton}`}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
