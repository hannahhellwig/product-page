import React from "react"
import Product from "./product.js"
// const productsJson = require("./../products.json")
const productsApi = "http://localhost:8080/products"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(productsApi).then(response => response.json()).then(json => {
      this.setState({
        products: json
      })
    })
  }


  render() {
    return (
      <div>
        <h1>Apotek</h1>
        <div className="App">
        {this.state.products.map((product) => {
            return <Product title={product.name}
                            image={product.image}
                            price={product.price}
                            type={product.type}
                            size={product.size}
                            numberInPack={product.numberInPack}
                            deliveryTime={product.deliveryTime}
                            substance={product.substance}
                            description={product.description}/>
          })}
        </div>
      </div>
    )
  }
}

export default App
