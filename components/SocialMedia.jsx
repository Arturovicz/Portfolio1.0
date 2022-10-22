import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedin, FaGithub} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/Arturovicz">
            <FaGithub/>
          </a>
            
        </div>
        <div>
          <a href="https://www.linkedin.com/in/valery-dumanyan-ab73a4223/">
            <FaLinkedin/>
          </a>
            
        </div>
        <div>
          <a href="https://www.instagram.com/v.arturovicz/">
          <BsInstagram/>   
          </a>
             
        </div>    
    </div>
  )
}

export default SocialMedia