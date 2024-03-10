'use client'
import { useCallback, useEffect, useState } from "react";
import debounce from 'lodash/debounce';
import { IMovie, MoviePreview } from "@app/models/movie-preview.model";
import Movie from "@app/components/domain/movie";

const generateRandomMovie = () => {
  const names = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound', 'Legacy', 'Sharp',
    'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi',
    'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease',
    'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];

  return names[Math.floor(Math.random() * names.length)];
}

export default function Home() {
  const [isRandom, setIsRandom] = useState(true);
  const [inputValue, setInputValue] = useState(generateRandomMovie());
  const [searchQuery, setSearchQuery] = useState(inputValue);
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
    fetch(`https://search.imdbot.workers.dev?q=${searchQuery}`)
      .then(response => response.json())
      .then((response: MoviePreview) => {
        return response.description.map((movie) => {
          return {
            id: movie["#IMDB_ID"],
            poster: movie["#IMG_POSTER"],
            title: movie["#TITLE"],
            year: movie["#YEAR"]
          }
        });
      })
      .then((movies) => {
        return isRandom ? movies.slice(0, 10) : movies;
      })
      .then(data => setMovies(data));
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
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
