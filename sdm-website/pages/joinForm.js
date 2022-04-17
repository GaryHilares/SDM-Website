import styles from "../styles/joinForm.module.css";

export default function JoinForm() {
    return (
        <div className={styles.form_wrapper}>
            <h1 className={styles.form__title}>Formulario de postulación</h1>
            <form action="https://www.actionforms.io/e/r/gary-test" method="POST">
                <div className={styles.form__input_wrapper}>
                    <input className={styles.form__email_entry} type="email" name="email" placeholder="Correo..." />
                </div>
                <div className={styles.form__input_wrapper}>
                    <textarea className={styles.form__message_entry} name="message" placeholder="Mensaje..."></textarea>
                </div>
                <div className={styles.form__input_wrapper}>
                    <span className={styles.form__notice}>
                        Al hacer clic en &quot;Enviar&quot;, aceptas recibir correos de Sonrisas del Mañana para comunicarte
                        sobre el estado de tu aplicación.
                    </span>
                </div>
                <div className={styles.form__input_wrapper}>
                    <button className={styles.form__submit_button} type="submit">Enviar</button>
                </div>
            </form>
        </div >
    );
}