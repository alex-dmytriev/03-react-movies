import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
  const handleSubmit = (formData: FormData) => {
    const userInput = formData.get("query") as string;
    const query = userInput.trim();

    if (!query) {
      toast.error("Please enter your search query");
    } else {
      console.log("valid input: ", query);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
