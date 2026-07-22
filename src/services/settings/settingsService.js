const API_URL = `${import.meta.env.VITE_API_URL}/settings` 

// ======================================
// Get Settings
// ======================================

export const getSettings = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch settings");
    }

    return data;
  } catch (error) {
    console.error("Get Settings Error:", error);
    throw error;
  }
};

// ======================================
// Update Settings
// ======================================

export const updateSettings = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update settings");
    }

    return data;
  } catch (error) {
    console.error("Update Settings Error:", error);
    throw error;
  }
};