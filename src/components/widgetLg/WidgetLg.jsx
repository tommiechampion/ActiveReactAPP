import React from 'react'
import "./widgetLg.css"
import profilepic from "./profilepic.jpeg"
export default function WidgetLg() {
          const Button =({type}) =>{
            return <button className={"widgetLgButton " + type}>{type}</button>
          }
  return (
    <div className='widgetLg'>
      
      <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgth">Customer</th>
        <th className="widgetLgth">Date</th>
        <th className="widgetLgth">Amount</th>
        <th className="widgetLgth">Status</th>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={profilepic} alt="" className='widgetLgimg' />
        <span className="widgetLgName">Debby Karl</span>
        </td>
        <td className="widgetLgDate"> 2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        <td className="widgetLgstatus"><Button type="Declined"></Button>
        </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={profilepic} alt="" className='widgetLgimg' />
        <span className="widgetLgName">Debby Karl</span>
        </td>
        <td className="widgetLgDate"> 2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        <td className="widgetLgstatus"><Button type="Pending"></Button>
        </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={profilepic} alt="" className='widgetLgimg' />
        <span className="widgetLgName">Debby Karl</span>
        </td>
        <td className="widgetLgDate"> 2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        <td className="widgetLgstatus"><Button type="Approved"></Button>
        </td>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgUser">
          <img src={profilepic} alt="" className='widgetLgimg' />
        <span className="widgetLgName">Debby Karl</span>
        </td>
        <td className="widgetLgDate"> 2 Jun 2021</td>
        <td className="widgetLgAmount">$122.00</td>
        <td className="widgetLgstatus"><Button type="Approved"></Button>
        </td>
        </tr>
        </table>

      </div>
  )
}
