import { useEffect, useRef, useState } from "react";
import styles from "../../styles/ShownCharacters.module.css";
import { ArticleCharacter } from "@/components/ArticleCharacter";
import { ButtonsPages } from "@/components/ButtonsPages";

export default function CharacterPreview({ characters }) {
  const [theCharacters, setTheCharacters] = useState(characters);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef();

  const searchCharacter = async (name, page) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`;
    const response = await fetch(url);
    const characters = await response.json();
    const hasError = characters.error === "There is nothing here";
    if (!hasError) {
      setTheCharacters(characters);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    searchCharacter(name, page);
  }, [name, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  return (
    <div className={styles.pageDiv}>
      <section className={styles.sectionSearch}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>Search by name</label>
          <input
            ref={inputRef}
            name={name}
            placeholder="Rick, Morty..."
            className={styles.inputName}
            onChange={handleChange}
          />
        </form>
      </section>

      {error ? (
        <h2>No results</h2>
      ) : (
        <>
          {" "}
          <section className={styles.sectionCh}>
            <ArticleCharacter characters={theCharacters} styles={styles} />
          </section>
          <ButtonsPages
            page={page}
            setPage={setPage}
            characters={theCharacters}
          />{" "}
        </>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const url = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(url);
  const characters = await response.json();

  return {
    props: {
      characters,
    },
  };
}
