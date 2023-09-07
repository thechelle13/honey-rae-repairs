import { useState, useEffect } from "react";
import "./Employees.css"
import { getEmployeeByUserId } from "../../services/employeeService";
import { useParams } from "react-router-dom";


export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const[employee, setEmployee] =useState([])

    useEffect(()=> {
        getEmployeeByUserId(employeeId).then((data) => {
            const singleEmployee = data[0]
            if(singleEmployee) {
                setEmployee(singleEmployee)
            }
        }
        )
    }, [employeeId])

    return  (<section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="customer-info">Email:</span>
                {employee.user?.email}
            </div>
            <div>
                <span className="customer-info">Specialty</span>
                {employee.specialty}
            </div>
            <div>
                <span className="customer-info">Rate</span>
                {employee.rate}
            </div>
            <footer className="employee-footer">{employee.employeeTickets?.length}
            </footer>
            </section>
    )
}