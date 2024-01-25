import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return <>
   <nav className="navbar navbar-expand navbar-info bg-info text-bg-dark ">
  <div className="navbar-nav position-sticky">
      <NavLink  to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
      <NavLink to="/create" className="nav-item nav-link">Create</NavLink>
     
  </div>
</nav> 
  </>
}

export default Header