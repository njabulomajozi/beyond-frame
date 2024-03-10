import { IIMovieDetailsServiceResponse, IMovieDetailsServiceResponse } from "@app/models/movie-details.model";
import { IMovieServiceResponse, IMovie } from "@app/models/movie-preview.model";

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

class MoviesService {
    private baseUrl = 'https://search.imdbot.workers.dev';

    constructor() {
        this.fetchRandomMovies = this.fetchRandomMovies.bind(this);
        this.fetchMovies = this.fetchMovies.bind(this);
        this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    }

    async fetchRandomMovies(params: { limit?: number }): Promise<Array<IMovie>> {
        const { limit } = params;

        const searchQuery = generateRandomMovie();

        console.log(searchQuery)

        try {
            const response = await fetch(`${this.baseUrl}?q=${searchQuery}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: IMovieServiceResponse = await response.json();
            return data.description
                .slice(0, limit)
                .map((movie) => {
                    return {
                        id: movie["#IMDB_ID"],
                        poster: movie["#IMG_POSTER"],
                        title: movie["#TITLE"],
                        year: movie["#YEAR"]
                    }
                });
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }

    async fetchMovies(params: { searchQuery: string, limit?: number }): Promise<Array<IMovie>> {
        const { searchQuery, limit } = params;

        try {
            const response = await fetch(`${this.baseUrl}?q=${searchQuery}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: IMovieServiceResponse = await response.json();
            return data.description
                .slice(0, limit)
                .map((movie) => {
                    return {
                        id: movie["#IMDB_ID"],
                        poster: movie["#IMG_POSTER"],
                        title: movie["#TITLE"],
                        year: movie["#YEAR"]
                    }
                });
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }

    async fetchMovieDetails(params: { id: string }): Promise<IIMovieDetailsServiceResponse> {
        const { id } = params;

        try {
            const response = await fetch(`${this.baseUrl}/?tt=${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: IMovieDetailsServiceResponse = await response.json();
            return {
                description: data.short.description,
                actors: data.short.actor
            }
        } catch (error) {
            console.error('Error fetching movie details:', error);
            throw error;
        }
    }
}

export default new MoviesService();