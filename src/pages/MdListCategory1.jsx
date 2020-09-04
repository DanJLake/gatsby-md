import React from "react"
import Header from "../Components/Header"
import PostLink from "../Components/PostLink"
import PostList from "../Components/PostList"

import "./scss/MdList.scss"
const MdListCategory1 = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
      <Header />
      <PostList posts={Posts} />
    </div>
  )
}
export default MdListCategory1

//Query to filter markdown posts to category 1
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: 1 } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
            image
          }
        }
      }
    }
  }
`
