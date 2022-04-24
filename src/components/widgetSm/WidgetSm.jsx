import React from 'react'
import "./widgetSm.css"
import profilepic from "./profilepic.jpeg"
import { Visibility } from '@mui/icons-material'
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        <li className="widgetSmListItem">
        <img src={profilepic}  alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry jay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
            <button className="widgetSmButton">
        <Visibility className='widgetSmIcon'></Visibility>
        Display
            </button>

        </li>
        <li className="widgetSmListItem">
        <img src={profilepic} alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry jay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
            <button className="widgetSmButton">
        <Visibility className='widgetSmIcon'></Visibility>
        Display
            </button>

        </li>
        <li className="widgetSmListItem">
        <img src={profilepic} alt="" className='widgetSmImg' />
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry jay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
            <button className="widgetSmButton">
        <Visibility className='widgetSmIcon'></Visibility>
        Display
            </button>

        </li>
        <li className="widgetSmListItem">
        <img src={profilepic} alt="" className='widgetSmImg' />
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry jay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
            <button className="widgetSmButton">
        <Visibility className='widgetSmIcon'></Visibility>
        Display
            </button>

        </li>
        <li className="widgetSmListItem">
        <img src={profilepic} alt="" className='widgetSmImg'/>
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry jay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
            <button className="widgetSmButton">
        <Visibility className='widgetSmIcon'></Visibility>
        Display
            </button>

        </li>
        <li className="widgetSmListItem">
        <img src={profilepic} alt="" className='widgetSmImg' />
        <div className="widgetSmUser">
            <span className="widgetSmUsername">Marry jay</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
        </div>
            <button className="widgetSmButton">
        <Visibility className='widgetSmIcon'></Visibility>
        Display
            </button>

        </li>



        </ul>
    
    
    
    </div>
  )
}
