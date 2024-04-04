import { useContext, useState } from "react";
import UserContext from "../Contex/CreateContex";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import image1 from "../assets/profileimgselection/7xm.xyz200910.jpg";
import image2 from "../assets/profileimgselection/7xm.xyz555796.jpg";
import image3 from "../assets/profileimgselection/7xm.xyz618074.jpg";
import image4 from "../assets/profileimgselection/7xm.xyz928703.jpg";
import image5 from "../assets/profileimgselection/7xm.xyz958378.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const imagesfiles = [image1, image2, image4, image3, image5];
function getRandomImage() {

  const randomIndex = Math.floor(Math.random() * imagesfiles.length);

  return imagesfiles[randomIndex];
}

function AddPhoto() {

  const navigate = useNavigate()
  const [ProfileImage,setProfileImage] = useState(getRandomImage());
  const { userDataFromSignup } = useContext(UserContext);
  const [isView,setisView] = useState(false)




  // image upload code starts here

  const cloudName = import.meta.env.VITE_CLOUDNARY_CLOUDNAME;
  const apiKey = import.meta.env.VITE_CLOUDNARY_APIKEY;
  const uploadPreset = "profileimage";




  const handleImageChange = async (e) => {
    e.preventDefault();
  
    const file = e.target.files[0];
  
    if (!file) {
      toast.error("No image selected");
      return;
    }
  
    const toastId = toast.loading("Updating image...");
  
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
      formData.append('api_key', apiKey);
  
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error.message);
      }
  
      const email = userDataFromSignup.email || jwtDecode(cookieToken).mail;
  
      const backendResponse = await axios.post('http://localhost:3015/user/userimage',{
        imageUrl: data.secure_url,
        email: email
      });
  
      if (!backendResponse.data.success) {
        toast.error(backendResponse.data.error, "error");
        return;
      }
  
      toast.success("Success", { id: toastId });
  
      // Redirect the user if necessary
      const imageName = file.name; // Assuming you want to check image name
      if (imagesfiles.includes(imageName)) {
        navigate('/login');
      } else {
        setisView(true);
      }
  
    } catch (error) {
      console.error("Error uploading image:", error.message);
      setUploading(false);
      toast.error("Failed");
    }
  };
  return (
    <div className="mb-24">
      <div className="w-full mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-52 h-52 mb-3 rounded-full shadow-lg"
            src={ProfileImage}
            alt="Random character image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
           {userDataFromSignup.name}
          </h5>
          <div className="flex mt-4 md:mt-6">
            <div>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={(e)=>handleImageChange(e)}
              />
              <label
                htmlFor="imageInput"
               
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Photo
              </label>
            </div>
            {isView?
            <a
           href="#"
           onClick={()=>navigate('/login')}
          className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-green-400 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >you ready</a>
            :
            <a
              href="#"
              onClick={AddPhoto}
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Forward
            </a>
          
          }

          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPhoto;
