import React from 'react'
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full shadow-md py-4 bg-white flex items-center justify-center gap-2 flex-wrap">
        <p className="font-normal text-gray-500 text-base text-center">Copyright &copy; 2023 Bloggy. All Rights Reserved.</p>
        <p className="text-gray-500 font-medium flex items-center text-center">Made with <AiFillHeart className="mx-1 text-red-500"/> by Aditya Sharma</p>
    </div>
  )
}

export default Footer