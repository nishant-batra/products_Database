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
        },
        {title: "Watch",
      price: 99,
      qty:8,
      key:2,
        },
        {title: "Laptop",
      price: 9999,
      qty:1,
      key:3,
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
 getCartCount=(product)=>{
const {products}=this.state;
let count=0;
for( let i in products)
{

count+=products[i].qty;
}

return count;
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
    </div>
  );
}
}

export default App;
