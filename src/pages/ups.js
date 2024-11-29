// pages/ups.js
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import styles from '../styles/Error.module.css';

// Dynamically import Lottie to disable server-side rendering
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '../../public/animations/error-animation.json';

export default function ErrorPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Extrae el mensaje de error de la URL
  const { message = "Parece que hubo un problema al conectar con el servidor." } = router.query;

  useEffect(() => {
    // Se asegura que el estado se actualice solo en el cliente
    setIsClient(true);
  }, []);

  const handleRetry = () => {
    router.push('/'); // Redirecciona de vuelta a la página de inicio o la última página válida
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ups!!!</h1>
      <p className={styles.message}>{decodeURIComponent(message)}</p>
      <div className={styles.animationContainer}>
        {/* Renderiza la animación Lottie solo en el cliente */}
        {isClient && (
          <Lottie animationData={animationData} style={{ height: 200, width: 200 }} />
        )}
      </div>
      <button className={styles.retryButton} onClick={handleRetry}>Volver al Inicio</button>
    </div>
  );
}
