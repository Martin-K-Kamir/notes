import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers, fetchUsers } from "./userSlice.js";
export const UserView = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectAllUsers)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>List of users</h2>
            {user.loading ? <p>Loading...</p> : user.error ? <p>{user.error}</p> : <div>
                {user.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>}
        </div>
    )
}