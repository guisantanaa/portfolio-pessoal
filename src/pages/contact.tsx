import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.input}>
      <h1>Me envie um email</h1>

      <p>Seu nome</p>
      <input type="name" />

      <p>Seu email</p>
      <input type="e-mail" />

      <p>Sua mensagem</p>
      <input type="text" />

      <div className={styles.button}>
        <button type="submit">Enviar email</button>
      </div>
    </div>
  );
}
