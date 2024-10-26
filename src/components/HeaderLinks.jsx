import React from 'react'
import { NavLink } from 'react-router-dom'

function HeaderLinks({ to, children }) {
  return (
    <NavLink to={`/${to}`} className="text-white no-underline text-[16px] hover:text-brightColor">
      {children}
    </NavLink>
  )
}

export default HeaderLinks
