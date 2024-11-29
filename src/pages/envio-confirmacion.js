import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function EnvioConfirmacion() {
    return (
        <div className={styles.container}>
            <h1>Imágenes Enviadas</h1>
            <p>El servidor procesó las imágenes correctamente.</p>
            <Link href="/">
                <button className={styles.button}>Regresar al Inicio</button>
            </Link>
        </div>
    );
}
