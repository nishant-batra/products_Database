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
this.fb.collection('products').add({
  img:"https://images.livemint.com/img/2020/09/25/600x338/WD10N641R2X-TL_010_Dynamic1_Inox-845x563_1601035914183_1601035921794.png",
  qty:1,
  price:7899,
  title:"Washing Machine",
}).then(()=>{console.log("added")}).catch((error)=>{console.log(error)});
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
    </div>
  );
}
}

export default App;
