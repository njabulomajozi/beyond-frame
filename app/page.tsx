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
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  const triggerSearch = (search: string) => {
    setSearchQuery(search);
  };

  const debouncedTriggerSearch = useCallback(
    debounce((search) => {
      triggerSearch(search);
    }, 500),
    []
  );

  useEffect(() => {
    if (searchQuery === '' && !isInitialRender.current) {
      return;
    }

    setLoading(true);
    setError(null);

    let funcToRun = moviesService.fetchMovies;
    let input: any = { searchQuery };

    if (searchQuery.length < 1) {
      funcToRun = moviesService.fetchRandomMovies;
      input = { limit: 10 };
    }

    funcToRun(input).then((movies) => {
      setMovies(movies);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });

    if (isInitialRender.current) {
      isInitialRender.current = false;
    }
  }, [searchQuery]);


  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center mt-10">
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full p-2 border border-gray-300 rounded text-red-500"
          value={inputValue}
          onChange={(e) => {
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
