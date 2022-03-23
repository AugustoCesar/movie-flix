import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Genre } from 'types/genre';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();
  
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pagenumber: number) => {
    setControlComponentsData({
      activePage: pagenumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  
  return (
    <div className="container">
      <div className="catalog-container">
        <h1>Tela listagem de filmes</h1>

        <div className="row">
        {page?.content.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-12">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
        {/* <p>
          <Link to="/movies/1">Acessar /movies/1</Link>
        </p>
        <p>
          <Link to="/movies/2">Acessar /movies/2</Link>
        </p> */}
      </div>
    </div>
  );
};

export default MovieCatalog;
