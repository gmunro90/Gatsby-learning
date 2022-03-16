import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <header>
        <h2>My portfolio site</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </header>
    </div>
  )
}

export default Header
