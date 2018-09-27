import React from "react"

class Product extends React.Component {

  render() {
    return (
      <div className="Product">
          <h2>{this.props.title}</h2>
          <img className="productImage" src={this.props.image}/>
          <p>&#9733; {this.props.type}</p>
          <p>&#9733; {this.props.substance}</p>
          <p>&#9733; {this.props.size}</p>
          <p>&#9733; {this.props.numberInPack} st</p>
          <div className="priceAndButton">
            <p className="productPrice">{this.props.price} kr</p>
            <button>Köp</button>
          </div>
          <p className="productDeliveryTime">Leveranstid {this.props.deliveryTime}</p>
      </div>
    )
  }
}

export default Product
