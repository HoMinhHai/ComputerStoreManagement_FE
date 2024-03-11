
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/card.scss';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Product: {
                id: "",
                name: "",
                image: "",
                price: "",
                description: ""
            },
        };
    }

    async componentDidMount() {
        this.setState({
            Product: {
                id: this.props.value.id,
                name: this.props.value.name,
                image: this.props.value.image,
                price: this.props.value.price,
                description: this.props.value.description
            },
        });
    }

    componentWillUnmount() { }

    renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                {this.state.Product.name}
            </Tooltip>
        );
    }


    render() {
        const formattedPrice = parseFloat(this.state.Product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return (
            <>
                <Link
                    to={{
                        pathname: "/product/" + this.state.Product.id,
                        state: { info: this.state.Product }
                    }}
                    className="link-style"
                >
                    <div className='container-card'>
                        <img src={process.env.REACT_APP_BACKEND_URL + "/images/" + this.state.Product.image} alt="Product"></img>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={this.renderTooltip}
                        >
                            <div className='name-product'>
                                {this.state.Product.name}
                            </div>
                        </OverlayTrigger>
                        <div className='price-product'>{formattedPrice} </div>
                    </div>
                </Link >

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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
