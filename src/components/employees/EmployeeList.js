import { useEffect, useState } from "react";
import "./Employees.css"
import { Link } from "react-router-dom";
import { User } from "../users/User";
import { getAllEmployees, getAllEmployeesInfo } from "../../services/employeeService";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployeesInfo().then((employeeObj) => {
            setEmployees(employeeObj)
        })

}
,[])

return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
            <User user={employeeObj} key={employeeObj.id} />
          </Link>
        )
      })}
    </div>
  )

}
