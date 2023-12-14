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
    fetchData('http://localhost:3000/api/tables');
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.table_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Database;
