import React from "react"
import { graphql } from "gatsby"

import Header from "./Header"

import "./scss/MarkdownLayout.scss"

export default function MarkdownLayout({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="md-post-container">
      <Header />
      <div className="md-post">
        <h1>{frontmatter.title}</h1>
        <span className="md-post-date">{frontmatter.date}</span>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
