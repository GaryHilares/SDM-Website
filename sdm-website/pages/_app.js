import AOS from 'aos';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    setTimeout(function () { AOS.refresh(); }, 100);
  }, []);

  return <Component {...pageProps} />
}

export default MyApp;
