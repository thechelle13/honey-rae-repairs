import { useState, useEffect } from "react";
import "./Customers.css"

export const CustomerDetails = () => {
    const [] = useState([])
    
    useEffect(() => {}, [])

    return (
        <section className="customers">
            <header className="customer-header"></header>
            <div>
                <span className="customer-info"></span>
                {customer.user?.email}
            </div>
            <div>
                <span className="customer-info"></span>
                {customer.specialty}
            </div>
            <div>
                <span className="customer-info"></span>
                {customer.rate}
            </div>
            <footer className="customer-footer">{employee.employeeTickets?.length}
            </footer>
        </section>
    )
}