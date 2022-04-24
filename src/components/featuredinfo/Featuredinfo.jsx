import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
             <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$3,233</span>
            <span className="featuredMoneyRate">-21.2 <ArrowDownward className="featuredIcon negative" />
            </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
             <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1,003</span>
            <span className="featuredMoneyRate">-12 <ArrowDownward  className="featuredIcon negative"/>
            </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
             <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$3,233</span>
            <span className="featuredMoneyRate">21.2 <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        

    </div>
  )
}
