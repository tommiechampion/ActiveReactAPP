import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@mui/icons-material'
import React from 'react'
import "./user.css"

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
        <h1 className='userTitle'>Edit User</h1> 
        <button className="userAddButtton">Create</button>

        </div>
        <div className="userContainer">
          <div className="userShow"></div>
          <div className="userShowTop">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/385188343_monkey.jpg" 
            alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Sir Jay</span>
              <span className="userShowUserTitle">Logistics Manager</span>
            </div>

          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
          <PermIdentity className='userShowIcon'/>
          <span className="userShowInfoTitle">Annasep25</span>
          </div>
          <div className="userShowInfo">
          <CalendarToday className='userShowIcon'/>
          <span className="userShowInfoTitle">12.22.1909</span>
          </div>
          <span className="userShowTitle">Contact details</span>
          <div className="userShowInfo">
          <PhoneAndroid className='userShowIcon'/>
          <span className="userShowInfoTitle">+142 27 7282</span>
          </div>
          <div className="userShowInfo">
          <MailOutline className='userShowIcon'/>
          <span className="userShowInfoTitle">sirjay@yahoo.com</span>
          </div>
          <div className="userShowInfo">
          <LocationSearching className='userShowIcon'/>
          <span className="userShowInfoTitle">Berlin | Germany</span>
          </div>
          
          </div>
          </div>

          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className='userUpdateForm'>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
              <label>Username</label>
              <input type="text" placeholder='Annasep25' className='userUpdateInput'></input>

              </div>
              <div className="userUpdateItem">
              <label>Full Name</label>
              <input type="text" placeholder='Sir Jay' className='userUpdateInput'></input>

              </div>

              <div className="userUpdateItem">
              <label>Email</label>
              <input type="text" placeholder='sirjay@yahoo.com' className='userUpdateInput'></input>

              </div>

              <div className="userUpdateItem">
              <label>Phone</label>
              <input type="text" placeholder='+142 27 7282' className='userUpdateInput'></input>

              </div>

              <div className="userUpdateItem">
              <label>Address</label>
              <input type="text" placeholder='Berlin | Germany' className='userUpdateInput'></input>

              </div>

            </div>
            <div className="userUpdateRight"></div>



            </form>
          </div>
        </div>
       
  )
}
