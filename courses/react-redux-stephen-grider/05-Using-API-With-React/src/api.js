import axios from "axios";

const searchImages = async query => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID 66I0mxgK-Dza-YeiGJscdEZCVTPnKD1kI7h8EL2jODs",
        },
        params: {
            query,
        },
    });
    return response.data.results;
};

export default searchImages;
