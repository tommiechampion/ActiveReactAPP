import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./user.css"

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
       <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/385188343_monkey.jpg" alt="" className="userShowImg" />
         <div className="userShowTopTitle">
           <span className="userShowUsername">Sir Jay</span>
           <span className="userShowUserTitle">Logistic Manager</span>
         </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
            <PermIdentity className='userShowIcon'/>
            <span className="userShowInfoTitle">SirJay55</span>
            </div>
            <div className="userShowInfo">
            <CalendarToday className='userShowIcon'/>
            <span className="userShowInfoTitle">10.13.1987</span>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
            <PhoneAndroid className='userShowIcon'/>
            <span className="userShowInfoTitle">+2436 83779</span>
            </div>
            <div className="userShowInfo">
            <MailOutline className='userShowIcon'/>
            <span className="userShowInfoTitle">sirjay@yahoo.com</span>
            </div>
            <div className="userShowInfo">
            <LocationSearching className='userShowIcon'/>
            <span className="userShowInfoTitle">Erfurt | Nigeria</span>
            </div>
            
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className='userUpdateForm'>
            <div className="useUpdateLeft">

            <div className="userUpdateItem">
                <label >Username</label>
                <input type="text" placeholder='SirJay55' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label >Full Name</label>
                <input type="text" placeholder='Sir Jay' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label >Email</label>
                <input type="text" placeholder='sirjay@yahoo.com' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label >Phone</label>
                <input type="text" placeholder='+2436 83779' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label >Address</label>
                <input type="text" placeholder='Erfurt | Nigeria' className='userUpdateInput' />
              </div>
              
        </div>
            <div className="userUpdateRight">

            <div className="userUpdateUpload">
              <img className='userUpdateImg' src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/01/09/avatar-sigourney-weaver.jpg?width=1200&auto=webp&quality=75" alt="" />
             <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
              <input type="file" id='file' style={{ display: "none"}}/>
              </div>  
              <button className="userUpdateButton">Update</button>
            </div>

          </form>
        </div>
      </div>
    </div>
       
  );
}
