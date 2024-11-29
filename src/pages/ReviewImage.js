import { useRouter } from 'next/router';
import { useImage } from '../context/ImageContext';
import { processImage, analyzeText, getResidente } from '../config/api';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function ReviewImage() {
    const { imageSrc, clearImage } = useImage();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);
    const router = useRouter();

    const handleSend = async () => {
        setLoading(true);
        setError('');
        try {
            const imageResponse = await processImage(imageSrc);
            console.log('Respuesta del procesamiento de imagen:', imageResponse);

            const textResponse = await analyzeText(imageResponse.text);
            console.log('Respuesta del análisis de texto:', textResponse);

            const residenteResponse = await getResidente(textResponse.openai_depto);
            console.log('Información del residente:', residenteResponse);

            setResult({
                residente: residenteResponse.nombre_completo,
                departamento: textResponse.openai_depto,
            });

            clearImage();
        } catch (err) {
            console.error('Error durante el proceso:', err);
            setError('Hubo un error durante el procesamiento. Intenta nuevamente.');
        }
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <h1>Revisar Imagen</h1>
            {imageSrc && <img src={URL.createObjectURL(imageSrc)} alt="Preview" className={styles.imagePreview} />}
            {error && <p className={styles.error}>{error}</p>}
            {loading ? (
                <p>Procesando...</p>
            ) : (
                <button onClick={handleSend} className={styles.sendButton}>Enviar</button>
            )}
            {result && (
                <div className={styles.result}>
                    <h2>Resultado</h2>
                    <p>Residente: {result.residente}</p>
                    <p>Departamento: {result.departamento}</p>
                </div>
            )}
        </div>
    );
}
