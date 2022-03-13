import { ReactComponent as MainImage } from 'assets/images/home-image.svg';
import Login from './Login';

import './styles.css';

const Home = () => {
  return (
    <div className="container home-container">
      <div className="home-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
          <MainImage />
      </div>
      <div>
        <Login/>
      </div>
    </div>
  );
};

export default Home;
