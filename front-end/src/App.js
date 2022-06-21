import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* pages */
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login"> 
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route path="/register"> 
          <Register />
        </Route>
      </Switch>
      <Switch>
        <Route path="/"> 
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
