import { useState } from 'react';

function useCrud() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data (Read operation)
  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // Function to create a new record (Create operation)
  const createRecord = async (url, newData) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      await response.json();
      fetchData(url); // Refresh data after creating
    } catch (error) {
      console.error('Error creating record:', error);
      setLoading(false);
    }
  };

  // Function to update a record (Update operation)
  const updateRecord = async (url, updatedData) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      await response.json();
      fetchData(url); // Refresh data after updating
    } catch (error) {
      console.error('Error updating record:', error);
      setLoading(false);
    }
  };

  // Function to delete a record (Delete operation)
  const deleteRecord = async (url) => {
    try {
      setLoading(true);
      await fetch(url, {
        method: 'DELETE',
      });
      fetchData(url); // Refresh data after deleting
    } catch (error) {
      console.error('Error deleting record:', error);
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    fetchData,
    createRecord,
    updateRecord,
    deleteRecord,
  };
}

export default useCrud;
