import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>Cargando...</div>
      ) : (
        <>
          <header className={styles.header}>
            <img
              src="/icons/icono_transparente.png"
              alt="Icono LlegOK"
              className={styles.logo}
            />
            <h1 className={styles.title}>LlegOK.app</h1>
            <p className={styles.subtitle}>Gestión de encomiendas rápida y sencilla</p>
          </header>
          <main className={styles.main}>
            <div className={styles.cardContainer}>
              <Link href="/captura" className={styles.card} onClick={handleButtonClick}>
                <img
                  src="/icons/Shipment-Sign-Smartphone--Streamline-Ultimate.png"
                  alt="Tomar Imagen"
                  className={styles.cardIcon}
                />
                <h3>Recepción</h3>
                <p>Captura imágenes y registra nuevas encomiendas.</p>
              </Link>

              <Link href="/QRscanner" className={styles.card} onClick={handleButtonClick}>
                <img
                  src="/icons/Shipment-Approve-Smartphone--Streamline-Ultimate.png"
                  alt="Validar QR"
                  className={styles.cardIcon}
                />
                <h3>Validar QR</h3>
                <p>Escanea y valida códigos QR fácilmente.</p>
              </Link>

              <Link href="/historial" className={styles.card} onClick={handleButtonClick}>
                <img
                  src="/icons/Shipment-Monitor-Track--Streamline-Ultimate.png"
                  alt="Historial"
                  className={styles.cardIcon}
                />
                <h3>Historial</h3>
                <p>Consulta el historial completo de encomiendas.</p>
              </Link>

              {/* Nuevo botón de Recepción Manual */}
              <Link href="/recepcion-manual" className={styles.card} onClick={handleButtonClick}>
                <img
                  src="/icons/Task-Checklist-Write--Streamline-Ultimate.png" /* Puedes reemplazar este ícono en el futuro */
                  alt="Recepción Manual"
                  className={styles.cardIcon}
                />
                <h3>Recepción Manual</h3>
                <p>Registra encomiendas manualmente sin imágenes.</p>
              </Link>
            </div>
          </main>
          <footer className={styles.footer}>
            Powered with <strong>IA</strong> © {new Date().getFullYear()}
          </footer>
        </>
      )}
    </div>
  );
}
