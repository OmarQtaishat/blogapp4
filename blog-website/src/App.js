import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import MainPage from './components/MainPage';
import './App.css';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={MainPage} />
            </Switch>
        </Router>
    );
}

export default App;
