
import UserContext from '../Contex/CreateContex'
import BlogNavbar from '../Home/Blognav'
import Aboutpage from './Aboutpage'
import MyFriends from './Friends'
import MyblogsActivities from './MyblogsActivities'
import UserProfile from './Userprofile'

function ProfileAssemble() {


  return (
    <div>
         
        <div className="h-full bg-gray-200 p-8 shadow-2xl">
            <UserProfile/>
            <Aboutpage/>
            <MyblogsActivities/>
            <MyFriends/>
        </div>
    </div>
  )
}

export default ProfileAssemble