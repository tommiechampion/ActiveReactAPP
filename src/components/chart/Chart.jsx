import React from 'react'
import "./chart.css"
import { LineChart, 
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  
} from "recharts";

export default function Chart({ title, data, dataKey, grid}) {

  return (
   
        
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke= "#5550bd"></XAxis>
                <Line type="monotone" dataKey={dataKey}  stroke= "#5550bd"/>
                <Tooltip></Tooltip>
              
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray= "5 5"></CartesianGrid>}
             
              </LineChart>
            
            </ResponsiveContainer>
            
            
        
  )
}
