import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {

        let linkToRedirect = this.props.isLoggedIn ? '/system/user-manage' : '/login';

        return (
            <Redirect to={linkToRedirect} />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);