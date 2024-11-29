import { ImageProvider } from '../context/ImageContext';

function MyApp({ Component, pageProps }) {
    return (
        <ImageProvider>
            <Component {...pageProps} />
        </ImageProvider>
    );
}

export default MyApp;
