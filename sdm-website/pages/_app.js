import AOS from 'aos';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />
}

export default MyApp;
