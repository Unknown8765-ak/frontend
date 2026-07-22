const API_URL =`${import.meta.env.VITE_API_URL}/website-content`;

export const getWebsiteContent = async (page) => {
  try {
    const response = await fetch(`${API_URL}/${page}`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch website content"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



export const updateHeroImage = async (
  page,
  formData
) => {
  try {
    const response = await fetch(
      `${API_URL}/${page}/hero`,
      {
        method: "PATCH",
        credentials: "include",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to update hero image"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ======================================
// Add Gallery Image
// ======================================

export const addGalleryImage = async (
  formData
) => {
  try {
    const response = await fetch(
      `${API_URL}/aquarium/gallery`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to upload image"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const deleteGalleryImage = async (
  imageId
) => {
  try {
    const response = await fetch(
      `${API_URL}/aquarium/gallery/${imageId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to delete image"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const addProject = async (
  formData
) => {
  try {
    const response = await fetch(
      `${API_URL}/agency/project`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to add project"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const deleteProject = async (
  projectId
) => {
  try {
    const response = await fetch(
      `${API_URL}/agency/project/${projectId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to delete project"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};