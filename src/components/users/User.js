import "./User.css"


// address different users here - render of which user and what info

export const User = ({user}) => {
    return (
        <div className="user">
            <div>
                <div className="user-info">Name</div>
                <div>{user.fullName}</div>
            </div>
            <div>
                <div className="user-info">Email</div>
                <div>{user.email}</div>
            </div>
            <div>
                <div className="user-info">Name</div>
                <div></div>
            </div>
            <div>
                <div className="user-info">Email</div>
                <div></div>
            </div>



        </div>
    )
}