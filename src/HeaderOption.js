import React from "react"
import "./HeaderOption.css"

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
