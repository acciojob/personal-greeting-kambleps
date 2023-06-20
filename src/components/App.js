
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[name,setName] = useState("")
  function showname (event){
    setName(event.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={name} onChange={showname}></input>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
