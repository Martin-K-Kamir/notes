import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton.jsx";
import Button from "./Button.jsx";
import AlbumListItem from "./AlbumListItem.jsx";

export default function AlbumList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    const handleAddAlbum = () => {
        addAlbum(user);
    };

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>{error}</div>;
    } else {
        content = data.map(album => {
            return <AlbumListItem key={album.id} album={album} />;
        });
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-1 mb-3">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>
            {content}
        </div>
    );
}
