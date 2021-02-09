import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Switch>
      <Route exact path='/skills' component={Skills}/>
      <Route exact path='/education' component={Education}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/experiences' component={Experience}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      </Switch>

    </Router>
  );
}

export default App;
