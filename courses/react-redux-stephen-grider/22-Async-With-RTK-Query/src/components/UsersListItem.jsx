import { GoTrash } from "react-icons/go";
import Button from "./Button.jsx";
import { removeUser } from "../store";
import { useThunk } from "../hooks/useThunk.js";
import ExpandablePanel from "./ExpandablePanel.jsx";
import AlbumList from "./AlbumList.jsx";

export default function UsersListItem({ user }) {
    const [doRemoveUser, isRemovingUser, removingUserError] =
        useThunk(removeUser);

    function handleClick() {
        doRemoveUser(user);
    }

    const header = (
        <>
            <Button
                className="mr-3"
                loading={isRemovingUser}
                onClick={handleClick}
            >
                <GoTrash />
            </Button>
            {removingUserError && <div>{removingUserError.message}</div>}
            {user.name}
        </>
    );

    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user} />
        </ExpandablePanel>
    );
}
