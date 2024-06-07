import React, { useState } from "react";
import "./Blogimg.css";
function BlogImages({ props }) {
  console.log("this is the image", props);
  const [selectImg,setSelectImg]=useState('')
  const [isHorizontal, setIsHorizontal] = useState(true);

  const selectImage = (e,img)=>{ 
    e.preventDefault() 

    const imgObj = new Image();
    imgObj.src = img;
    imgObj.onload = () => {
      setIsHorizontal(imgObj.width >= imgObj.height);
    };

    document.getElementById('my_modal_4').showModal()
    setSelectImg(img)
  }
  return (
    <>
    <div className="h-[80vh] max-sm:h-[50vh] ">
      <ul className="c-accordion">
        {props.map((img, ind) => (
          <li
            id={"A" + ind}
            className="c-accordion__item "
            style={{
              "--cover": `url(${img})`,
            }}
            onClick={(e)=>selectImage(e,img)}
          ></li>
        ))}
      </ul>
      <dialog id="my_modal_4" className="modal">
      <div className={`modal-box ${isHorizontal ? "w-11/12 max-w-5xl":''} object-cover overflow-hidden` }>
      <img src={selectImg} alt="" />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    </div>

    </>
  );
}

export default BlogImages;
