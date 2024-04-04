import React from 'react'
import BlogNavbar from '../Home/Blognav'
import Aboutpage from './Aboutpage'
import MyFriends from './Friends'
import Myblogs from './Myblogs'
import UserProfile from './Userprofile'

function ProfileAssemble() {
  return (
    <div>
         
        <div className="h-full bg-gray-200 p-8 shadow-2xl">
            <UserProfile/>
            <Aboutpage/>
           <Myblogs/>
            <MyFriends/>
        </div>
    </div>
  )
}

export default ProfileAssemble