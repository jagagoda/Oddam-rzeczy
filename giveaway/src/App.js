import React, { Component } from 'react';
import { withFirebase } from './components/Firebase';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import LandingPage from './components/organisms/LandingPage';
import SignUpPage from './components/organisms/SignUpPage';
import LoginPage from './components/organisms/LoginPage';
import PasswordForgetPage from './components/organisms/PasswordForgetPage';
import HomePage from './components/organisms/HomePage';
import AccountPage from './components/organisms/AccountPage';
import AdminPage from './components/organisms/AdminPage';
import Home from './components/pages/Home';

import * as ROUTES from './constants/routes';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }
    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null });
        });
    }
    componentWillUnmount() {
        this.listener();
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route path={ROUTES.LOGIN} component={LoginPage}/>
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
                    <Route path={ROUTES.HOME_LOGGED} component={HomePage}/>
                    <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                    <Route path={ROUTES.ADMIN} component={AdminPage}/>
                    <Route path={ROUTES.HOME} component={Home}/>
                </div>
            </Router>
        );
    }
}
export default withFirebase(App);

