import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Jean-Luc Twite</h3>
        <p className="text-lg font-normal text-gray-400">
           Software Engineer And Data Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Feel free to reach out if you have any questions, want to collaborate on a project, or just want to connect. 
        I'm always open to new opportunities and interesting conversations!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+27 65 810 6607</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jeanluctwite21@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/profile.php?id=100084219211637'>
            <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://www.instagram.com/twite_technology/'>
            <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/jean-luc-twite-4974071a4/'>
            <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft