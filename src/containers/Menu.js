import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../services/userService'


import '../styles/Menu.scss'
import { get } from 'lodash';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubMenuVisible: false,
            listCategory: []
        };
    }
    async componentDidMount() {

        let listData = await getAllCategories()

        this.setState({
            listCategory: listData.list.names
        })


    }
    showMenu = () => {
        this.setState({
            isSubMenuVisible: !this.state.isSubMenuVisible
        })
    }
    render() {
        const { processLogout } = this.props;

        return (
            <><div className='menu-container'>
                <div className='main-menu-btn'
                    onClick={this.showMenu}>
                    <i class="fas fa-bars"></i>
                    <span className='text_menu'>Danh mục sản phẩm</span>

                </div>

                <div className='group-options'>
                    <a href='#'>Trang chủ</a>
                    <a href='#'>Cửa hàng</a>
                    <a href='#'>Giới thiệu</a>
                    <a href='#'>Liên hệ</a>
                </div>
            </div>

                {this.state.isSubMenuVisible && (
                    <div className='sub-menu'>
                        <ul>
                            {this.state.listCategory.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </>


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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
