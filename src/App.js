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
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { NavBar } from "./components/nav/NavBar"
import { TicketLists } from "./components/tickets/TicketLists"
import { Routes, Route, Outlet} from "react-router-dom"


export const App = () => {
  return (
    <Routes>
      <Route 
      path="/" 
      element={
        <>
        <NavBar />
        <Outlet />
        </>
      }
      >
      <Route path="tickets" element={<TicketLists /> }/>
      <Route path="employees" element={<EmployeeList /> }/>
      <Route path="customers">
        <Route index element={<CustomerList />} />
        <Route path=":customerId" element={<>Customer Details</>}/>
      </Route>
          {/* <TicketLists /> */}
          {/* <CustomerList /> */}
          {/* <EmployeeList /> */}
      </Route>
    </Routes>
  )
}