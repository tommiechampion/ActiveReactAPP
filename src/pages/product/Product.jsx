import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'


export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
<h1 className="productTitle">Product</h1>
<Link to="/newproduct">
<button className="productAddButton">Create</button>
</Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src="https://altechelectronics.org/wp-content/uploads/2021/02/pacrate-gaming-headset-for-ps4-pc-xbox-one-headset-with-microphone-noice-1536x1536.jpg" alt="" className="productInfoImg" />
              <span className="productName"> Headset</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfokey">id:</span>
                  <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfokey">sales:</span>
                  <span className="productInfoValue">1123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfokey">active:</span>
                  <span className="productInfoValue">yes</span>
                </div>
              
                <div className="productInfoItem">
                  <span className="productInfokey">in stock:</span>
                  <span className="productInfoValue">no</span>
                </div>
              </div>
            </div>
        </div>
        <div className="productBottom">
<form className='productForm'>
  <div className="productFormLeft">
    <label>Product Name</label>
    <input type="text" placeholder='Headset'/>
    <label>In Stock</label>
    <select name="inStock" id="idStock">
    <option value="yes">Yes</option>
    <option value="no">No</option>

    </select>
    <label>Active</label>
    <select name="active" id="active">
    <option value="yes">Yes</option>
    <option value="no">No</option>

    </select>
  </div>
  <div className="productFormRight">
<div className="productUpload">
  <img src="https://i5.walmartimages.com/asr/fad4ba0a-3036-4a5b-b1f0-cc9dcff587d3.f8b80685300f691be2201720f5e7a498.jpeg" alt="" className="productUploadImg" />
<label for="file">
<Publish></Publish>
</label>
<input type="file" id="file" style={{display:"none"}} ></input>
</div>
<button className="productButton">Update</button>
  </div>
</form>
        </div>
      </div>
  )
}
