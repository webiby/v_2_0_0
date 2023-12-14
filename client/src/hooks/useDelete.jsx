import { useState } from 'react';

// Define a custom hook for deleting records
function useDelete(tableName, id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Delete a record based on its ID
  const deleteRecord = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:3000/api/table/${tableName}/id/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle success case (e.g., show a success message)
        console.log('Record deleted successfully');
      } else {
        // Handle error cases
        console.error('Error deleting record:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteRecord, loading, error };
}

export default useDelete;
