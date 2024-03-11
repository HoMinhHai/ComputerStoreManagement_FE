import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import '../../styles/Header.scss'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showDiv: false

        };
        this.modalRef = React.createRef();
    }
    handleHover = () => {
        this.setState({ showDiv: true });
    };

    handleLeave = () => {
        this.setState({ showDiv: false });
    };
    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleOutsideClick = (event) => {
        if (this.modalRef.current && !this.modalRef.current.contains(event.target)) {
            this.setState({ showModal: false });
        }
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    render() {
        return (
            <div className="header-container">
                <div className='header-top'>
                    <div className="logo_header"></div>
                    <input id="find" placeholder='Bạn muốn mua gì?' />
                    <div className='group-icon'>
                        <div className='icon-1'>
                            <i class="fas fa-bell"></i>
                            <span>Thông báo</span>
                        </div>
                        <Link
                            to={{
                                pathname: "/cart",
                            }} className="link-style"> <div className='icon-2'>
                                <i class="fas fa-bell"></i>
                                <span>Giỏ hàng</span>
                            </div></Link>

                        <div className='icon-3' onClick={this.toggleModal}>
                            <i class="fas fa-bell"></i>
                            <span>Đăng nhập Đăng ký
                            </span>

                        </div>
                        <div className='icon-3'  >
                            <i class="fas fa-bell"></i>
                            <span>Quản trị

                            </span>

                        </div>
                    </div>

                </div>







                <div className="container_modal">
                    {this.state.showModal && (
                        <div className="modalBackground">
                            <div ref={this.modalRef} className="modalContent">
                                <h4 id="tilte_modal">Đăng nhập</h4>
                                <p>Số điện thoại/Email</p>
                                <input className='form-control'></input>
                                <p>Mật khẩu</p>
                                <input className='form-control'></input>
                                <p id="forget">Quên mật khẩu?</p>
                                <button id="btn-1" className='col-12'>Đăng nhập</button><br />
                                <button id="btn-2" className='col-12'>Bỏ qua</button>
                            </div>
                        </div>
                    )}
                </div>




            </div>
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
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
