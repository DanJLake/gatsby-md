import React from "react"
import Header from "../Components/Header"
import PostLink from "../Components/PostLink"
import PostList from "../Components/PostList"

import "./scss/MdList.scss"
import { Link } from "gatsby"
const MdListCategory2 = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  Posts.push(
    <Link to="https://danjlake.github.io/">
      <div>
        <span className="listed-post-title">Daniel Lake</span>
        <span className="listed-post-date">Portfolio</span>
        <img
          src="https://danjlake.github.io/img/anubis.png"
          alt=""
          className="listed-post-image"
        />
      </div>
    </Link>
  )
  return (
    <div>
      <Header />
      <PostList posts={Posts} />
    </div>
  )
}
export default MdListCategory2

//Query to filter markdown posts to category 2
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: 2 } } }
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
