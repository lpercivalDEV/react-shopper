import React, {Component} from 'react';
import './App.css';

import AddProduct from './addProduct'
import ProductItem from './productItem'

const products = [
  {
    name: "Milk",
    price: 1
  },
  {
    name: "Bread",
    price: 2
  },
  {
    name: "Soap",
    price: 1
  },
  {
    name: "Toilet Paper",
    price: 3
  }
]

localStorage.setItem("products", JSON.stringify(products))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({
      products
    });
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {
    const products = this.getProducts();

    products.push({
      name,
      price
    });
    this.setState({ products });
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({ products: filteredProducts })
  }

  onEditSubmit(name, price, originalName){
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products });
  }

  render(){
    return (
      <div className="App">
      <video id="background-vid" loop autoPlay>
          <source src="kawaii-food.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>

        <h1>React Grocery List</h1>

        <AddProduct
          onAdd={this.onAdd}
        />

        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
