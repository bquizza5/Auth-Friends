import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Profile from './components/profile';
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/addFriend'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Link to="/">Login</Link>
    <Link to="/profile">Profile</Link>
    <Link to='/add-friend'>add friend</Link>

      
    </div>
    <Route exact path="/" component={Login} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <PrivateRoute exact path="/add-friend" component={AddFriend} />

    </Router>
  );
}

export default App;
