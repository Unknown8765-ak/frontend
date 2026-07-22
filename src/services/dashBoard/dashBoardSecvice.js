const API_URL = `${import.meta.env.VITE_API_URL}/dashboard` 

export const getDashboardData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch dashboard");
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};