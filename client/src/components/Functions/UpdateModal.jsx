import React, { useState, useEffect } from 'react';

function UpdateModal({ tableName, itemId, closeUpdateModal}) {
  const [formData, setFormData] = useState({});
  const [tableColumns, setTableColumns] = useState([]);
  
  // Initialize form data with default values
  const initializeFormData = () => {
    const initialData = {};
    tableColumns.forEach((column) => {
      initialData[column.Field] = ''; // Set initial values based on column names
    });
    setFormData(initialData);
  };

  // Fetch table column details based on tableName
  useEffect(() => {
    // Make the API call to fetch table column details here and update tableColumns
    // Example API call:
    fetch(`http://localhost:3000/api/table/${tableName}/details`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.columns) {
          // Assuming the API response contains the table columns data
          setTableColumns(data.columns);
        } else {
          console.error('Invalid API response:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching table columns:', error);
      });
  }, [tableName]);

  // Fetch the data of the specific row to be updated based on itemId
  useEffect(() => {
    // Make the API call to fetch the row data here and set the formData
    // Example API call:
    fetch(`http://localhost:3000/api/table/${tableName}/id/${itemId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the API response contains the row data
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching row data:', error);
      });
  }, [tableName, itemId]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update the record based on form data
  const updateRecord = async () => {
    try {
      console.log("Updating record...");
      const response = await fetch(`http://localhost:3000/api/table/${tableName}/id/${itemId}/update`, {
        method: 'PUT', // Use the appropriate HTTP method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful update
        // You may want to add a success message or perform other actions here
        // Refresh the page
        window.location.reload();
      } else {
        // Handle error cases
        console.error('Error updating record:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  // Generate input fields based on table columns for the update form
  const inputFields = tableColumns.map((column) => (
    <div key={column.Field} className="mb-4">
      {column.Field?.includes('number') ? (
        <div>
          <label htmlFor={column.Field} className="text-gray-700">
            {column.Field.charAt(0).toUpperCase() + column.Field.slice(1).replace(/_/g, ' ')}
          </label>
          <input
            type="number"
            name={column.Field}
            id={column.Field}
            placeholder={column.Field}
            value={formData[column.Field] || ''} // Initialize with formData or an empty string
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : column.Field?.includes('something') ? (
        <div>
          <label htmlFor={column.Field} className="text-gray-700">
            {column.Field.charAt(0).toUpperCase() + column.Field.slice(1).replace(/_/g, ' ')}
          </label>
          <input
            type="date"
            name={column.Field}
            id={column.Field}
            placeholder={column.Field}
            value={formData[column.Field] || ''} // Initialize with formData or an empty string
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      // Hidden Fields Start
      ) : column.Field === 'id' ? (
        <div></div>
      ) : column.Field === 'created_at' ? (
        <div></div>
      ) : column.Field === 'updated_at' ? (
        <div></div>
      ) : column.Field === 'email_verified_at' ? (
        <div></div>
      // Hidden Fields End
      ) : column.Field?.includes('dob') ? (
        <div>
          <label htmlFor={column.Field} className="text-gray-700">
            {column.Field.charAt(0).toUpperCase() + column.Field.slice(1).replace(/_/g, ' ')}
          </label>
          <input
            type="date"
            name={column.Field}
            id={column.Field}
            placeholder={column.Field}
            value={formData[column.Field] || ''} // Initialize with formData or an empty string
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ) : column.Type?.includes('enum') ? (
        <div>
          <label htmlFor={column.Field} className="text-gray-700">
            {column.Field.charAt(0).toUpperCase() + column.Field.slice(1).replace(/_/g, ' ')}
          </label>
          <select
            name={column.Field}
            id={column.Field}
            value={formData[column.Field] || ''} // Initialize with formData or an empty string
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
          {Array.isArray(column.typeValues) ? (
            column.typeValues.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          ) : (
            <option value="">No Options</option>
          )}
          </select>
        </div>
      ) : (
        <div>
          <label htmlFor={column.Field} className="text-gray-700">
            {column.Field.charAt(0).toUpperCase() + column.Field.slice(1).replace(/_/g, ' ')}
          </label>
          <input
            type="text"
            name={column.Field}
            id={column.Field}
            placeholder={column.Field}
            value={formData[column.Field] || ''} // Initialize with formData or an empty string
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
    </div>
  ));

  return (
    // Render your update modal JSX here using the formData and inputFields
    <>
      <div className="fixed inset-0 md:w-1/2 p-4 items-center justify-center z-50 bg-slate-300 overflow-auto">
        <div className="modal-container">
          <div className="modal-content">
            <h2 className="text-xl font-semibold mb-4">Update {tableName} With Id:{itemId} </h2>
            <form>
              {inputFields}
              <button type="button"
                onClick={updateRecord}
                className="bg-green-300 hover:bg-green-400 hover:text-green-900 text-green-800 font-bold py-2 px-4 rounded-xl hover:rounded-lg mb-2"
              >
                Create | Save
              </button>
            </form>
          </div>
          <div className="modal-actions">
            <button
              onClick={closeUpdateModal}
              className="bg-orange-300 hover:bg-orange-400 hover:text-orange-900 text-orange-800 font-bold py-2 px-4 rounded-xl hover:rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateModal;
