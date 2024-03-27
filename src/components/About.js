import React from "react";
import '../images/nerdEmoji.png';

export const About = () => {
  
  const symbol = ")"
  const text = `${symbol}`;

  const symbol1 = "("
  const text1 = `${symbol1}`;

  return (
    <div className="text-alternate font-medium text-justify px-[1.2rem] mb-[10rem] mt-[0.2rem] text-[1.05rem] flex flex-col" id="about">
      <p>A 23 year old <span className="bold-about">Computer Software Engineering Graduate</span> student at <span className="bold-about">ASU</span>, who loves to play tennis, brew coffee and create awesome and accessible <span className="bold-about">digital experiences.</span></p>
      <p className="mt-[1rem]">I completed my Bachelor of Technology in <span className="bold-about">Computer Science and Engineering</span> from <span className="bold-about">Manipal University Jaipur</span> {text1}2019 - 2023{text} and that's where I picked up <span className="bold-about">web-development</span> during my first year of college, albeit as a hobby that quickly turned into a <span className="bold-about">passion.</span></p>
      <p className="mt-[1rem]">Fast forward to grad school, I found myself exploring <span className="bold-about">newer technologies</span> and diving deeper into topics such as <span className="bold-about">LLMs, Advanced Cryptography, Distributed Database Systems</span> and many more.</p>
      <p className="mt-[1rem]">When I'm not stressing over projects or submitting assignments, I gravitate towards playing <span className="bold-about">tennis</span>, hitting the <span className="bold-about">gym</span>, exploring new <span className="bold-about">café's</span> and <span className="bold-about">cooking!</span></p>
    </div>
  );
};
