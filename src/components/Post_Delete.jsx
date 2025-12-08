import { useState, useEffect } from "react";
import axios from "axios";

// Read the address from our .env file
const API_URL = import.meta.env.VITE_API_URL;

// This function allows any component to easily talk to the backend
export function useApi(endpoint, token) {
  // State 1: The actual data (backpack)
  const [data, setData] = useState([]);
  // State 2: Is the data still travelling? (loading spinner)
  const [loading, setLoading] = useState(false);
  // State 3: Did something go wrong? (error message)
  const [error, setError] = useState(null);

  // Helper function to attach ID badge (token) to every request
  const getHeaders = () => ({
    headers: { "x-auth-token": token },
  });

  // Function to GET data (Read)
  const refresh = async () => {
    if (!token) return;
    setLoading(true); // Turn on spinner
    try {
      const res = await axios.get(`${API_URL}${endpoint}`, getHeaders());
      setData(res.data); // Put food in backpack
      setError(null); // Clear errors
    } catch (err) {
      setError(err.message); // Save error message
    } finally {
      setLoading(false); // Turn off spinner
    }
  };

  // UseEffect: Run this immediately when component loads
  useEffect(() => {
    refresh();
  }, [endpoint, token]); // Re-run if endpoint or token changes

  // Function to POST data (Create)
  const create = async (newItem) => {
    try {
      const res = await axios.post(
        `${API_URL}${endpoint}`,
        newItem,
        getHeaders()
      );
      // Optimistic Update: Add to list immediately without reloading
      setData((prev) => [...prev, res.data]);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Function to DELETE data (Remove)
  const remove = async (id) => {
    try {
      await axios.delete(`${API_URL}${endpoint}/${id}`, getHeaders());
      // Optimistic Update: Remove from list immediately
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { data, loading, error, create, remove, refresh };
}
