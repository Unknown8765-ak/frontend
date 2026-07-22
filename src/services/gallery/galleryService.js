const API_URL = `${import.meta.env.VITE_API_URL}/gallery` 



export const uploadGalleryImage = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to upload image");
    }

    return data;
  } catch (error) {
    console.error("Upload Gallery Error:", error);
    throw error;
  }
};



export const getAllGalleryImages = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch gallery");
    }

    return data;
  } catch (error) {
    console.error("Get Gallery Error:", error);
    throw error;
  }
};



export const updateGalleryImage = async (id, formData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update gallery");
    }

    return data;
  } catch (error) {
    console.error("Update Gallery Error:", error);
    throw error;
  }
};



export const deleteGalleryImage = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete gallery");
    }

    return data;
  } catch (error) {
    console.error("Delete Gallery Error:", error);
    throw error;
  }
};