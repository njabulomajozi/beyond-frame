import { Suspense, memo, useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@app/components/generic/ui/alert-dialog";
import { IMovieDetails, MovieDetails } from "@app/models/movie-details.model";
import { IMovie } from "@app/models/movie-preview.model";

const Movie = memo((props: IMovie) => {
    const {
        id,
        poster,
        title,
        year
    } = props;

    const [details, setDetails] = useState<IMovieDetails>({
        actors: []
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDetails = useCallback(debounce((id) => {
        setLoading(true);
        setError(null);
        fetch(`https://search.imdbot.workers.dev/?tt=${id}`)
            .then(response => response.json())
            .then((response: MovieDetails) => {
                setDetails({
                    description: response.short.description,
                    actors: response.short.actor
                });
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, 500), [id]);

    useEffect(() => {
        if (id) {
            fetchDetails(id);
        }
    }, [id, fetchDetails]);

    const actorsList = useMemo(() => details.actors?.map((actor) => (
        <li key={actor.name}>{actor.name}</li>
    )), [details.actors]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AlertDialog>
                <AlertDialogTrigger>
                    <div className="p-4 bg-white rounded shadow">
                        <img src={poster} alt={title} className="w-full h-64 object-cover rounded" />
                        <h2 className="text-xl font-bold mt-2">{title}</h2>
                        <p className="text-gray-600">{year}</p>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        {details.description && <AlertDialogDescription>{details.description}</AlertDialogDescription>}
                        <img src={poster} alt={title} className="w-full h-64 object-cover rounded" />
                        <ul>
                            {actorsList}
                        </ul>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Suspense>
    );
});

export default Movie;