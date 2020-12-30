import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import "./App.css"
import Feed from "./Feed"
import Header from "./Header.js"
import Login from "./Login"
import Sidebar from "./Sidebar"
import { selectUser } from "./userSlice"
import { auth } from "./firebase"
import { login, logout } from "./userSlice"
import { useDispatch } from "react-redux"

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  })
  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  )
}

export default App
