import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext({
    imageSrc: null,
    setImage: () => {},
    clearImage: () => {},
});

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
    const [imageSrc, setImageSrc] = useState(null);

    const setImage = (imgSrc) => {
        setImageSrc(imgSrc);
    };

    const clearImage = () => {
        setImageSrc(null);
    };

    return (
        <ImageContext.Provider value={{ imageSrc, setImage, clearImage }}>
            {children}
        </ImageContext.Provider>
    );
};
