import React from 'react';

class CartItem extends React.Component {
  constructor()
    {
      super();
      this.state={
        title: "Phone",
        price: 999,
        qty:1,
      };
    } 
   increaseQuantity = ()=>{
   this.setState((prevState)=>
   {
return {
  qty: prevState.qty+1,
}
   }
   );
   }
   decreaseQuantity=()=>{
     this.setState((prevState)=>
     {
       if(prevState.qty>1)
       {
       return{
         qty:prevState.qty-1,
       }
     }
//      else{
// alert("click delete instead");
// return;
//      }
     
   });
  }
  render () {
    const {title,price,qty} = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img className="action-icons"
             alt="add"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuODMzLDAsMCwxMTQuODMzLDAsMjU2czExNC44MzMsMjU2LDI1NiwyNTZzMjU2LTExNC44NTMsMjU2LTI1NlMzOTcuMTY3LDAsMjU2LDB6IE0yNTYsNDcyLjM0MQ0KCQkJYy0xMTkuMjc1LDAtMjE2LjM0MS05Ny4wNDYtMjE2LjM0MS0yMTYuMzQxUzEzNi43MjUsMzkuNjU5LDI1NiwzOS42NTlTNDcyLjM0MSwxMzYuNzA1LDQ3Mi4zNDEsMjU2UzM3NS4yOTUsNDcyLjM0MSwyNTYsNDcyLjM0MXoNCgkJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzU1LjE0OCwyMzQuMzg2SDI3NS44M3YtNzkuMzE4YzAtMTAuOTQ2LTguODY0LTE5LjgzLTE5LjgzLTE5Ljgzcy0xOS44Myw4Ljg4NC0xOS44MywxOS44M3Y3OS4zMThoLTc5LjMxOA0KCQkJYy0xMC45NjYsMC0xOS44Myw4Ljg4NC0xOS44MywxOS44M3M4Ljg2NCwxOS44MywxOS44MywxOS44M2g3OS4zMTh2NzkuMzE4YzAsMTAuOTQ2LDguODY0LDE5LjgzLDE5LjgzLDE5LjgzDQoJCQlzMTkuODMtOC44ODQsMTkuODMtMTkuODN2LTc5LjMxOGg3OS4zMThjMTAuOTY2LDAsMTkuODMtOC44ODQsMTkuODMtMTkuODNTMzY2LjExNCwyMzQuMzg2LDM1NS4xNDgsMjM0LjM4NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
              onClick={this.increaseQuantity}></img>
            <img className="action-icons" 
            alt="minus"
             src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1611555490~hmac=4074075cceeb9c15f1efd05f8968bb66"
             onClick={this.decreaseQuantity}></img>
            <img className="action-icons" alt="delete" src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1611555538~hmac=e1cab36bcef3522883a7a9ef53256107"></img>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;