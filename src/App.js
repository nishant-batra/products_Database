import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import firebase from 'firebase';
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
        products:[
        ],
        loading: true,
    };
  }
  componentDidMount()
  {

    firebase.firestore().collection('products')
    .get().then((snapshot)=>{
     // console.log(snapshot);
    const products= snapshot.docs.map((doc)=>{
      let data=doc.data();
      data['key']=doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading :false,
      });
    });
    
    
  } 
  
 handleIncrease=(product)=>{

const{products}=this.state;
let index=products.indexOf(product);
products[index].qty++;
this.setState ({
products:products,
});
 }
 handleDecrease=(product)=>{
   const{products}=this.state;
   let index=products.indexOf(product);
   if(products[index].qty>0)
   products[index].qty--;
   if(products[index].qty===0){
     this.handleDelete(products[index].key);
     return;
   }
   this.setState({
     products:products,
   });
 }
 handleDelete=(key)=>{
   const {products}=this.state;
   const items = products.filter((item)=>{return item.key!==key});

   this.setState({
     products: items,
   });
 }
 getCartCount=()=>{
const {products}=this.state;
let count=0;
for( let i in products)
{

count+=products[i].qty;
}

return count;
 }
 getCartTotal=()=>{
  const {products}=this.state; 
  let cartTotal=0;
   for( let i in products)
   {
     cartTotal+=products[i].qty*products[i].price;
   }
   return cartTotal;
 }
  render()
  {
    const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
     <Cart 
     products={products}
      onIncQty={this.handleIncrease}
      onDecQty={
      this.handleDecrease
      }
      onDelete={this.handleDelete}
     />
     {loading && <h1>Loading Products...</h1>}
     <div className="cartTotal">TOTAL:  {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
