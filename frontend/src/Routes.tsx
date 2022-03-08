import PrivateRoute from 'components/PrivateRoute';
import MoviesList from 'pages/Private/MovieCatalog';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import history from './util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <MoviesList />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);
export default Routes;
