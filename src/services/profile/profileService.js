const API_URL = `${import.meta.env.VITE_API_URL}/profile` 


// =============================
// Get Profile
// =============================
export const getProfile = async () => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;

  } catch (error) {
    throw error;
  }
};


// =============================
// Update Profile
// =============================
export const updateProfile = async (formData) => {
  try {
    const response = await fetch(`${API}`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;

  } catch (error) {
    throw error;
  }
};


// =============================
// Change Password
// =============================
export const changePassword = async (passwordData) => {
  try {
    const response = await fetch(`${API}/change-password`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;

  } catch (error) {
    throw error;
  }
};