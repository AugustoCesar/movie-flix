import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div>
      <h1>Movie {movie.title}</h1>
    </div>
  );
};

export default MovieCard;
