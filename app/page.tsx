'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import debounce from 'lodash/debounce';
import { IMovie } from "@app/models/movie-preview.model";
import MovieComponent from "@app/components/domain/movie";
import moviesService from "@app/services/movies.service";

export default function Home() {
  const isInitialRender = useRef(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRandom, setIsRandom] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  const triggerSearch = (search: string) => {
    setIsRandom(false);
    setSearchQuery(search);
  };

  const debouncedTriggerSearch = useCallback(
    debounce((search) => {
      triggerSearch(search);
    }, 500),
    []
  );

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
  
    setLoading(true);
    setError(null);

    const funcToRun = isRandom ? moviesService.fetchRandomMovies : moviesService.fetchMovies;
    const input = isRandom ? { limit: 10 } : { searchQuery: inputValue };

    funcToRun(input).then((movies) => {
      setMovies(movies);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, [searchQuery, inputValue]);


  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center mt-10">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full p-2 border border-gray-300 rounded text-red-500"
          value={inputValue}
          onChange={(e) => {
            isRandom && setIsRandom(false);
            setInputValue(e.target.value);
            debouncedTriggerSearch(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {movies.map((movie) => (
          <MovieComponent key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
