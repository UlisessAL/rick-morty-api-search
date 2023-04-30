import styles from "../styles/ButtonsPages.module.css";

export const ButtonsPages = ({ page, setPage, characters }) => {
  const noInfoPrev = characters.info.prev == null;
  const noInfoNext = characters.info.next == null;

  const checkPrevPage = (page) => {
    if (!noInfoPrev) return setPage(page - 1);
  };

  const checkNextPage = (page) => {
    if (!noInfoNext) return setPage(page + 1);
  };

  return (
    <div className={styles.divButtons}>
      <div className={styles.divSpace}>
        {!noInfoPrev && (
          <button
            className={styles.buttonPage}
            onClick={() => checkPrevPage(page)}
          >
            {page - 1}
          </button>
        )}
      </div>
      {page}
      <div className={styles.divSpace}>
        {!noInfoNext && (
          <button
            className={styles.buttonPage}
            onClick={() => checkNextPage(page)}
          >
            {page + 1}
          </button>
        )}
      </div>
    </div>
  );
};
