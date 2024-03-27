import React from "react";
import { LuDot } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";

export const Work = () => {
  return (
    <div className="work" id="work">
      <div
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1YmPALQ4I7gO1oXxkfOI-mz2rO8zf-7dj/view?usp=sharing",
            "_blank"
          )
        }
        className="cursor-pointer grid grid-cols-4 gap-[1rem] card-item w-full border-t-[1px] border-[rgba(255,255,255,0)] hover:shadow-mdPer bg-transparent hover:bg-contrast hover:bg-opacity-30 hover:border-t-[1px] hover:border-[rgba(255,255,255,0.25)] rounded-xl duration-[250ms] ease-in-out text-white h-auto justify-between px-[1.2rem] py-[0.8rem] mb-[1.5rem]"
      >
        <div className="employ-date col-span-1 text-start align-top">
          <div className="text-alternate mt-[0.15rem] uppercase font-semibold text-[0.85rem] px-0 py-0">
            Feb - June 2023
          </div>
        </div>
        <div className="employ-deets col-span-3 text-start">
          <div className="content-wrapper flex-col flex">
            <div className="content-title flex flex-row text-[1.2rem] mt-[-0.25rem]">
              <p>Flask Front-End Developer Intern</p>
              <p className="pt-[0.4rem]">
                <LuDot />
              </p>
              <p>TJP</p>
              <p className="ml-[1rem] rotate-45 text-[0.8rem] pt-[0.8rem]">
                <FaArrowUp />
              </p>
            </div>
            <div className="content-desc flex flex-col text-[1rem] mt-[0.5rem] leading-[1.1rem] text-alternate">
              <p>
                The Trade Journal is a web-app that lets its users tabulate
                their trading portfolio and visualises it for them, all in a
                clean, minimal and secure manner.
              </p>
              <p className="mt-[0.3rem]">
                Developed a User Login & SignUp page, that creates a unique User
                ID whenever a new user signs up, which can then be used to login
                to the system.
              </p>
              <p className="mt-[0.3rem]">
                Also implemented an option to reset a user’s password by setting
                up popular email services’ SMTP servers.
              </p>
              <p className="mt-[0.3rem]">
                Implemented various trade types, states and instruments such as
                Short, Long, Equity, Futures, Call, Put etc. The user has an
                additional option to update their trades as they desire.
              </p>
            </div>
            <div className=" text-[14px] text-[hsl(165,60%,78%)] font-medium content-tech mt-[1rem] max-w-[100%] flex flex-col space-y-[0.6rem]">
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  JavaScript
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Flask
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  HTML/CSS
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Jinja2
                </div>
              </div>
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  SQLite
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  Postman
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() =>
          window.open(
            "https://raajveerk.github.io/BOOP/",
            "_blank"
          )
        } className="cursor-pointer grid grid-cols-4 gap-[1rem] card-item w-full border-t-[1px] border-[rgba(255,255,255,0)] hover:shadow-mdPer bg-transparent hover:bg-contrast hover:bg-opacity-30 hover:border-t-[1px] hover:border-[rgba(255,255,255,0.25)] rounded-xl duration-[250ms] ease-in-out text-white h-auto justify-between px-[1.2rem] py-[0.8rem] mb-[1.5rem]">
        <div className="employ-date col-span-1 text-start align-top">
          <div className="text-alternate mt-[0.15rem] uppercase font-semibold text-[0.85rem] px-0 py-0">
            aug - dec 2022
          </div>
        </div>
        <div className="employ-deets col-span-3 text-start">
          <div className="content-wrapper flex-col flex">
            <div className="content-title flex flex-row text-[1.2rem] mt-[-0.25rem]">
              <p>Freelance Digital Media</p>
              <p className="pt-[0.4rem]">
                <LuDot />
              </p>
              <p>BOOP</p>
              <p className="ml-[1rem] rotate-45 text-[0.8rem] pt-[0.8rem]">
                <FaArrowUp />
              </p>
            </div>
            <div className="content-desc flex flex-col text-[1rem] mt-[0.5rem] leading-[1.1rem] text-alternate">
              <p>
                BOOP is a Multi-Media Agency, run by me and a bunch of my
                college mates, that speacializes in Digital Media and
                Web-Development.
              </p>
              <p className="mt-[0.3rem]">
                With more than four years of experience in curating digital
                media and web-designs, we offer our clients bespoke, tailor-made
                websites and other digital media that propells their online
                brand to the highest altitude.
              </p>
            </div>
            <div className=" text-[14px] text-[hsl(165,60%,78%)] font-medium content-tech mt-[1rem] max-w-[100%] flex flex-col space-y-[0.6rem]">
              <div className="flex flex-row space-x-[0.6rem]">
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  React.Js
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  HTML/CSS
                </div>
                <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  TailwindCSS
                </div>
              </div>
              <div className="flex flex-row space-x-[0.6rem]">
              <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  ReactRouter
                </div>
              <div className="tech-tile px-[1rem] py-[0.3rem] rounded-3xl bg-contrast bg-opacity-25">
                  JavaScript
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
              window.open(
                "https://drive.google.com/file/d/1YmPALQ4I7gO1oXxkfOI-mz2rO8zf-7dj/view?usp=sharing",
                "_blank"
              )
            }
          >
            Link to the full Résumé
          </a>
          <a className="rotate-45 text-sm">
            <FaArrowUp />
          </a>
        </p>
      </div>
    </div>
  );
};
