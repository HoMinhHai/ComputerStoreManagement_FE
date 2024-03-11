import React, { Component } from 'react';
import { connect } from 'react-redux';



import '../styles/MainContent.scss'

class Header extends Component {

    render() {
        const { processLogout } = this.props;

        return (
            <div className='main-container'>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
