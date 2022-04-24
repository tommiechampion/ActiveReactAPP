import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@mui/icons-material';
import profilepic from "./profilepic.jpeg"
export default function Topbar() {
  return (
    <div className='topbar'>
            <div className='topbarwrapper'>
                <div className='topLeft'>
                    <span className='logo'>Champion </span>
                </div>
                <div className='topRight'>
                <div className='topbarIconsContainer'>
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconsContainer'>
                    <Language/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconsContainer'>
                    <Settings/>
                  
                </div>
                <img src={profilepic} alt="" className='topAvatar' />
                </div>
                
        </div>
     
    </div>
  )
}
