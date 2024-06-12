import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {logo, logos} from "../../assets/index"
import { navLinksdata } from '../../constants';
import { jlprofile } from '../../assets/index';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div style={{
          width: '85px',  // Adjust width and height as needed
          height: '85px',
          borderRadius: '50%',  // Makes the div circular
          overflow: 'hidden',  // Ensures the image stays within the circular shape
           // Centers the div horizontally
        }}>
        <img src={logos} alt="logo" style={{
             width: '100%',  // Makes sure the image takes up the entire space of the div
             height: 'auto',  // Maintains aspect ratio
             display: 'block',  // Ensures the image is block-level element
          }}/>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={jlprofile} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                 a versatile professional software engineer and a data engineer. 
                 I specialize in developing robust software solutions With a strong foundation in full-stack development and agile methodologies,
                 I ensure seamless integration and continuous delivery of high-quality software. 
                 a dedicated data engineer in creating and managing scalable data pipelines and infrastructure.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar