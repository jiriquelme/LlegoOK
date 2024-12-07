import styles from '../styles/AlreadyDelivered.module.css';
import { useRouter } from 'next/router';

export default function EntregaExitosa() {
  const router = useRouter();
  
  const handleReturnToHome = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Encomienda ya Registrada!</h1>
      <p className={styles.message}>Esta encomienda ya ha sido entregada.</p>
      <button className={styles.homeButton} onClick={handleReturnToHome}>
        Volver al Inicio
      </button>
    </div>
  );
}
