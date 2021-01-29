import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
        products:[
      {title: "Phone",
      price: 999,
      qty:3,
      key:1,
      src:"https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80es.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {title: "Watch",
      price: 99,
      qty:8,
      key:2,
      src:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=640&q=80",
        },
        {title: "Laptop",
      price: 9999,
      qty:1,
      key:3,
      src:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        }
        ]
    };
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
    const {products}=this.state;
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
     <div className="cartTotal">TOTAL:  {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
