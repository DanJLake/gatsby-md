import React from "react"
import Header from "../Components/Header"
import PageCover from "../Components/PageCover"

import "./scss/app.scss"

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <PageCover
        backgroundImage="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"
        headingText="404."
        subheadingText="Page not found. Use the navigation above to visit an existing page."
        idSel="index-page-cover"
        fontColor="white"
      />
    </div>
  )
}
