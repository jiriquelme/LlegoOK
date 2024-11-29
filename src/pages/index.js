// pages/index.js
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simula un tiempo de carga de 500ms
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>Traqueteando...</div>
      ) : (
        <>
          <div className={styles.header}>
            <img src="/icons/Shipment-Package--Streamline-Ultimate.png" alt="Icono LlegOK" className={styles.centerIcon} />
          </div>
          <h1 className={styles.appTitle}>LlegOK.app</h1>
          <h1 className={styles.title}>Bienvenido</h1>
          <p className={styles.description}>Captura y gestiona las encomiendas de forma rápida y sencilla</p>
          <div className={styles.description}>Powered with IA</div>
          <div className={styles.menu}>
            <Link href="/captura" className={styles.menuButton} onClick={handleButtonClick}>
              <img src="/icons/Shipment-Sign-Smartphone--Streamline-Ultimate.png" alt="Tomar Imagen" className={styles.icon} />
              <span>Recepción</span>
            </Link>

            <Link href="/QRscanner" className={styles.menuButton} onClick={handleButtonClick}>
              <img src="/icons/Shipment-Approve-Smartphone--Streamline-Ultimate.png" alt="Información de Encomiendas" className={styles.icon} />
              <span>Validar QR</span>
            </Link>
            <Link href="/historial" className={styles.menuButton} onClick={handleButtonClick}>
              <img src="/icons/Shipment-Monitor-Track--Streamline-Ultimate.png" alt="historial" className={styles.icon} />
              <span>Historial</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
