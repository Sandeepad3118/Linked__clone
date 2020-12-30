import React from "react"
import "./Header.css"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import NotificationsIcon from "@material-ui/icons/Notifications"
import ChatIcon from "@material-ui/icons/Chat"
import HeaderOption from "./HeaderOption"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import PersonIcon from "@material-ui/icons/Person"
import { BusinessCenter } from "@material-ui/icons"
import { auth } from "./firebase"
import { login, logout } from "./userSlice"
import { useDispatch } from "react-redux"
function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt=""
          />
          <div className="header__search">
            {/* search icon */}
            <SearchIcon />

            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notification" />
          <HeaderOption Icon={PersonIcon} title="San" onClick={logoutOfApp} />
        </div>
      </div>
    </div>
  )
}

export default Header
