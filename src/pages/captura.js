import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Captura() {
    const [isCameraOn, setIsCameraOn] = useState(false);
    const videoRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        async function setupCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error al acceder a la cámara:', error);
            }
        }

        if (isCameraOn) {
            setupCamera();
        }

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [isCameraOn]);

    const captureImage = async () => {
        if (!videoRef.current) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(async (blob) => {
            if (!blob) return;

            try {
                // Paso 1: Enviar la imagen a Google Vision AI
                const formData_ImageProcessing = new FormData();
                formData_ImageProcessing.append('image', blob, 'photo.jpg');

                console.log('Formdata:', formData_ImageProcessing);

                const url_ImageProcessing = 'http://34.46.252.163/api/process-image/';

                const response_ImageProcessing = await axios.post(url_ImageProcessing, formData_ImageProcessing);
                const texto_google =  response_ImageProcessing.data.text;;
                console.log('Respuesta de Google Vision AI:', texto_google);

                // Paso 2: Enviar el texto procesado a OpenAI GPT
                const url_TextAnalysis = 'http://35.193.164.187/api/analyze-text/';
                const response_TextAnalysis = await axios.post(url_TextAnalysis, {
                    text: texto_google,
                });

                const codigo_depto = response_TextAnalysis.data.openai_depto;

                console.log('Respuesta de OpenAI:', codigo_depto);


                // Paso 3: Consultar los datos del residente
                const url_ManagementService = 'http://34.29.123.189/api/residente/';
                const response_ManagementService = await axios.get(url_ManagementService, {
                    params: { codigo_departamento: codigo_depto },
                });

                const nombre_residente = response_ManagementService.data.nombre_completo;
                console.log('Respuesta de Management:', response_ManagementService.data);

                // Paso 4: Enviar la notificación
                const url_Notification = 'http://146.148.75.57/api/notifications/send/';

                // Crea un nuevo FormData para la notificación
                const formData_Notification = new FormData();
                formData_Notification.append('codigo_departamento', codigo_depto);
                formData_Notification.append('image', blob, 'photo.jpg');

                const response_Notification = await axios.post(url_Notification, formData_Notification, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                console.log('Respuesta de Notificaciones:', response_Notification.data);

                // Mostrar mensaje al usuario
                const mensaje_Notificacion = `Se ha notificado a ${nombre_residente}, residente del departamento ${codigo_depto}.`;
                alert(mensaje_Notificacion);

                // Redirigir a otra página si es necesario
                router.push('/envio-confirmacion');

            } catch (error) {
                console.error('Error en el flujo:', error);
                alert('Hubo un error al procesar la solicitud. Por favor, intenta nuevamente.');
            }
        });
    };

    return (
        <div className={styles.container}>
            <h1>Captura una Etiqueta</h1>
            {isCameraOn ? (
                <>
                    <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
                    <button onClick={captureImage} className={styles.captureButton}>
                        Capturar
                    </button>
                </>
            ) : (
                <button onClick={() => setIsCameraOn(true)} className={styles.button}>
                    Iniciar Cámara
                </button>
            )}
        </div>
    );
}
