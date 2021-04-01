import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from "firebase";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.availableProducts = true;
    //  this.showActions = true;
    this.fb = firebase.firestore();
    this.titleref = new React.createRef();
    this.qtyref = new React.createRef();
    this.srcref = new React.createRef();
    this.priceref = new React.createRef();
    this.catref = new React.createRef();
    this.unsubscribe = null;
    this.category = null;
  }
  componentDidMount() {
    // firebase.firestore().collection('products')
    // .get().then((snapshot)=>{
    //  // console.log(snapshot);
    // const products= snapshot.docs.map((doc)=>{
    //   let data=doc.data();
    //   data['key']=doc.id;
    //     return data;
    //   });
    //   this.setState({
    //     products: products,
    //     loading :false,
    //   });
    // });

    this.unsubscribe = this.fb.collection("products").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        let data = doc.data();
        data["key"] = doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading: false,
      });
    });
  }

  handleIncrease = (product) => {
    const { products } = this.state;
    let index = products.indexOf(product);
    // products[index].qty++;
    // this.setState ({
    // products:products,
    //});
    const docref = this.fb.collection("products").doc(products[index].key);
    docref
      .update({
        qty: products[index].qty + 1,
      })
      .then()
      .catch((error) => console.log(error));
  };
  handleDecrease = (product) => {
    const { products } = this.state;
    let index = products.indexOf(product);
    //  if(products[index].qty>0)
    //  products[index].qty--;
    //  if(products[index].qty===0){
    //    this.handleDelete(products[index].key);
    //    return;
    //  }
    //  this.setState({
    //    products:products,
    //  });
    if (products[index].qty > 0) {
      const docref = this.fb.collection("products").doc(products[index].key);
      docref
        .update({
          qty: products[index].qty - 1,
        })
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
  };
  handleEditPrice = (product, price) => {
    const { products } = this.state;
    let index = products.indexOf(product);
    if (price > 0) {
      const docref = this.fb.collection("products").doc(products[index].key);
      docref
        .update({
          price: parseInt(price),
        })
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleDelete = (key) => {
    const { products } = this.state;
    const items = products.filter((item) => {
      return item.key !== key;
    });

    this.setState({
      products: items,
    });
    const docref = this.fb.collection("products").doc(key);
    docref.delete().then().catch();
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    for (let i in products) {
      count += products[i].qty;
    }

    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    for (let i in products) {
      cartTotal += products[i].qty * products[i].price;
    }
    return cartTotal;
  };
  addProducts = () => {
    if (this.titleref.value === "") {
      window.alert("Please fill the title field");
      return;
    }
    if (this.srcref.value === "") {
      window.alert("Please fill the src field");
      return;
    }
    if (this.qtyref.value === "") {
      window.alert("Please fill the qty field");
      return;
    }
    if (this.priceref.value === "") {
      window.alert("Please fill the price field");
      return;
    }
    this.fb
      .collection("products")
      .add({
        src: this.srcref.value,
        qty: parseInt(this.qtyref.value),
        price: parseInt(this.priceref.value),
        title: this.titleref.value,
        category: this.catref.value,
      })
      .then(() => {
        console.log("added");
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(this.titleref.value);
    this.srcref.value = "";
    this.qtyref.value = "";
    this.titleref.value = "";
    this.priceref.value = "";
  };
  showAvailable = () => {
    this.unsubscribe();
    this.unsubscribe = this.fb
      .collection("products")
      .where("qty", ">", 0)
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          let data = doc.data();
          data["key"] = doc.id;
          return data;
        });
        this.setState({
          products: products,
          loading: false,
        });
      });
    this.availableProducts = false;
    // this.showActions = false;
  };
  showAll = () => {
    this.unsubscribe();
    this.unsubscribe = this.fb.collection("products").onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        let data = doc.data();
        data["key"] = doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading: false,
      });
    });

    this.availableProducts = true;
    //this.showActions = true;
  };
  sortByPrice = () => {
    this.unsubscribe();
    this.unsubscribe = this.fb
      .collection("products")
      .orderBy("price")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          let data = doc.data();
          data["key"] = doc.id;
          return data;
        });
        this.setState({
          products: products,
          loading: false,
        });
      });

    // this.availableProducts = true;
    // this.showActions = true;
  };
  handleCatChange = (e) => {
    this.category = e.target.value;
  };
  getCategory = () => {
    if (!this.category) {
      window.alert("Please select a category to filter");
      return;
    }
    this.unsubscribe();
    this.unsubscribe = this.fb
      .collection("products")
      .where("category", "==", this.category)
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          let data = doc.data();
          data["key"] = doc.id;
          return data;
        });
        this.setState({
          products: products,
          loading: false,
        });
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncQty={this.handleIncrease}
          onDecQty={this.handleDecrease}
          onDelete={this.handleDelete}
          onChangePrice={this.handleEditPrice}
        />
        {/* <button type="button" onClick={this.addProducts}> Add Products</button> */}
        {loading && <h1>Loading Products...</h1>}
        <div className="cartTotal">TOTAL: {this.getCartTotal()}</div>
        <form className="filter" onChange={this.handleCatChange}>
          Filter by Categories
          <br />
          <input type="radio" name="categories" value="mobile" />
          Mobile
          <br />
          <input type="radio" name="categories" value="washing machine" />
          Washing Machine
          <br />
          <input type="radio" name="categories" value="laptop" />
          Laptop
          <br />
          <input type="radio" name="categories" value="watch" />
          Watch
          <br />
          <button type="button" onClick={this.getCategory}>
            Filter
          </button>
          <button type="button" onClick={this.sortByPrice}>
            Sort by Price
          </button>
          {this.availableProducts ? (
            <button type="button" onClick={this.showAvailable}>
              Show only available Products
            </button>
          ) : (
            <button type="button" onClick={this.showAll}>
              Show all Products
            </button>
          )}
        </form>

        <form className="form-div">
          <label for="title">Title: </label>
          <input
            id="title"
            name="title"
            type="text"
            ref={(val) => (this.titleref = val)}
            required
          ></input>
          <label for="src"> Image Source: </label>
          <input
            id="src"
            name="src"
            type="url"
            ref={(val) => {
              this.srcref = val;
            }}
            required
          ></input>
          <label for="qty">Qty: </label>
          <input
            id="qty"
            name="qty"
            type="number"
            ref={(val) => {
              this.qtyref = val;
            }}
            required
          />
          <label for="price">Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            ref={(val) => {
              this.priceref = val;
            }}
            required
          ></input>
          <label for="cat">Category: </label>
          <input
            id="cat"
            name="cat"
            type="text"
            ref={(val) => (this.catref = val)}
            required
          ></input>
          <button type="button" onClick={this.addProducts}>
            Add Products
          </button>
        </form>
      </div>
    );
  }
}

export default App;
