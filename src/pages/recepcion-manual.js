import React, { useState } from 'react';
import styles from '../styles/recepcionManual.module.css';
import { useRouter } from 'next/router';

export default function RecepcionManual() {
    const [codigoDepartamento, setCodigoDepartamento] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagenPreview, setImagenPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!codigoDepartamento || !imagen) {
            alert('Por favor, completa todos los campos.');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('codigo_departamento', codigoDepartamento);
        formData.append('image', imagen, imagen.name);

        try {
            const response = await fetch('http://146.148.75.57/api/notifications/send/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                router.push('/confirmacionRecepcion'); // Redirige a la página de confirmación
            } else {
                alert('Error al registrar la recepción.');
            }
        } catch (error) {
            console.error('Error al enviar la recepción:', error);
            alert('Hubo un problema al registrar la recepción. Inténtalo nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImagen(file);
        setImagenPreview(URL.createObjectURL(file)); // Crea una vista previa de la imagen
    };

    return (
        <div className={styles.container}>
            {loading && (
                <div className={styles.overlay}>
                    <div className={styles.overlayText}>Registrando...</div>
                </div>
            )}
            <h1 className={styles.title}>Recepción Manual</h1>
            <button className={styles.backButton} onClick={() => router.push('/')}>
                ← Volver
            </button>
            <form onSubmit={handleFormSubmit} className={styles.form}>
                <label className={styles.label} htmlFor="codigoDepartamento">
                    Código del Departamento:
                </label>
                <input
                    type="text"
                    id="codigoDepartamento"
                    value={codigoDepartamento}
                    onChange={(e) => setCodigoDepartamento(e.target.value)}
                    className={styles.input}
                    placeholder="Ingrese el código del departamento"
                />
                <label className={styles.label} htmlFor="imagen">
                    Imagen:
                </label>
                <input
                    type="file"
                    id="imagen"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.fileInput}
                />
                {imagenPreview && (
                    <div className={styles.previewContainer}>
                        <img src={imagenPreview} alt="Preview" className={styles.imagePreview} />
                    </div>
                )}
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    Registrar Recepción
                </button>
            </form>
        </div>
    );
}
