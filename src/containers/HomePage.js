import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '../styles/HomePage.scss'
import Header from './Header/Header.js'
import Menu from './Menu.js'
import ListProduct from '../components/ListProduct.js';
import Footer from './Footer.js'
import { Route } from 'react-router-dom';

import { get10NewestProduct, get10BestSelling, get10Promotion } from '../services/userService.js'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List10NewestProduct: [],
            List10PromotionProduct: [],
            List10BestSellingProduct: []
        };
    }


    async componentDidMount() {
        let listBestSelling = await get10BestSelling()
        let listNew = await get10NewestProduct()
        let listPromotion = await get10Promotion()
        this.setState({
            List10NewestProduct: listNew.list.object,
            List10PromotionProduct: listPromotion.list.object,
            List10BestSellingProduct: listBestSelling.list.object
        })
    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div className='container-home123'>
                <Header />
                <Menu></Menu>
                {this.state.List10BestSellingProduct.length > 0 && (
                    <ListProduct title={"Sản phẩm bán chạy"} listItem={this.state.List10BestSellingProduct}></ListProduct>
                )}
                {this.state.List10NewestProduct.length > 0 && (
                    <ListProduct title={"Sản phẩm mới"} listItem={this.state.List10NewestProduct}></ListProduct>
                )}
                {this.state.List10PromotionProduct.length > 0 && (
                    <ListProduct title={"Sản phẩm khuyến mãi"} listItem={this.state.List10PromotionProduct}></ListProduct>
                )}
                <Footer></Footer>
            </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
