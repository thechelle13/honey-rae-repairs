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

import { useState, useEffect } from "react"
import { getAllTickets } from "./services/ticketServices.js";
import './App.css';

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  // useEffect to fetch tickets and set to allTickets on initial render

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set")
    })
  }, []) 

  useEffect(() => {
    console.log("show emergency changed")
  }, [showEmergencyOnly]) // When the dependency contains multiple state variables, the useEffect is watching for any time any of the values change.

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={()=> {setShowEmergencyOnly(true)}}>Emergency</button>
        <button className="filter-btn  btn-info" onClick={()=> {setShowEmergencyOnly(false)}}>Show All</button>
      </div>
      <article className="tickets">
        {allTickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
            </section>
          )
        })}
        </article>
        </div>
)
}