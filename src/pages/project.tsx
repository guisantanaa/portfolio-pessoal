import Link from 'next/link';
import styles from './project.module.scss';

export default function Project() {
  return (
    <main className={styles.projectItem}>
      <section className={styles.cardSection}>
        <div className={styles.cardDiv}>
          <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6780450666545602560/">
            <a target="_blank">
              <img
                src="gofisio2.png"
                width={389}
                height={222}
                alt="Projeto gofisio"
              />
              GoFisio
            </a>
          </Link>
        </div>
      </section>

      <section className={styles.cardSection}>
        <div className={styles.cardDiv}>
          <Link href="https://github.com/guisantanaa/Proofy">
            <a target="_blank">
              <img
                src="proofy.jpg"
                width={389}
                height={222}
                alt="Projeto proofy"
              />
              Proofy
            </a>
          </Link>
        </div>
      </section>

      <section className={styles.cardSection}>
        <div className={styles.cardDiv}>
          <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6724255249365811200/">
            <a target="_blank">
              <img
                src="happy.jpg"
                width={389}
                height={222}
                alt="Projeto happy"
              />
              Happy
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
