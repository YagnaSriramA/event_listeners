import React from "react"
import './style.css'

function App()
{
  function handleClick() {
    console.log("I was clicked!")
  }


  return(
    <div className="container">
      <img src="https://picsum.photos/640/360" alt="bridge"></img>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App