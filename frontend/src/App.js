import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from './components/UserForm';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={UserForm} />
        </Switch>
    </Router>
);

export default App;
