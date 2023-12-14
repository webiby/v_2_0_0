import { useState, useEffect } from 'react';

// Define a custom hook for creating records
function useCreate(table) {
  const [formData, setFormData] = useState({});
  const [tableColumns, setTableColumns] = useState([]);

  // Initialize form data with default values
  const initializeFormData = () => {
    const initialData = {};
    tableColumns.forEach((column) => {
      if (column.Type?.includes('enum')) {
        // For enum type columns, initialize with the first enum option (or an empty string)
        initialData[column.Field] = column.typeValues[0] || '';
        console.log(initialData);
      } else {
        initialData[column.Field] = '';
        console.log(initialData);
      }
    });
    setFormData(initialData);
  };

  // Fetch table column details based on tableName
  useEffect(() => {
    // Make the API call to fetch table column details here and update tableColumns
    // Example API call:
    fetch(`http://localhost:3000/api/table/${table}/details`)
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
  }, []); // Empty dependency array means this effect runs only once
  

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Create a record based on form data
  const createRecord = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/table/${table}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Reset form after successful creation
        initializeFormData();
        // Refresh the page
        window.location.reload();
      } else {
        // Handle error cases
        console.error('Error creating record:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating record:', error);
    }
  };

  // Generate input fields based on table columns
  const inputFields = tableColumns.map((column) => (
    <div key={column.Field} className="mb-4">
      <label htmlFor={column.Field} className="text-slate-500">
        {column.Field.charAt(0).toUpperCase() + column.Field.slice(1).replace(/_/g, ' ')}
      </label>
      {column.Field?.includes('number') ? (
        <input
          type="number"
          name={column.Field}
          id={column.Field}
          placeholder={column.Field}
          value={formData[column.Field] || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-500 focus:border-slate-500"
        />
      ) : column.Field?.includes('something') ? (
        <input
          type="date"
          name={column.Field}
          id={column.Field}
          placeholder={column.Field}
          value={formData[column.Field] || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-500 focus:border-slate-500"
        />
      // Hidden Fields Start
      ) : column.Field === 'id' ? (
        null
      ) : column.Field === 'created_at' ? (
        null
      ) : column.Field === 'updated_at' ? (
        null
      ) : column.Field === 'email_verified_at' ? (
        null
      // Hidden Fields End
      ) : column.Field?.includes('dob') ? (
        <input
          type="date"
          name={column.Field}
          id={column.Field}
          placeholder={column.Field}
          value={formData[column.Field] || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-500 focus:border-slate-500"
        />
      ) : column.Type?.includes('enum') ? (
        <select
        name={column.Field}
        id={column.Field}
        value={formData[column.Field] || ''}
        onChange={handleInputChange}
        className="w-full px-3 py-2 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-500 focus:border-slate-500"
      >
        {Array.isArray(column.typeValues) ? (
          column.typeValues.map((option) => (
            <option className='text-slate-500' key={option} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option className='text-slate-500' value="">No Options</option>
        )}
      </select>
      ) : (
        <input
          type="text"
          name={column.Field}
          id={column.Field}
          placeholder={column.Field}
          value={formData[column.Field] || ''}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-500 focus:border-slate-500"
        />
      )}
    </div>
  ));
  return { inputFields, createRecord };
  }

export default useCreate;
