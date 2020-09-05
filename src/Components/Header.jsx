import React from "react"
import Link from "gatsby-link"

import "./scss/Header.scss"

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          className="header-gatsby-logo"
          src="https://avatars3.githubusercontent.com/u/12551863?s=400&v=4"
          alt="Gatsby Logo"
        />
        <span className="header-plus-sign" />
        <img
          className="header-markdown-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"
          alt="markdown logo"
        />
      </Link>
      <div className="header-spacer"></div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Markdown">
            <li>Markdown</li>
          </Link>
          <Link to="/MdListCategory1">
            <li>Blog Posts</li>
          </Link>
          <Link to="/MdListCategory2">
            <li>About the Project</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
