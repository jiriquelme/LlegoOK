import '../styles/globals.css'; // Si tienes estilos globales
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome local
import { ImageProvider } from '../context/ImageContext';

function MyApp({ Component, pageProps }) {
  return (
    <ImageProvider>
      <Component {...pageProps} />
    </ImageProvider>
  );
}

export default MyApp;
