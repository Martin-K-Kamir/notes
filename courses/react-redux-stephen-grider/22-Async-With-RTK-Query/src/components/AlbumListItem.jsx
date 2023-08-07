import ExpandablePanel from "./ExpandablePanel.jsx";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button.jsx";
import { GoTrash } from "react-icons/go";
import PhotoList from "./PhotoList.jsx";

export default function AlbumListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = (
        <>
            <Button
                loading={result.isLoading}
                className="mr-3"
                onClick={handleRemoveAlbum}
            >
                <GoTrash />
            </Button>
            {album.title}
        </>
    );

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    );
}
