import React from "react";
import { images } from "../../assets/images/imageAll";

const ProfileImage = (props) => {
  return (
    <img src={images[`${props.user}.svg`]} width='201' height='201' className='photo' alt='' />
  )
}

export default ProfileImage;
