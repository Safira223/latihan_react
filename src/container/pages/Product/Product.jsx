import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct"
import "./Product.css"

class Product extends Component {
    state = {
        order: 0,
        name: 'Fira'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <h3>Halaman Product</h3>
                <hr />
                <div className="header">
                    <div className="troley">
                        <img src="https://o.remove.bg/downloads/b09cbc23-f455-4a2c-bb3e-c9d0bfe4d8fd/340-3406929_groceries-cart-icon-png-transparent-png-removebg-preview.png" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )         
    }
}

export default Product;