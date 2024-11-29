import axios from 'axios';

const API_CONFIG = {
    imageProcessing: "/api/process-image", // Ruta relativa al backend
};

/**
 * Procesa una imagen a través del backend.
 * @param {Blob} imageFile - Archivo de imagen a enviar.
 * @returns {Promise<Object>} Respuesta del backend.
 */
export const processImage = async (imageFile) => {
    
    const url_ImageProcessing = 'http://34.46.252.163/api/process-image/';

    const formData_ImageProcessing = new FormData();

    formData_ImageProcessing.append('image', imageFile);

    const response_ImageProcessing = await axios.post(url_ImageProcessing, formData_ImageProcessing, { // Enviar la solicitud POST a tu backend
    headers: {
        'Content-Type': 'multipart/form-data'
    }
    });

    console.log('Respuesta de Google Vision AI:', response_ImageProcessing.data);
//     const formData = new FormData();
//     formData.append('image', imageFile); // Campo esperado por el backend

//     try {
//         const response = await axios.post(API_CONFIG.imageProcessing, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         return response.data; // Retorna el JSON de respuesta del backend
//     } catch (error) {
//         if (error.response) {
//             // El backend respondió con un error (código de estado fuera de 2xx)
//             console.error(`Error en el backend: ${error.response.status} - ${error.response.statusText}`);
//             console.error('Detalles del error:', error.response.data);
//         } else if (error.request) {
//             // La solicitud fue enviada pero no hubo respuesta
//             console.error('No se recibió respuesta del backend:', error.request);
//         } else {
//             // Error al configurar la solicitud
//             console.error('Error al enviar la solicitud:', error.message);
//         }
//         throw new Error('Error al procesar la imagen. Por favor, intenta nuevamente.');
//     }
};
