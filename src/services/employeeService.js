export const getAllEmployees = async() => {
    return fetch(`http://localhost:8088/employees?_expand=user`).then((res) => 
    res.json())
}

export const getEmployeeByUserId = (employeeId) => {
    return fetch (`http://localhost:8088/employees/${employeeId}?_expand=user`).then((res)=> res.json())
}

export const getAllEmployeesInfo = () => {
    return fetch (`http://localhost:8088/users?isStaff=true`).then((res) => res.json())
}