import { useState } from "react";
import "./ChatList.css"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"} className="add"
          onClick={() => setAddMode(!addMode)}
          alt="" />
      </div>
    </div>
  )
}

export default ChatList