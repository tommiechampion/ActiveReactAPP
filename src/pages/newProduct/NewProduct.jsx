import React from 'react'
import "./newProduct.css"
export default function NewProduct() {
  return (
    <div className='newProduct'>
         <h1 className="newUserTitle">New Product</h1>
    <form className='newProductForm'>
      <div className="newProductItem">
        <label >Image</label>
        <input type="file"id='file' />
        
      </div>
      <div className="newProductItem">
        <label >Name</label>
        <input type="text" placeholder='Drey by beat' />

      </div>
      <div className="newProductItem">
        <label >Stock</label>
        <input type="text" placeholder='123' />
      </div>
      
      <div className="newProductItem">
        <label > Active</label>
        <select  name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button className="newProductButton">Create</button>
    </form>
    
    </div>
  )
}
