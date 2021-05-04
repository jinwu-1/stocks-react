import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
