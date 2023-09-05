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
import { TicketLists } from "./components/tickets/TicketLists"


export const App = () => {
  return <>
  <TicketLists />
  </>
}