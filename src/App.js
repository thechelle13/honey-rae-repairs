// export const App = () => {
//   return <div className="welcome">Welcome to your first React Application!</div>
// }

// export const App = () => {
//   return <><h1>Hello!</h1></>
// }

//import { useState} from "react"


// export const App = () => {
//   const [count, setCount] = useState(0) // [stateVariable, setterFunction]

//    const handleBtnClick = () => {
//     setCount(count + 1)
//     console.log(count)
//   }

//   return <>
//   <h1>Hello!</h1>
//   <button className="btn-secondary" onClick={handleBtnClick}>Click Me</button>
// <div>Count: {count}</div>
//   </>
// }

import "./App.css"
import { Routes, Route} from "react-router-dom"
import {Login} from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"


export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } 
      />
    </Routes>
  )
}