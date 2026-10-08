import styles from "./FinalCta.module.css";

const contacts = ["Telegram", "Instagram", "Email"];

export default function FinalCta() {
  return (
    <section
      id="contacts"
      className={styles.contacts}
      aria-labelledby="contacts-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>КОНТАКТЫ</span>

          <h2 id="contacts-title" className={styles.title}>
            Есть задача по продвижению?
          </h2>

          <p className={styles.description}>
            Расскажите, что происходит сейчас, чего хотите добиться и что уже
            пробовали. Обсудим задачу и возможные варианты работы.
          </p>
        </div>

        <div className={styles.contactArea}>
          <p className={styles.contactTitle}>Связаться со мной</p>

          <nav className={styles.contactLinks} aria-label="Контакты">
            {contacts.map((contact) => (
              <span key={contact} className={styles.contactLink}>
                {contact}
                <span aria-hidden="true">↗</span>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
