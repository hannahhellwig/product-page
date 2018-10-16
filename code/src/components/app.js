import React from "react"
import Product from "./product.js"
const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Apotek</h1>
        <div className="App">
        {productsJson.products.map((product) => {
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
