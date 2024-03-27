import React from 'react'

export const Closing = () => {

   const symbol = ")"
   const text = `${symbol}`;
    
  return (
    <div className="text-alternate font-medium closing-note px-[1.2rem] mt-[10rem] text-justify">
        <div>Made in VS Code using <span className="bold-about">React.js</span> and <span className="bold-about">TailwindCSS, 'react-scroll'</span> for the smooth scrolling animations in between pages. Feel free to check the repository out on my <span className="bold-about">GitHub</span>. Please give proper credits if you happen to use it for your own website :{text}</div>
    </div>
  )
}
