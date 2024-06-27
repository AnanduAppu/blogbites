
import { useContext, useEffect } from 'react';
import UserContext from '../Contex/CreateContex';
import Aboutpage from './Aboutpage'
import MyblogsActivities from './MyblogsActivities'
import UserProfile from './Userprofile'

function ProfileAssemble() {
  const {  setIsCreateBlogOpen } = useContext(UserContext);
  useEffect(()=>{
    setIsCreateBlogOpen(false)
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
         
        <div className="h-full bg-gray-200 p-3 shadow-2xl">
            <UserProfile/>
            <Aboutpage/>
            <MyblogsActivities/>
          
        </div>
    </div>
  )
}

export default ProfileAssemble