import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Обговорюємо запит",
    description:
      "Ви розповідаєте про свій бізнес, поточні труднощі та результати, яких прагнете досягти.",
  },
  {
    number: "02",
    title: "Я аналізую ситуацію",
    description:
      "Вивчаю ваш запит, визначаю можливі точки зростання та з'ясовую, що варто змінити в просуванні.",
  },
  {
    number: "03",
    title: "Переходимо до роботи",
    description:
      "Я готую план дій, погоджую його з вами та беруся до реалізації узгоджених рішень.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className={styles.process}
      aria-labelledby="process-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>ЯК ВІДБУВАЄТЬСЯ РОБОТА</span>

          <h2 id="process-title" className={styles.title}>
            Три прості кроки
          </h2>

          <p className={styles.description}>
            Вам не потрібно заздалегідь розбиратися в маркетингу чи готувати
            докладне технічне завдання. Достатньо розповісти про свій бізнес і
            те, чого ви хочете досягти.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>

                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
