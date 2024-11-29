import { useState } from 'react';

export default function TestPage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setResponseData(null);
        setError(null);
    };

    const handleTest = async () => {
        if (!selectedFile) {
            setError('Por favor, selecciona un archivo antes de enviar.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('/api/process-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error en el backend: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            setError(`Hubo un problema: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Página de Prueba</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleTest}>Enviar Imagen</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
        </div>
    );
}
