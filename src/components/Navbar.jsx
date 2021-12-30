import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex gap-8 items-center justify-end mr-4 mt-2">
      <div className="flex gap-4 text-sm">
        <a className="hover:underline" href="https://mail.google.com/mail">
          Gmail
        </a>
        <a className="hover:underline" href="https://www.google.co.th/imghp">
          Images
        </a>
      </div>
      <div className="flex gap-5 items-center">
        <svg
          className="rounded-full fill-gray-500 p-2 w-10 h-10 cursor-pointer hover:bg-gray-200 active:bg-gray-300"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
        <div>
          <img
            className="rounded-full w-8 h-8 cursor-pointer hover:ring-2 hover:ring-gray-100 active:ring-gray-200"
            src="https://lh3.googleusercontent.com/ogw/ADea4I6q2ZmM9VKUQMETRnGWTBauhGlFEs3VRq1-t_GvKA=s32-c-mo"
            alt=""
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
