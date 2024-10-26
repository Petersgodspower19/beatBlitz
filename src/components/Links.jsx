import React from 'react'
import { Link } from 'react-router-dom'

function Links({to, children, closeBar}) {
  return (
  <Link to={`/${to}`} className="text-black no-underline text-[16px]" onClick={closeBar}>
     {children} 
    </Link>
  )
}

export default Links 
