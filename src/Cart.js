import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component {
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
   
  render () {
    const {products}=this.state;
  return (
       
      <div className="cart">
     {products.map((product)=>
     {
return<CartItem product={product} key={product.key}></CartItem>
     }
     )
     }
   
      </div>
  );
}
}



export default Cart;