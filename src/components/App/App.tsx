import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import fetchMovies from "../../services/movieServices";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import { type Movie } from "../../types/movie";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  useEffect(() => {
    // First mount blank query check
    if (!query) {
      return;
    }

    console.log(movies); //

    const getMovies = async (): Promise<void> => {
      try {
        setLoader(true);
        //TODO: setError state to null - there's no error yet

        const resultData = await fetchMovies(query);
        // Check if the resut is an empty array
        if (resultData.results.length === 0) {
          toast.error("No movies found for your request");
          return;
        }
        console.log(resultData.results); //TODO: add further logic
      } catch (error) {
        toast.error(`Something went wrong, try again later. Error: ${error}`);
      } finally {
        setLoader(false);
      }
    };

    getMovies();

    //Search result cleanup before performing the next one.
    return () => {
      setMovies([]);
    };
  }, [query]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-right" reverseOrder={false} />
      {loader ? <Loader /> : null}
    </>
  );
};

export default App;
