export const getAllEmployees = async() => {
    return fetch(`http://localhost:8088/customers`).then((res) => 
    res.json())
}