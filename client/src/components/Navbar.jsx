import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-center items-center bg-white py-4 gap-10 shadow-md font-semibold text-lg text-gray-500">
      <Link to="/" className="hover:text-black">Home</Link>
      <Link to="/create" className="hover:text-black">Create Blog</Link>
    </nav>
  )
}

export default Navbar