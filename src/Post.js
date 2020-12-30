import React from "react"
import "./Post.css"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import CommentIcon from "@material-ui/icons/Comment"
import ShareIcon from "@material-ui/icons/Share"
import SendIcon from "@material-ui/icons/Send"
import PersonIcon from "@material-ui/icons/Person"
import InputOption from "./InputOption.js"
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <PersonIcon />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={CommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Post
