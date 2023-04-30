import DotSwitch from "./DotSwitch";

export function ArticleCharacter({ characters, styles }) {
  return (
    <>
      {characters.results.map((c) => (
        <article key={c.id} className={styles.articleCh}>
          <header className={styles.header}>
            <img src={c.image} className={styles.imgCh} />
          </header>
          <main className={styles.mainArt}>
            <h2 className={styles.nameCh}>{c.name}</h2>
            <div className={styles.divInfo}>
              <div className={styles.divStatus}>
                <DotSwitch state={c.status.toLowerCase()} />
                <p>
                  {c.status} - {c.gender}
                </p>
              </div>
            </div>
            <div className={styles.divInfo}>
              <p className={styles.titleInfo}>Last known location:</p>
              <p>{c.location.name}</p>
            </div>
            <div className={styles.divInfo}>
              <p className={styles.titleInfo}>Species: </p>
              <span> {c.species} </span>
            </div>
          </main>
        </article>
      ))}
    </>
  );
}
