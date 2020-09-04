import React from "react"
import Header from "../Components/Header"
import PageCover from "../Components/PageCover"

import "./scss/app.scss"

export default function Home({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => edge.node.html)
  return (
    <div className="app-container">
      <Header />
      <PageCover
        backgroundImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80"
        headingText="Gatsby + Markdown"
        subheadingText="This static site is built using React with Gatsby and generates pages from Markdown files."
        idSel="index-page-cover"
        fontColor="white"
        scroller
      />

      {/* Markdown Posts with category of 0 */}
      <section
        className="main-page"
        dangerouslySetInnerHTML={{ __html: Posts }}
      />
    </div>
  )
}

//Get all markdown posts with category 0
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: 0 } } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
          }
        }
      }
    }
  }
`
