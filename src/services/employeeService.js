export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=user`).then((res) => 
    res.json())
}

export const getEmployeeByUserId = (employeeId) => {
    return fetch (`http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`).then((res)=> res.json())
}

export const getAllEmployeesInfo = () => {
    return fetch (`http://localhost:8088/users?isStaff=true`).then((res) => res.json())
}

