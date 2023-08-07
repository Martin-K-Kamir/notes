import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import { selectAllUsers } from "../store";
import { useThunk } from "../hooks/useThunk.js";
import Skeleton from "./Skeleton.jsx";
import Button from "./Button.jsx";
import UserListItem from "./UserListItem.jsx";

export default function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] =
        useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    const { data } = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    function handleUserAdd() {
        doCreateUser();
    }

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        content = <div>{error.message}</div>;
    } else {
        content = data.map(user => <UserListItem key={user.id} user={user} />);
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>
                {creatingUserError && "Error creating user"}
            </div>
            {content}
        </div>
    );
}
