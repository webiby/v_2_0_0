import React, { useEffect } from 'react';
import useCrud from '../../../../hooks/useCrud';

function Database() {
  const {
    data,
    loading,
    fetchData,
    createRecord,
    updateRecord,
    deleteRecord,
  } = useCrud();

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData('http://localhost:3000/api/databases');
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item}>
              {item}
              {/* <button onClick={() => updateRecord(`/${item}`, { name: 'Updated Name' })}>
                Update
              </button>
              <button onClick={() => deleteRecord(`/${item}`)}>Delete</button> */}
            </li>
          ))}
        </ul>
      )}
      {/* <button onClick={() => createRecord('/create', { name: 'New Name' })}>
        Create
      </button> */}
    </div>
  );
}

export default Database;
