import React from 'react'
import { FaFacebookF,  FaLinkedinIn, FaPython, FaInstagram } from "react-icons/fa";
import {  SiJava, SiAmazon, SiDatabricks } from "react-icons/si";
import { Link } from 'react-scroll';
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href ="https://www.facebook.com/profile.php?id=100084219211637">
              <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a href ="https://www.instagram.com/twite_technology/">
              <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a href ="https://www.linkedin.com/in/jean-luc-twite-4974071a4/">
              <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <Link>
              <FaPython />
              </Link>
            </span>
            <span className="bannerIcon">
              <SiJava />
            </span>
            <span className="bannerIcon">
              <SiAmazon />
            </span>
            <span className="bannerIcon">
              <SiDatabricks />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media