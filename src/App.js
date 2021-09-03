import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
