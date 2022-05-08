import Presentation from '../components/Presentation';
import { NavigationBar } from '../components/NavigationBar';
import styles from "../styles/main.module.css";
import Footer from '../components/Footer.js';

function Error({ statusCode }) {
    return (
        <div className={styles.content}>
            <NavigationBar />
            <Presentation title={`Error ${statusCode}`} subtitle={"¡Lo siento! Hubo un problema mientras intentabamos hallar su página. Por favor intente de nuevo.."} />
            <Footer />
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error;