import styles from "./FinalCta.module.css";

const contacts = [
  {
    name: "Telegram",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "Email",
    href: "#",
  },
];

export default function FinalCta() {
  return (
    <section
      id="contacts"
      className={styles.contacts}
      aria-labelledby="contacts-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>КОНТАКТЫ</span>

          <h2 id="contacts-title" className={styles.title}>
            Расскажите, что хотите изменить в продвижении
          </h2>

          <p className={styles.description}>
            Опишите задачу в нескольких словах. Дальше разберёмся вместе.
          </p>
        </div>

        <nav className={styles.contactList} aria-label="Способы связи">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              className={styles.contactLink}
            >
              <span>{contact.name}</span>

              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
