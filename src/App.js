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
    this.fb=firebase.firestore();
    this.titleref=new React.createRef();
    this.qtyref=new React.createRef();
    this.srcref=new React.createRef();
    this.priceref=new React.createRef();
  }
  componentDidMount()
  {

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
    
    this.fb.collection('products')
    .onSnapshot((snapshot)=>{
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
// products[index].qty++;
// this.setState ({
// products:products,
//});
const docref=this.fb.collection('products').doc(products[index].key);
docref.update({
  qty:products[index].qty+1,
}).then().catch((error)=>console.log(error));
 }
 handleDecrease=(product)=>{
   const{products}=this.state;
   let index=products.indexOf(product);
  //  if(products[index].qty>0)
  //  products[index].qty--;
  //  if(products[index].qty===0){
  //    this.handleDelete(products[index].key);
  //    return;
  //  }
  //  this.setState({
  //    products:products,
  //  });
  if(products[index].qty>0)
  {
    const docref= this.fb.collection('products').doc(products[index].key);
    docref.update({
      qty:products[index].qty-1,
    }).then().catch((error)=>{
      console.log(error);
    });
  }
  
 }
 handleDelete=(key)=>{
   const {products}=this.state;
   const items = products.filter((item)=>{return item.key!==key});

   this.setState({
     products: items,
   });
   const docref= this.fb.collection('products').doc(key);
   docref.delete().then().catch();
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
 addProducts=()=>{
   if(this.titleref.value==="")
   {
   window.alert("Please fill the title field");
  return; 
  }
  if(this.srcref.value==="")
  {
  window.alert("Please fill the src field");
 return; 
 }
 if(this.qtyref.value==="")
 {
 window.alert("Please fill the qty field");
return; 
}
if(this.priceref.value==="")
{
window.alert("Please fill the price field");
return; 
}
this.fb.collection('products').add({
  src:this.srcref.value,
  qty:this.qtyref.value,
  price:this.priceref.value,
  title:this.titleref.value,
}).then(()=>{console.log("added")}).catch((error)=>{console.log(error)});
//console.log(this.titleref.value);
this.srcref.value="";
this.qtyref.value="";
this.titleref.value="";
this.priceref.value="";

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
     {/* <button type="button" onClick={this.addProducts}> Add Products</button> */}
     {loading && <h1>Loading Products...</h1>}
     <div className="cartTotal">TOTAL:  {this.getCartTotal()}</div>
     <form className="form-div"> 
       <label for="title">Title: </label>
       <input id="title" 
       name="title"
        type="text"
        ref={(val)=>this.titleref=val}
        required></input>
       <label for="src"> Image Source: </label>
       <input id="src" name="src" type="url"
         ref={(val)=>{
          this.srcref=val;
        }}
        required></input>
       <label for="qty" >Qty: </label>
       <input id="qty" name="qty" type="number"
       ref={(val)=>{
        this.qtyref=val;
      }

      }
      required/>
       <label for="price" >Price: </label>
       <input id="price" name="price" type="number"
       ref={(val)=>{
        this.priceref=val;
      }

      }
      required></input>
       <button type="button" onClick={this.addProducts}> Add Products</button>
     </form>
    
    </div>
  );
}
}

export default App;
