import React from "react";
import "../App.css";
import { Work } from "./Work";
import { Projects } from "./Projects";
import { About } from "./About";
import { Closing } from "./Closing";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegSmileWink,
  FaBriefcase,
  FaCode,
  FaPhone
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import ClipboardJS from "clipboard";

export const Hero = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const mobile = "+1 (623) 755-3499";

  const clipboard = new ClipboardJS('.btn');
  
  return (
    <div>
    <div className="wrapper bg-main">
      <div
        className="fixed-column text-white bg-transperent justify-between"
        id="fixed"
        >
        <div className="init-wrapper align-top flex flex-col">
          <p className="leading-none text-[3rem] font-bold font-sans">
            Raajveer Khattar
          </p>
          <p className="text-[1.7rem] mt-[0.60rem] text-white font-medium font-sans">
            Full-Stack Developer
          </p>
          <p className="text-[1rem] mt-[1.2rem] text-[rgba(255,255,255,0.7)] font-regular font-sans max-w-[75%]">
            I build <a className="text-white font-medium">fun</a>,{" "}
            <a className="text-white font-medium">bespoke</a> and{" "}
            <a className="text-white font-medium">super-interactive</a> digital
            experiences.
          </p>
        </div>
        <nav className="flex flex-col nav-wrapper bg-white bg-opacity-20 py-[0.75rem] rounded-full w-[80px]">
          <ul className="nav-item-ul flex flex-col items-center space-y-[0.75rem]">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
              <li className=" nav-item-li rounded-full hover:bg-black hover:bg-opacity-35 duration-150 p-[1.25rem] text-xl">
                <FaRegSmileWink />
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
              <li className="nav-item-li rounded-full hover:bg-black hover:bg-opacity-35 duration-150 p-[1.25rem] text-xl">
                <FaCode />
              </li>
            </Link>
            <Link
              classID="link-element"
              to="work"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              >
              <li className="nav-item-li rounded-full hover:bg-black hover:bg-opacity-35 duration-150 p-[1.25rem] text-xl">
                <FaBriefcase />
              </li>
            </Link>
          </ul>
        </nav>
        <div className="social-wrapper flex">
          <ul className="social-ul flex flex-row space-x-[1.5rem] text-xl">
            <li className="social-li text-alternate hover:text-white hover:mt-[-10px] hover:scale-125 duration-200 ease-in-out cursor-pointer">
              <a
                onClick={() =>
                  window.open("https://github.com/raajveerk", "_blank")
                }
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-li text-alternate hover:text-white hover:mt-[-10px] hover:scale-125 duration-200 ease-in-out cursor-pointer">
              <a
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/raajveer-khattar/",
                    "_blank"
                    )
                  }
                  >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-li text-alternate hover:text-white hover:mt-[-10px] hover:scale-125 duration-200 ease-in-out cursor-pointer">
              <a
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/raajveerkhattar/",
                    "_blank"
                    )
                  }
                  >
                <FaInstagram />
              </a>
            </li>
            <li className="social-li text-alternate hover:mt-[-10px] hover:scale-125 hover:text-white duration-200 ease-in-out cursor-pointer">
              <a
                onClick={() =>
                  window.open("https://twitter.com/RkRaajveer", "_blank")
                }
                >
                <BsTwitterX />
              </a>
            </li>
            <li className="social-li text-xl text-alternate hover:mt-[-10px] hover:scale-125 hover:text-white duration-200 ease-in-out cursor-pointer">
              <a
                onClick={() =>
                  window.open("mailto:khattarraajveer@gmail.com", "_blank")
                }
                >
                <IoMail />
              </a>
            </li>
            <li className="social-li text-alternate hover:mt-[-10px] hover:scale-125 hover:text-white duration-200 ease-in-out cursor-pointer">
              <a
                onClick={() =>
                  window.open("tel:+1(623)755-3499", "_blank")
                }
                >
                <FaPhone />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={"scrollable-column pl-[1rem] bg-transperent text-center"}>
        <About />
        <Projects />
        <Work />
        <Closing />
      </div>
      <div className="fixed flex bottom-[1.5rem] right-[2rem] img-parent cursor-pointer" onClick={scrollToTop}>
        <div className="flex w-[4rem] h-[1.6rem] rounded-md bg-blue-300 img-wrapper">
          <div className="absolute right-0 bottom-0 img-base-uno">
            <img className="img-uno" src={require("../images/uno.png")}></img>
          </div>
        </div>
      </div>
      <div className="fixed flex flex-row text-white bottom-[10.5rem] left-[-10rem] text-[0.9rem] rotate-[-90deg] img-parent cursor-pointer">
        <div className="mt-[-0.4rem] text-[rgba(255,255,255,0.5)]">
        ____________
        </div>
        <div className="ml-[0.5rem] font-semibold btn" data-clipboard-text="khattarraajveer@gmail.com" onClick={() => alert("Copied to Clipboard :)")}>
        khattarraajveer@gmail.com
        </div>
        <div className="mt-[-0.4rem] ml-[0.5rem] text-[rgba(255,255,255,0.5)]">
        _____
        </div>
        <div className="ml-[0.5rem] font-semibold btn" data-clipboard-text="+1(623)755-3499" onClick={() => alert("Copied to Clipboard :)")}>
          {mobile}
        </div>
      </div>
    </div>
    </div>
  );
};
