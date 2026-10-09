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
          <span className={styles.eyebrow}>КОНТАКТИ</span>

          <h2 id="contacts-title" className={styles.title}>
            Розкажіть, що хочете змінити у просуванні
          </h2>

          <p className={styles.description}>
            Опишіть свою ситуацію кількома словами. Я допоможу визначити, з чого
            варто почати.
          </p>
        </div>

        <nav className={styles.contactList} aria-label="Способи зв'язку">
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
