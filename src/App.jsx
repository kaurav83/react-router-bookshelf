import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Home from './pages/Home';
import Sidenav from './components/Sidenav';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';

class App extends Component {
    state = {
        user: null
    }

    login = user => {
        this.setState({
            user
        }, () => this.props.history.push('/books'));
    }

    logout = user => {
        this.setState({
            user: null
        }, () => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user} />

                <Content>
                    <Route path="/books" render={() => <Sidenav topics={this.props.topics} />} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/login" render={(props) => <Login onLogin={this.login} />} />
                        <Route path="/logout" render={(props) => <Logout onLogout={this.logout} />} />
                        {/* <Route exact path="/books" component={Books} /> */}
                        <PrivateRoute exact path="/books/:topic?" component={Books} user={this.state.user} data={this.props.books} />} />
                            <PrivateRoute exact path="/books/:topic/:book" component={Book} user={this.state.user} data={this.props.books} />} />
                            <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);