import React from 'react';
import'./sidebar.css'
import { LineStyle, Timeline, TrendingUp, PersonOutlineOutlined,
  Inventory2Outlined, PaidOutlined, BarChartOutlined, EmailOutlined, DynamicFeedOutlined,
  ChatBubbleOutlineOutlined, ManageAccountsOutlined, Report} from '@mui/icons-material'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarWrapper">
       <div className="sidebarMenu">
           <h3 className="sidebarTitle">Dashboard</h3>
           <ul className="sidebarList">
             <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon'/>
              Home
             </li>
             <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
             </li>
             <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon'/>
              Sales
             </li>
           </ul>
         </div>
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Quick Menu</h3>
           <ul className="sidebarList">
             <Link to="/users" className='link'>
             <li className="sidebarListItem">
              <PersonOutlineOutlined className='sidebarIcon'/>
              User
             </li>
             </Link>
             <Link to="/products" className='link'>
             <li className="sidebarListItem">
              <Inventory2Outlined className='sidebarIcon'/>
              Product
             </li>
             </Link>
             <li className="sidebarListItem">
              <PaidOutlined className='sidebarIcon'/>
              Transactions
             </li>
             <li className="sidebarListItem">
              <BarChartOutlined className='sidebarIcon'/>
             Reports
             </li>
           </ul>
         </div>
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Notification</h3>
           <ul className="sidebarList">
             <li className="sidebarListItem ">
              <EmailOutlined className='sidebarIcon'/>
             Mail
             </li>
             <li className="sidebarListItem">
              <DynamicFeedOutlined className='sidebarIcon'/>
             Feedback
             </li>
             <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className='sidebarIcon'/>
            Messages
             </li>
           </ul>
         </div>
         <div className="sidebarMenu">
           <h3 className="sidebarTitle">Staff</h3>
           <ul className="sidebarList">
             <li className="sidebarListItem ">
              <ManageAccountsOutlined className='sidebarIcon'/>
              Manage
             </li>
             <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
             </li>
             <li className="sidebarListItem">
              <Report className='sidebarIcon'/>
              Reports
             </li>
           </ul>
         </div>
       </div>
        </div>
  )
}
