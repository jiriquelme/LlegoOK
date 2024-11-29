// components/BackButton.js
import { useRouter } from 'next/router';
//import styles from 'C:/Users/joseg/OneDrive/Escritorio/DUOC RAMOS/BackButton.module.css';


export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Esta función vuelve a la página anterior
  };

  return (
    <button style={styles.button} onClick={handleBack}>
      Volver
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};
