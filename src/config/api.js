import axios from 'axios';

// Configuración de las rutas de tu API
const API_CONFIG = {
    imageProcessing: '/api/process-image/', // Proxy definido en next.config.js
    analyzeText: '/api/analyze-text/', // Ruta para analizar texto
    getResidente: '/api/residente/' // Ruta para obtener datos del residente
};

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
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

/**
 * Analiza el texto usando el backend.
 * @param {string} text - Texto a analizar.
 * @returns {Promise<string>} Departamento extraído.
 */
export const analyzeText = async (text) => {
    try {
        const response = await axios.post(API_CONFIG.analyzeText, { text });
        return response.data.openai_depto; // Ajusta según tu backend
    } catch (error) {
        handleApiError(error);
    }
};

/**
 * Obtiene los datos del residente basado en el código del departamento.
 * @param {string} codigoDepto - Código del departamento.
 * @returns {Promise<string>} Nombre completo del residente.
 */
export const getResidente = async (codigoDepto) => {
    try {
        const response = await axios.get(API_CONFIG.getResidente, {
            params: { codigo_departamento: codigoDepto },
        });
        return response.data.nombre_completo; // Ajusta según tu backend
    } catch (error) {
        handleApiError(error);
    }
};

/**
 * Maneja errores de la API.
 * @param {Error} error - Objeto de error.
 */
const handleApiError = (error) => {
    if (error.response) {
        console.error(`Error en el backend: ${error.response.status} - ${error.response.statusText}`);
        console.error('Detalles del error:', error.response.data);
    } else if (error.request) {
        console.error('No se recibió respuesta del backend:', error.request);
    } else {
        console.error('Error al enviar la solicitud:', error.message);
    }
    throw new Error('Error al comunicarse con el backend. Por favor, intenta nuevamente.');
};
