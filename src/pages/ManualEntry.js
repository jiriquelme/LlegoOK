import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ManualEntry.module.css';

export default function ManualEntry() {
  const [department, setDepartment] = useState('');
  const [resident, setResident] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Depto.: ${department}, Residente: ${resident}, WhatsApp: ${whatsapp}`);
  };

  const handleBackToMenu = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Ingresar Manualmente
          <br />
          Datos del Residente
        </h1>
      </div>
      <div><img src="/icons/Treasure-Chest--Streamline-Ultimate.png" alt="Header Icon" className={styles.headerIcon} /></div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <img src="/icons/Real-Estate-Favorite-Building-Choose--Streamline-Ultimate.png" alt="Depto Icon" className={styles.icon} />
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className={styles.input}
            placeholder="Ej. 101A"
            required
          />
          <span className={styles.inputLabel}>Depto.</span>
        </label>
        <label className={styles.label}>
          <img src="/icons/History-Man-Snake-Charmer--Streamline-Ultimate.png" alt="Resident Icon" className={styles.icon} />
          <input
            type="text"
            value={resident}
            onChange={(e) => setResident(e.target.value)}
            className={styles.input}
            placeholder="Nombre del residente"
            required
          />
          <span className={styles.inputLabel}>Residente</span>
        </label>
        <label className={styles.label}>
          <img src="/icons/Whatsapp-Logo--Streamline-Ultimate.png" alt="WhatsApp Icon" className={styles.icon} />
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={styles.input}
            placeholder="Número de WhatsApp"
            required
          />
          <span className={styles.inputLabel}>WhatsApp</span>
        </label>
        <button type="submit" className={styles.submitButton}>Guardar</button>
        <button type="button" onClick={handleBackToMenu} className={styles.backButton}>Volver al Inicio</button>
      </form>
    </div>
  );
}
