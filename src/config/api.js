import axios from 'axios';

// const API_CONFIG = {
//     imageProcessing: '/api/process-image/', // Usando el proxy definido en next.config.js
// };


/**
 * Procesa una imagen a través del backend.
 * @param {File} imageFile - Archivo de imagen a enviar.
 * @returns {Promise<Object>} Respuesta del backend.
 */
export const processImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await axios.post(API_CONFIG.imageProcessing, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Devuelve la respuesta del backend
    } catch (error) {
        if (error.response) {
            console.error(`Error en el backend: ${error.response.status} - ${error.response.statusText}`);
            console.error('Detalles del error:', error.response.data);
        } else if (error.request) {
            console.error('No se recibió respuesta del backend:', error.request);
        } else {
            console.error('Error al enviar la solicitud:', error.message);
        }
        throw new Error('Error al procesar la imagen. Por favor, intenta nuevamente.');
    }
};
