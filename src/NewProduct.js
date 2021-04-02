import React, { useRef } from "react";

function NewProduct(props) {
  const titleref = useRef(null);
  const qtyref = useRef(null);
  const srcref = useRef(null);
  const priceref = useRef(null);
  const catref = useRef(null);
  return (
    <div>
      <form className="form-div">
        <label for="title">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          ref={titleref}
          required
        ></input>
        <label for="src"> Image Source: </label>
        <input id="src" name="src" type="url" ref={srcref} required></input>
        <label for="qty">Qty: </label>
        <input id="qty" name="qty" type="number" ref={qtyref} required />
        <label for="price">Price: </label>
        <input
          id="price"
          name="price"
          type="number"
          ref={priceref}
          required
        ></input>
        <label for="cat">Category: </label>
        <input id="cat" name="cat" type="text" ref={catref} required></input>
        <button
          type="button"
          onClick={() => {
            const a = props.addProducts(
              titleref.current.value,
              qtyref.current.value,
              srcref.current.value,
              priceref.current.value,
              catref.current.value
            );
            titleref.current.value = "";
            qtyref.current.value = "";
            srcref.current.value = "";
            priceref.current.value = "";
            catref.current.value = "";
            return a;
          }}
        >
          Add Products
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
