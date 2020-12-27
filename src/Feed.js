import React, { useState } from "react"
import InputIcon from "@material-ui/icons/Input"
import "./Feed.css"
import Post from "./Post.js"
import ImageIcon from "@material-ui/icons/Image"
import CreateIcon from "@material-ui/icons/Create"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import EventNoteIcon from "@material-ui/icons/EventNote"
import InputOption from "./InputOption.js"
function Feed() {
  const [posts, setPosts] = useState([])
  const sendPost = (e) => {
    e.preventDefault()
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#70B5F9" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="write article"
            color="#70B5F9"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map((post) => {
        ;<Post />
      })}
      <Post
        name="sandeep"
        description="This is a text"
        message="wow this workd"
      />
    </div>
  )
}

export default Feed
