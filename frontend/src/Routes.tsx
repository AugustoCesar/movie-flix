import { Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import history from './util/history';

const Routes = () => (
  <Router history={history}>
  <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </Router>

);
export default Routes;