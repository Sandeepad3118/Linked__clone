import React, { useState, useEffect } from "react"
import InputIcon from "@material-ui/icons/Input"
import "./Feed.css"
import Post from "./Post.js"
import firebase from "firebase"
import ImageIcon from "@material-ui/icons/Image"
import CreateIcon from "@material-ui/icons/Create"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventIcon from "@material-ui/icons/Event"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import EventNoteIcon from "@material-ui/icons/EventNote"
import InputOption from "./InputOption.js"
import { db } from "./firebase"
function Feed() {
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection("posts").add({
      name: "sandeep",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

      {/* <Post
        name="sandeep"
        description="This is a text"
        message="wow this workd"
      /> */}
    </div>
  )
}

export default Feed
