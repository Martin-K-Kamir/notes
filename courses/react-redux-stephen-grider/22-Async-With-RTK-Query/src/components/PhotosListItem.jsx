import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store/index.js";

export default function PhotosListItem({ photo }) {
    const [removePhoto] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    };

    return (
        <div onClick={handleRemovePhoto} className="relative cursor-pointer">
            <img src={photo.url} alt="random image" className="h-20 w-20" />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrash className="text-3xl" />
            </div>
        </div>
    );
}
