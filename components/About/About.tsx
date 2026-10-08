import Image from "next/image";
import styles from "./About.module.css";

const facts = [
  {
    label: "Специализация",
    value: "Таргетированная реклама, SMM и маркетинговая стратегия",
  },
  {
    label: "Платформы",
    value: "Meta Ads, Instagram, TikTok",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/nataliia.jpg"
            alt="Наталия — специалист по digital-маркетингу"
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>ОБО МНЕ</span>

            <h2 id="about-title" className={styles.title}>
              Кто стоит за маркетингом
            </h2>
          </div>

          <div className={styles.text}>
            <p>
              Я помогаю бизнесу привлекать клиентов через digital-маркетинг и
              выстраивать продвижение вокруг реальных задач бизнеса.
            </p>

            <p>
              Работаю с рекламой, SMM и маркетинговой стратегией. Сначала
              разбираюсь в задаче, затем выбираю инструменты, которые
              действительно имеют смысл для проекта.
            </p>
          </div>

          <div className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <span className={styles.factLabel}>{fact.label}</span>
                <p className={styles.factValue}>{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
