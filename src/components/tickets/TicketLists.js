import { useState, useEffect } from "react"
import { getAllTickets } from "../../services/ticketServices.js";
import './Tickets.css';
import {Ticket } from "./Ticket.js"
import { TicketFilterBar } from "./TicketFilterBar.js";

export const TicketLists = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState([])

  // useEffect to fetch tickets and set to allTickets on initial render

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set")
    })
  }, []) 

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets]) // When the dependency contains multiple state variables, the useEffect is watching for any time any of the values change.

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])
  return (
    <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
        <article className="tickets">
            {filteredTickets.map((ticketObj) => {
            return   <Ticket ticket={ticketObj} key={ticketObj.id} />
          
            })}
        </article>
    </div>
)
}


