import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { requestBackend } from 'util/requests';

import './styles.css';

type Props = {
  movieId: string;
};

const MovieInfoCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="base-card movie-info-card">
      <div className="card-info-img-container">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="card-info-text-container">
        <h2>{movie?.title}</h2>
        <h4>{movie?.year}</h4>
        <p>{movie?.subTitle}</p>
        <div className="card-info-synopsis-container">
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoCard;
