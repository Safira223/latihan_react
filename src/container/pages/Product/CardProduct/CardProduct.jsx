import React, { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 0,
    name: "Fira",
  };

  handleCounterChange = (value) => {
      this.props.onCounterChange(value);
  }

  handlePlus = () => {
    // console.log('plus', this);
    this.setState({
      order: this.state.order + 1,
    }, () => {
        this.handleCounterChange(this.state.order);
    });
  };

  handleMinus = () => {
    // console.log('minus', this);
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      }, () => {
          this.handleCounterChange(this.state.order)
      });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://img.okezone.com/content/2022/03/28/298/2569175/4-perbedaan-ayam-kampung-dan-ayam-negeri-jangan-salah-beli-mSZHottCN8.jpg"
            alt=""
          />
        </div>
        <p className="product-title">Daging Ayam Berbumbu Rasa Original</p>
        <p className="product-price">Rp 34.000</p>
        <p className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </p>
      </div>
    );
  }
}

export default CardProduct;
