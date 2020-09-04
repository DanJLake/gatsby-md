import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <Link to={post.frontmatter.slug}>
    <div>
      <span className="listed-post-title">{post.frontmatter.title}</span>
      <span className="listed-post-date">{post.frontmatter.date}</span>
      <span>{post.frontmatter.category}</span>
    </div>
  </Link>
)
export default PostLink
