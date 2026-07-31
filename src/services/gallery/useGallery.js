import { useEffect, useState } from "react";
import { getAllGalleryImages } from "./galleryService";

const useGallery = (category = "") => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGallery = async () => {
        try {
            setLoading(true);

            const response = await getAllGalleryImages();

            let images = response.data || [];

            if (category) {
                images = images.filter(
                    (item) => item.category === category
                );
            }

            setGallery(images);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, [category]);

    return {
        gallery,
        loading,
        refetch: fetchGallery,
    };
};

export default useGallery;