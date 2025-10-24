import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar  shadow-sm bg-background text-tertiary">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
         <li><a>Services</a></li>
      <li><a>Our Doctor</a></li>
      <li><a>Appointment</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Elite Complete Care LLC</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About Us</a></li>
      <li><a>Services</a></li>
      <li><a>Our Doctor</a></li>
      <li><a>Appointment</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Book Appointment</a>
  </div>
</div>
  )
}

export default NavBar