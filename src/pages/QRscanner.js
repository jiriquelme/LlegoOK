import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import styles from '../styles/QRScanner.module.css';

// Importar QR Scanner dinámicamente
const QRScannerComponent = dynamic(() => import('react-qr-scanner'), { ssr: false });

export default function QRScanner() {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isScanning, setIsScanning] = useState(true); // Controla si el escáner está activo
    const router = useRouter();

    const handleScan = async (data) => {
        if (!data || !data.text || !isScanning) return; // Asegúrate de que el escáner esté activo
        console.log('Data recibida:', data);

        setIsLoading(true);
        setErrorMessage('');
        try {
            let parsedData;
            try {
                const correctedText = data.text.replace(/'/g, '"'); // Accede a data.text
                console.log('Texto corregido:', correctedText);
                parsedData = JSON.parse(correctedText);
            } catch (error) {
                throw new Error('El QR escaneado no tiene un formato válido.');
            }

            if (!parsedData.id_encomienda) {
                throw new Error('El QR escaneado no contiene un ID válido.');
            }

            const encomiendaId = parsedData.id_encomienda;
            const estadoUrl = `http://34.29.123.189/api/encomienda/${encomiendaId}/estado/`;

            const estadoResponse = await axios.get(estadoUrl);

            if (estadoResponse.data.estado === 'Entregado') {
                setIsScanning(false); // Desactiva el escáner antes de redirigir
                router.push('/entrega-ya-realizada');
                return;
            }

            const formData = new FormData();
            formData.append('qr_data', encomiendaId);

            const url = 'http://34.29.123.189/api/analizar-qr/';
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200 && response.data.status) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsScanning(false); // Desactiva el escáner antes de redirigir
                    router.push('/entrega-exitosa');
                }, 2000);
            } else {
                throw new Error(response.data.detail || 'El QR no es válido o no se encontró en el sistema.');
            }
        } catch (error) {
            setErrorMessage(error.message || 'Hubo un error al procesar el QR.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleError = (error) => {
        console.error(error);
        setErrorMessage('Hubo un error al acceder a la cámara.');
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>Escáner de QR</h1>
            </div>
            <div className={styles.scannerWrapper}>
                {isScanning && (
                    <QRScannerComponent
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                )}
                {isLoading && (
                    <div className={styles.overlay}>
                        <p className={styles.loadingText}>Analizando QR...</p>
                    </div>
                )}
            </div>
            {errorMessage && (
                <div className={styles.errorMessage}>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button
                className={styles.button}
                onClick={() => {
                    setIsScanning(false); // Detén el escáner al volver al inicio
                    router.push('/');
                }}
            >
                Volver al inicio
            </button>
        </div>
    );
}
