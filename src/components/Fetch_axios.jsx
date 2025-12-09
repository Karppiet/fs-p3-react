import { useEffect, useState } from 'react';
import axios from 'axios';


// base URL can come from Vite environment variable
const API_BASE_URL =
     import.meta.env.VITE_API_URL;

function Fetch() {
  const [items, setItems] = useState([]);      // response data
  const [loading, setLoading] = useState(true); // loading flag
  const [error, setError] = useState(null);    // error message text

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/snippets`);
        setItems(response.data);              // save data into state
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data from API:', err.message);
        setError('Could not load items from server.');
        setLoading(false);
      }
    }

    fetchItems();                             // call the function once on mount
  }, []);                                     // empty dependency array -> run once

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading data from the server...</div>;
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#2e3a8c' }}>Code Snippets</h1>
      {items.length === 0 && (
        <p>No items found. Check your database.</p>
      )}
      {items.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item) => (
            <li
              key={item._id}
              style={{
                background: '#e9ecef',
                marginBottom: '8px',
                padding: '10px',
                borderRadius: '6px'
              }}
            >
              <span style={{ fontWeight: 600 }}>Title:</span> {item.title}
              <span
                style={{
                  fontSize: '0.8em',
                  color: '#666',
                  marginLeft: '15px'
                }}
              >
                (Code: {item.code})
                (Language: {item.language})
                (ID: {item._id})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fetch;