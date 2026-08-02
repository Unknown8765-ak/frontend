import { useEffect, useState } from "react";
import { getAllGalleryImages } from "./galleryService";

const useGallery = (category = "") => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGallery = async () => {
        try {
            setLoading(true);

            const response = await getAllGalleryImages();
            console.log("response1",response.data.data)
            console.log("response",response.data[0])

            setGallery(response.data ||[]);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    return {
        gallery,
        loading,
        refetch: fetchGallery,
    };
};

export default useGallery;