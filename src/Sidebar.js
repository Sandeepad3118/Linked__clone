import React from "react"
import "./Sidebar.css"
import PersonIcon from "@material-ui/icons/Person"

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <PersonIcon className="sidebar__icon" />
        <h2>Sandeep</h2>
        <h3>sandeepad3118@gmail.com</h3>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed</p>
          <p className="sidebar__statNumber">3543</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">5678</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("project")}
        {recentItem("career")}
      </div>
    </div>
  )
}

export default Sidebar
