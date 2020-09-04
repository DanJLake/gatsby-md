import React from "react"
import "./scss/PageCover.scss"

function PageCover(props) {
  return (
    <section
      id={props.idSel}
      className="page-cover"
      style={{
        backgroundImage: "url(" + props.backgroundImage + ")",
        color: props.fontColor,
      }}
    >
      <h1>{props.headingText}</h1>
      <h2>{props.subheadingText}</h2>
      {props.scroller ? (
        <span className="page-cover-scroller" onClick={pageScroll}>
          ▼
        </span>
      ) : (
        ""
      )}
    </section>
  )
}

const pageScroll = () => {
  window.scrollBy(0, window.innerHeight - 70 - window.scrollY)
}

export default PageCover
