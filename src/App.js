import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from './redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from './hoc/authentication';
import './styles/App.scss'
import { path } from './utils'
import Cart from './containers/Cart.js'
import ProductDetail from './components/ProductDetail.js'
import Login from './containers/Auth/login';
import HomePage from './containers/HomePage.js'
import System from './routes/System';
import Home from './routes/Home.js'
import { CustomToastCloseButton } from './components/CustomToast';
//import ConfirmModal from './components/ConfirmModal';
import Banner from './components/Banner.js';
import Test from './containers/tesj.js'
class App extends Component {

    // handlePersistorState = () => {
    //     const { persistor } = this.props;
    //     let { bootstrapped } = persistor.getState();
    //     if (bootstrapped) {
    //         if (this.props.onBeforeLift) {
    //             Promise.resolve(this.props.onBeforeLift())
    //                 .then(() => this.setState({ bootstrapped: true }))
    //                 .catch(() => this.setState({ bootstrapped: true }));
    //         } else {
    //             this.setState({ bootstrapped: true });
    //         }
    //     }
    // };

    componentDidMount() {
        //this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        {this.props.isLoggedIn && <Banner></Banner>}
                        <Switch>


                            <Route path={path.HOMEPAGE} component={HomePage} />

                            <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                            {/* HOMEPAGE */}
                            <Route path={path.TEST} component={Test} />
                            <Route path={path.PRODUCT_DETAIL} component={ProductDetail} />
                            <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />

                            <Route path={path.CART} component={Cart} />
                            <Route path={path.HOME} component={Home} />



                        </Switch>
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);