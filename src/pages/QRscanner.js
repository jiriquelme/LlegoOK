import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import styles from '../styles/QRScanner.module.css';

// Importar QR Scanner dinámicamente
const QRScannerComponent = dynamic(() => import('react-qr-scanner'), { ssr: false });

export default function QRScanner() {
    const [result, setResult] = useState(''); // Resultado del escaneo
    const [isSuccess, setIsSuccess] = useState(false); // Éxito en el escaneo
    const router = useRouter();

    const handleScan = async (data) => {
        if (data) {
            console.log('QR escaneado:', data);
    
            try {
                // Intenta parsear el texto del QR
                let parsedData;
                try {
                    const correctedText = data.text.replace(/'/g, '"');
                    parsedData = JSON.parse(correctedText);
                } catch (jsonError) {
                    console.error('Error al parsear el texto del QR:', jsonError);
                    alert('El QR escaneado no tiene un formato válido.');
                    return;
                }
    
                console.log('Datos parseados:', parsedData);
    
                if (!parsedData.id_encomienda) {
                    alert('El QR escaneado no contiene un ID válido.');
                    return;
                }
    
                // Crear form-data
                const formData = new FormData();
                formData.append('qr_data', parsedData.id_encomienda);
    
                // Enviar datos al backend
                const url = 'http://34.29.123.189/api/analizar-qr/';
                console.log('Enviando datos al backend:', formData);
    
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                console.log('Respuesta del backend:', response.data);
    
                if (response.status === 200 && response.data.status) {
                    // Redirige directamente a la página de éxito
                    router.push('/entrega-exitosa');
                } else {
                    alert('Error: ' + response.data.detail || 'El QR no es válido o no se encontró en el sistema.');
                }
            } catch (error) {
                console.error('Error al procesar el QR:', error);
                if (error.response && error.response.data && error.response.data.detail) {
                    alert('Error: ' + error.response.data.detail);
                } else {
                    alert('Hubo un error al procesar el QR. Intenta nuevamente.');
                }
            }
        }
    };
    
    

    const handleError = (err) => {
        console.error('Error del lector de QR:', err);
        alert('Hubo un problema al leer el QR. Intenta nuevamente.');
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>Escáner de QR</h1>
                <img
                    src="/icons/Photography-Equipment-Flash-Light--Streamline-Ultimate.png"
                    alt="Ícono de QR"
                    className={styles.titleIcon}
                />
            </div>
            <div className={`${styles.scannerWrapper} ${isSuccess ? styles.success : ''}`}>
                <QRScannerComponent
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
            </div>
            <button className={styles.button} onClick={() => router.push('/')}>
                ← Volver
            </button>
            {result && <p className={styles.result}>Resultado: {result}</p>}
        </div>
    );
}
