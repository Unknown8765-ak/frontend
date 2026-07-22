const API_URL = `${import.meta.env.VITE_API_URL}/leads` 

// ==========================================
// Create Lead (Public)
// ==========================================

export const createLead = async (leadData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create lead");
    }

    return data;
  } catch (error) {
    console.error("Create Lead Error:", error);
    throw error;
  }
};

// ==========================================
// Get All Leads
// ==========================================

export const getAllLeads = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch leads");
    }

    return data;
  } catch (error) {
    console.error("Get Leads Error:", error);
    throw error;
  }
};

// ==========================================
// Get Single Lead
// ==========================================

export const getSingleLead = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch lead");
    }

    return data;
  } catch (error) {
    console.error("Get Lead Error:", error);
    throw error;
  }
};

// ==========================================
// Update Lead Status
// ==========================================

export const updateLeadStatus = async (id, status) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update lead");
    }

    return data;
  } catch (error) {
    console.error("Update Lead Error:", error);
    throw error;
  }
};

// ==========================================
// Delete Lead
// ==========================================

export const deleteLead = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete lead");
    }

    return data;
  } catch (error) {
    console.error("Delete Lead Error:", error);
    throw error;
  }
};