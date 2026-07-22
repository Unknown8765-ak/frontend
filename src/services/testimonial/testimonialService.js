const API_URL = `${import.meta.env.VITE_API_URL}/testimonials` 

export const createTestimonial = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create testimonial");
    }

    return data;
  } catch (error) {
    console.error("Create Testimonial Error:", error);
    throw error;
  }
};

// ==========================================
// Get All Testimonials
// ==========================================

export const getAllTestimonials = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch testimonials");
    }

    return data;
  } catch (error) {
    console.error("Get Testimonials Error:", error);
    throw error;
  }
};

// ==========================================
// Get Single Testimonial
// ==========================================

export const getSingleTestimonial = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`,{
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch testimonial");
    }

    return data;
  } catch (error) {
    console.error("Get Testimonial Error:", error);
    throw error;
  }
};

// ==========================================
// Update Testimonial
// ==========================================

export const updateTestimonial = async (id, formData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update testimonial");
    }

    return data;
  } catch (error) {
    console.error("Update Testimonial Error:", error);
    throw error;
  }
};

// ==========================================
// Delete Testimonial
// ==========================================

export const deleteTestimonial = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete testimonial");
    }

    return data;
  } catch (error) {
    console.error("Delete Testimonial Error:", error);
    throw error;
  }
};