export const getNonStaffUsers = () => {
    return fetch (`http://localhost:8088/users?isStaff=false`).then((res) =>
    res.json()
    )
}

//Add function to userService to get staff users