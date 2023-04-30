import Link from "next/link";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <div className={styles.divOne}>
      <main className={styles.main}>
        <section className={styles.section}>
          <p className={styles.intro}>Welcome to</p>
          <h1 className={styles.title}>Rick and Morty characters searcher</h1>
          <Link href={`/characters`} className={styles.divBtnStart}>
            Start Searching!
          </Link>
        </section>
      </main>
    </div>
  );
}
