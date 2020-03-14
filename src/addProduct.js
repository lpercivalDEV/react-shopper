import React, {Component} from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit=this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = "";
    this.priceInput.value = "";
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Add Item</h3>
        <input placeholder="Item Name" ref={nameInput => this.nameInput = nameInput} />
        <input placeholder="Quantity" ref={priceInput => this.priceInput = priceInput} />
        <button>Add</button>

        <hr />
      </form>
    );
  }
}

export default AddProduct;
