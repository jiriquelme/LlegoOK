import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/captura.module.css';

export default function Captura() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [isClosingPopup, setIsClosingPopup] = useState(false);
    const [showFlash, setShowFlash] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showProcessingModal, setShowProcessingModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
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

    const triggerFlash = () => {
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 300);
    };

    const captureImage = () => {
        try{
            triggerFlash();

            if (!videoRef.current) return;
    
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
            canvas.toBlob((blob) => {
                const imageURL = URL.createObjectURL(blob);
                setCapturedImage({ blob, url: imageURL });
                setShowConfirmModal(true);
            });
        } catch (error){
            console.log("No se pudo capturar la imagen",error)
        }
    };

    const handleConfirmSend = async () => {
        setShowConfirmModal(false);
        setShowProcessingModal(true);

        try {
            const textoGoogle = await processImage(capturedImage.blob);
            const codigoDepto = await analyzeText(textoGoogle);
            const nombreResidente = await fetchResidenteData(codigoDepto);
            await sendNotification(codigoDepto, capturedImage.blob);

            setSuccessMessage(`Se ha notificado a ${nombreResidente}, residente del departamento ${codigoDepto}.`);
            setShowSuccessModal(true);
        } catch (error) {
            console.log('Error en el flujo:', error);
            setErrorMessage("Imagen Inválida");
            setShowErrorPopup(true);
        } finally {
            setShowProcessingModal(false);
        }
    };

    const processImage = async (blob) => {
        const formData = new FormData();
        formData.append('image', blob, 'photo.jpg');
        const url = 'http://34.46.252.163/api/process-image/';
        const response = await axios.post(url, formData);
        return response.data.text;
    };

    const analyzeText = async (text) => {
        const url = 'http://35.193.164.187/api/analyze-text/';
        const response = await axios.post(url, { text });
        return response.data.openai_depto;
    };

    const fetchResidenteData = async (codigoDepto) => {
        const url = 'http://34.29.123.189/api/residente/';
        const response = await axios.get(url, { params: { codigo_departamento: codigoDepto } });
        return response.data.nombre_completo;
    };

    const sendNotification = async (codigoDepto, blob) => {
        const formData = new FormData();
        formData.append('codigo_departamento', codigoDepto);
        formData.append('image', blob, 'photo.jpg');
        const url = 'http://146.148.75.57/api/notifications/send/';
        await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    };

    const handleClosePopup = () => {
        setIsClosingPopup(true);
        setTimeout(() => {
            setShowErrorPopup(false);
            setIsClosingPopup(false);
        }, 300);
    };

    return (
        <div className={isMobile ? styles.mobileContainer : styles.desktopContainer}>
            {!isMobile && (
                <div className={styles.desktopHeader}>
                    <button
                        className={`${styles.backButton}`}
                        onClick={() => router.push('/')}
                    >
                        Regresar al menú
                    </button>
                </div>
            )}
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
            {showFlash && <div className={styles.flash}></div>}
            {showConfirmModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <img src={capturedImage.url} alt="Foto capturada" className={styles.capturedImage} />
                        <p>¿Esta es la foto que desea enviar?</p>
                        <div className={styles.modalButtons}>
                            <button onClick={handleConfirmSend} className={`${styles.modalButton} ${styles.primary}`}>
                                Sí
                            </button>
                            <button onClick={() => setShowConfirmModal(false)} className={`${styles.modalButton} ${styles.secondary}`}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showProcessingModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>Procesando imagen...</p>
                    </div>
                </div>
            )}
            {showSuccessModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>{successMessage}</p>
                        <button 
                            onClick={() => setShowSuccessModal(false)} 
                            className={`${styles.modalButton} ${styles.single}`}
                            >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
            <video
            ref={videoRef}
            autoPlay
            playsInline
            className={isMobile ? styles.mobileVideo : styles.desktopVideo}
            ></video>
            <button
            onClick={captureImage}
            className={`${isMobile ? styles.mobileCaptureButton : styles.desktopCaptureButton}`}
            disabled={isLoading}
            >
            <i className="fas fa-camera" aria-hidden="true"></i>
            </button>
            {showErrorPopup && (
                <div className={`${styles.errorPopup} ${isClosingPopup ? styles.fadeOutPopup : ''}`}>
                    <div className={styles.errorPopupContent}>
                        <h3>Error</h3>
                        <p>{errorMessage}</p>
                        <button onClick={handleClosePopup}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
