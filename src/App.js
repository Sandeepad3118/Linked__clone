import React from "react"
import "./App.css"
import Feed from "./Feed"
import Header from "./Header.js"
import Sidebar from "./Sidebar"
function App() {
  return (
    <div className="app">
      <Header />
      {/* app body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* widget */}
    </div>
  )
}

export default App
