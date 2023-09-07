import { useEffect, useState } from "react";
import "./Employees.css"
import { Link } from "react-router-dom";
import { User } from "../users/User";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {


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
