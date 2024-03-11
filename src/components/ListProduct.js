import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/LIstProduct.scss';
import Card from './card.js'
import icon from '../assets/images/icon.png'
import { getAllProducts, get10NewestProduct } from '../services/userService.js';
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListProduct: []
        };
    }
    async componentDidMount() {
        this.setState({
            ListProduct: this.props.listItem
        })
    }
    componentWillUnmount() {

    }

    render() {

        const limitedList = this.state.ListProduct.slice(0, 5);
        const remainingItems = this.state.ListProduct.slice(5);
        return (

            <div className='container_1'>
                <div className='header_title'>
                    <img src={icon}></img>
                    <span>{this.props.title}</span>
                </div>
                <div className='main_content'>
                    <div className='content-top'>
                        {limitedList.map((item, index) => (
                            <Card key={index} value={item}></Card>
                        ))}
                    </div>
                    <div className='content-bottom'>
                        {remainingItems.map((item, index) => (
                            <Card key={index + 5} value={item}></Card>
                        ))}
                    </div>

                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
