import { Link } from 'react-router-dom';
import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="container">
      <div className="catalog-container">
        <h1>Tela listagem de filmes</h1>
        <p>
          <Link to="/movies/1">Acessar /movies/1</Link>
        </p>
        <p>
          <Link to="/movies/2">Acessar /movies/2</Link>
        </p>
      </div>
    </div>
  );
};

export default MovieCatalog;
