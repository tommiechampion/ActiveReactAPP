import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import { productData } from '../../dummyData'


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
        <div className="productBottom"></div>
      </div>
  )
}
