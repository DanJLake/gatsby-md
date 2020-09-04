import React from "react"
import PostLink from "../Components/PostLink"

function PostList(props) {
  return <div className="post-list">{props.posts}</div>
}

export default PostList
