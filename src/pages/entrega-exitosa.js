// pages/entrega-exitosa.js
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import styles from '../styles/Success.module.css';
import { useRouter } from 'next/router';

export default function EntregaExitosa() {
  const router = useRouter();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handleReturnToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Residente Válido!</h1>
      <p className={styles.message}>Ahora puede entregar la encomienda.</p>
      <button className={styles.homeButton} onClick={handleReturnToHome}>
        Volver al Inicio
      </button>
    </div>
  );
}
