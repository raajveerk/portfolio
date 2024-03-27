import React from "react";
import { LuDot } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";

export const Projects = () => {
  return (
    <div className="projects mb-[10rem]" id="projects">
      <div onClick={() =>
          window.open(
            "https://github.com/raajveerk/CV-VirtualMouse",
            "_blank"
          )
        } className="cursor-pointer grid grid-cols-4 gap-[1rem] card-item w-full border-t-[1px] border-[rgba(255,255,255,0)] hover:shadow-mdPer bg-transparent hover:bg-contrast hover:bg-opacity-30 hover:border-t-[1px] hover:border-[rgba(255,255,255,0.25)] rounded-xl duration-[250ms] ease-in-out text-white h-auto justify-between px-[1.2rem] py-[0.8rem] mb-[1.5rem]">
        <div className="employ-date col-span-1 text-start align-top">
          <img
            className="text-alternate mt-[0.15rem] uppercase font-semibold text-[0.85rem] px-0 py-0"
            src={require("../images/CV.png")}
          ></img>
        </div>
        <div className="employ-deets col-span-3 text-start">
          <div className="content-wrapper flex-col flex">
            <div className="content-title flex flex-row text-[1.2rem] mt-[-0.25rem]">
              <p>Virtual Mouse</p>
              <p className="pt-[0.4rem]">
                <LuDot />
              </p>
              <p>Computer Vision</p>
              <p className="ml-[1rem] rotate-45 text-[0.8rem] pt-[0.8rem]">
                <FaArrowUp />
              </p>
            </div>
            <div className="content-desc flex flex-col text-[1rem] mt-[0.5rem] leading-[1.1rem] text-alternate">
              <p>
                Using Google’s Mediapipe framework and OpenCV library for
                Pyhton, I built a Hand Tracking module that utilizes the
                laptop’s webcam to track upto two hands.
              </p>
              <p className="mt-[0.3rem]">
                After testing the tracking algorithm on multiple people, I then
                used the said module to build a GUI application using ”autopy”
                that mimicked mouse movements by tracking my fingers.
              </p>
              <p className="mt-[0.3rem]">
                With the application, a person can successfully move the cursor
                around and operate the left-click of a mouse, by moving their
                fingers within the camera’s field of view.
              </p>
            </div>
            <div className=" text-[14px] text-[hsl(165,60%,78%)] font-medium content-tech mt-[1rem] max-w-[100%] flex flex-col space-y-[0.6rem]">
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Python
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  OpenCV
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Mediapipe
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  autopy
                </div>
              </div>
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Tkinter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1YmPALQ4I7gO1oXxkfOI-mz2rO8zf-7dj/view",
            "_blank"
          )
        } className="cursor-pointer grid grid-cols-4 gap-[1rem] card-item w-full border-t-[1px] border-[rgba(255,255,255,0)] hover:shadow-mdPer bg-transparent hover:bg-contrast hover:bg-opacity-30 hover:border-t-[1px] hover:border-[rgba(255,255,255,0.25)] rounded-xl duration-[250ms] ease-in-out text-white h-auto justify-between px-[1.2rem] py-[0.8rem] mb-[1.5rem]">
        <div className="employ-date col-span-1 text-start align-top">
          <img
            src={require("../images/tjp.png")}
            className="text-alternate mt-[0.15rem] uppercase font-semibold text-[0.85rem] px-0 py-0"
          ></img>
        </div>
        <div className="employ-deets col-span-3 text-start">
          <div className="content-wrapper flex-col flex">
            <div className="content-title flex flex-row text-[1.2rem] mt-[-0.25rem]">
              <p>Trade Journal Project</p>
              <p className="pt-[0.4rem]">
                <LuDot />
              </p>
              <p>Personal Finance</p>
              <p className="ml-[1rem] rotate-45 text-[0.8rem] pt-[0.8rem]">
                <FaArrowUp />
              </p>
            </div>
            <div className="content-desc flex flex-col text-[1rem] mt-[0.5rem] leading-[1.1rem] text-alternate">
              <p>
                I joined Mr. Veeral Patel as a Front-End Developer for their
                newest venture in the FinTech space.
              </p>
              <p className="mt-[0.3rem]">
                The platform’s front-end was Vanilla Javascript, the back-end
                was written in Python-Flask, it used SQLite for the database and
                Chart.js as its primary visualization library.
              </p>
              <p className="mt-[0.3rem]">
                Majority of my job revolved around implementing and testing
                logic for the trade types and tickets, as well as querying the
                necessary information for visualization of a user’s trade
                portfolio.
              </p>
            </div>
            <div className=" text-[14px] text-[hsl(165,60%,78%)] font-medium content-tech mt-[1rem] max-w-[100%] flex flex-col space-y-[0.6rem]">
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  JavaScript
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Python
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Flask
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  HTML/CSS
                </div>
              </div>
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Jinja2
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Chart.Js
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Postman
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  SQLite
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() =>
          window.open(
            "https://github.com/raajveerk/GetBackToWork",
            "_blank"
          )
        } className="cursor-pointer grid grid-cols-4 gap-[1rem] card-item w-full border-t-[1px] border-[rgba(255,255,255,0)] hover:shadow-mdPer bg-transparent hover:bg-contrast hover:bg-opacity-30 hover:border-t-[1px] hover:border-[rgba(255,255,255,0.25)] rounded-xl duration-[250ms] ease-in-out text-white h-auto justify-between px-[1.2rem] py-[0.8rem] mb-[1.5rem]">
        <div className="employ-date col-span-1 text-start align-top">
          <img src={require("../images/work.png")} className="text-alternate mt-[0.15rem] uppercase font-semibold text-[0.85rem] px-0 py-0">
          </img>
        </div>
        <div className="employ-deets col-span-3 text-start">
          <div className="content-wrapper flex-col flex">
            <div className="content-title flex flex-row text-[1.2rem] mt-[-0.25rem]">
              <p>GetBackToWork</p>
              <p className="pt-[0.4rem]">
                <LuDot />
              </p>
              <p>Chrome Extension</p>
              <p className="ml-[1rem] rotate-45 text-[0.8rem] pt-[0.8rem]">
                <FaArrowUp />
              </p>
            </div>
            <div className="content-desc flex flex-col text-[1rem] mt-[0.5rem] leading-[1.1rem] text-alternate">
              <p>
                GetBackToWork is a chrome extension that blocks all of the
                social media websites.
              </p>
              <p className="mt-[0.3rem]">
                I’ve always been fond of cool chrome extensions and that’s what
                inspired me to make one myself. This extension, if enabled,
                blocks the webpage of al social media sites and displays a
                custom HTML with a random dad joke.
              </p>
              <p className="mt-[0.3rem]">
                The chrome extension is based on the Manifest Version 2.0 and
                calls the ”icanhazdadjoke” API that returns a random joke
                everytime it is called by the extension.
              </p>
            </div>
            <div className=" text-[14px] text-[hsl(165,60%,78%)] font-medium content-tech mt-[1rem] max-w-[100%] flex flex-col space-y-[0.6rem]">
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  JSON
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Javascript
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  'icanhazdadjoke' API
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lt-resume pl-[1rem] cursor-pointer">
        <p className=" text-start text-wrapper text-white text-lg flex-row flex space-x-[0.8rem]">
          <a
            className="hover:text-alternate duration-150 font-semibold"
            onClick={() =>
              window.open("https://github.com/raajveerk", "_blank")
            }
          >
            View more Projects
          </a>
          <a className="rotate-45 text-sm">
            <FaArrowUp />
          </a>
        </p>
      </div>
    </div>
  );
};
