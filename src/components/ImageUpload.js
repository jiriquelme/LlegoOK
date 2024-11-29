import React, { useState } from 'react';
import { processImage } from '../path/to/api';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setResponse(null); // Reinicia la respuesta anterior
        setError(null); // Reinicia cualquier error previo
    };

    const handleSubmit = async () => {
        if (!file) {
            setError('Por favor, selecciona un archivo antes de enviarlo.');
            return;
        }

        try {
            const result = await processImage(file);
            console.log('Respuesta del servidor:', result);
            setResponse(result); // Guarda la respuesta del servidor
        } catch (err) {
            console.error('Error al enviar la imagen:', err.message);
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Subir Imagen</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Enviar Imagen</button>
            {response && (
                <div>
                    <h3>Respuesta del servidor:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ImageUpload;
