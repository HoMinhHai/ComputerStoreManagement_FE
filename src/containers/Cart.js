
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/cart.scss';

import Menu from './Menu';
import Header from './Header/Header';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    async componentDidMount() {

    }

    componentWillUnmount() { }




    render() {
        const formattedPrice = parseFloat(200000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return (
            <>
                <div className='container-cart'>
                    <Header></Header>
                    <Menu></Menu>
                    <p id="main-title">Giỏ hàng (2 sản phẩm)</p>
                    <div className='menu-sub'>
                        <table>
                            <tr>
                                <th>
                                    <input type="checkbox" /> </th>
                                <th>Chọn tất cả 2 sản phẩm</th>
                                <th> Số lượng</th>
                                <th>Thành tiền</th>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    <div className='content'>
                        <table>
                            <tr>
                                <td id="check_btn"><input type="checkbox" /> </td>
                                <td className='td-content'>

                                    <img src={process.env.REACT_APP_BACKEND_URL + "/images/asus1.jpg"} alt="Product"></img>
                                    <div id='name'>
                                        <p>Laptop Asus VivoBook</p>
                                        <p>200000</p>
                                    </div>
                                </td>

                                <td id="quantity"> 1 </td>
                                <td id="price">{formattedPrice}</td>
                                <td><i class="fas fa-trash"></i></td>
                            </tr>
                            <tr>
                                <td id="check_btn"><input type="checkbox" /> </td>
                                <td className='td-content'>

                                    <img src={process.env.REACT_APP_BACKEND_URL + "/images/asus2.jpg"} alt="Product"></img>
                                    <div id='name'>
                                        <p>Màn hình máy tính</p>
                                        <p>200000</p>
                                    </div>
                                </td>

                                <td id="quantity"> 1 </td>
                                <td id="price">{formattedPrice}</td>
                                <td><i class="fas fa-trash"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </>

        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
