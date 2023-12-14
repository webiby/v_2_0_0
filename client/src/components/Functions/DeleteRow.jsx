import React from 'react';

export default function DeleteRow({ tableName, itemId, setTableData }) {
  const handleDelete = () => {
    // Send a DELETE request to your API to delete the item with the given ID
    fetch(`http://localhost:3000/api/table/${tableName}/id/${itemId}/delete`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful deletion, e.g., remove the item from the tableData state
          setTableData((prevData) => prevData.filter((item) => item.id !== itemId));
        } else {
          console.error('Error deleting record:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting record:', error);
      });
  };

  return (
    <button
      onClick={handleDelete}
      className='bg-red-300 hover:bg-red-700 hover:text-red-100 text-red-800 font-bold py-1 px-2 rounded-xl hover:rounded-lg'
    >
      Delete
    </button>
  );
}
