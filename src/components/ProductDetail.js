import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/ProductDetail.scss'
import Header from '../containers/Header/Header.js';
import Menu from '../containers/Menu.js';
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Product: {}
        };
    }
    componentDidMount() {
        const { location } = this.props;
        const productInfo = location.state.info;
        this.setState({
            Product: productInfo
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            const { match } = this.props;
            const productId = match.params.id;
        }
    }

    render() {

        const formattedPrice = parseFloat(this.state.Product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return (
            <div className='container-detail'>
                <Header></Header>
                <Menu></Menu>
                <div className='main-content'>
                    <div className='Image-Product'>
                        <img src={process.env.REACT_APP_BACKEND_URL + "/images/" + this.state.Product.image} alt="Product"></img>
                    </div>
                    <div className='Info'>
                        <p className='name'>{this.state.Product.name}</p>
                        <div className='title'>
                            <i className='fa fa-check-circle'></i>
                            <p>Thông tin sản phẩm</p>

                        </div>
                        <p className='detail'>{this.state.Product.description}</p>
                        <span>
                            Bảo hành:
                            <span>Bảo hành theo linh kiện</span>
                        </span>
                        <p>Giá tại Hồ Chí Minh
                        </p>
                        <p className='cost'> {formattedPrice}</p>
                        <div className='group-button'>
                            <button>Mua ngay</button>
                            <button>Thêm vào giỏ hàng</button>
                        </div>
                        <button className='btn-2'>Mua trả góp</button>
                    </div>
                </div>
            </div >



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

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
