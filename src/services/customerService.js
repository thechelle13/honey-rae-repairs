export const getAllEmployees = async() => {
    return fetch("http://localhost:8088/customers?userId=${userId}&_expand=user").then((res) => 
    res.json())
}