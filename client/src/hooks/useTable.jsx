import React, { useState, useEffect } from 'react';
import { BiSolidArrowFromRight, BiSolidArrowFromLeft } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import { useTableToCSV } from '../hooks/useTableToCSV';
import { useTableToPDF } from '../hooks/useTableToPDF';
import UpdateModal from '../components/Functions/UpdateModal';
import DeleteRow from '../components/Functions/DeleteRow';

function useTable(tableName, itemsPerPage = 10) {
  const [tableData, setTableData] = useState([]);
  const [columnsConfig, setColumnsConfig] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  
  useEffect(() => {
    // Fetch table data
    fetch(`http://localhost:3000/api/table/${tableName}/all`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        // Generate column configuration from the first data row
        const generatedColumnsConfig = Object.keys(data[0]).map((key) => ({
            key,
            header: key, // Use the column name as the header by default
            visible: true,
          }));

          setTableData(data); // Set table data
          setColumnsConfig(generatedColumnsConfig); // Set column configuration
          setLoading(false); // Mark loading as complete
        }
      })
      .catch((error) => {
        console.error('Error fetching table data:', error);
        setLoading(false); // Mark loading as complete even on error
      });
  }, [tableName]); // Re-fetch when tableName changes

  // Handle update button click
  const handleUpdateClick = (item) => {
    setSelectedRow(item); // Set the selected row
    setIsOpen(true); // Open the modal for update by setting isOpen to true
  };

  // Handle column visibility toggle
  const toggleColumnVisibility = (columnKey) => {
    setColumnsConfig((prevColumns) => {
      return prevColumns.map((col) =>
        col.key === columnKey ? { ...col, visible: !col.visible } : col
      );
    });
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  // Render table header with conditional column headers and search input
  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          {columnsConfig.map((column) =>
            column.visible ? (
              <th
                key={column.key}
                className='px-2 py-1 text-nowrap text-white font-bold bg-blue-500'
              >
                {column.header
                  .replace(/_/g, ' ')
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (match) => match.toUpperCase())}
                <button
                  onClick={() => toggleColumnVisibility(column.key)}
                  className="mx-2 px-1 bg-transparent text-red-200 hover:text-red-900"
                >
                  <span>x</span>
                </button>
              </th>
            ) : null
          )}
          <th className='px-2 py-1 text-nowrap text-white font-bold bg-slate-500'>Update</th>
          <th className='px-2 py-1 text-nowrap text-white font-bold bg-red-500'>Delete</th>
        </tr>
      </thead>
    );
  };

  // Pagination
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter the table data based on the search query
  const filteredData = tableData.filter((item) => {
    const values = Object.values(item).join('').toLowerCase();
    return values.includes(searchQuery.toLowerCase());
  });
  
  // Render table body with data
  const renderTableBody = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = filteredData.slice(startIndex, endIndex);

    return (
      <>
        <tbody className='text-slate-500'>
          {visibleData.map((item, index) => (
            <tr
              key={index}
              className={`${rowClasses(item)} even:bg-gradient-to-r even:from-purple-200 even:to-purple-100 odd:bg-gradient-to-r odd:from-indigo-100 odd:to-indigo-200 group relative`}
            >
              {columnsConfig.map((column) =>
                column.visible ? (
                  <td key={column.key} className={`${columnClasses(column.key)} p-1`}>
                    <div className='rounded-full bg-opacity-75 bg-white px-4 py-1'>
                      {item[column.key]}
                    </div>
                  </td>
                ) : null
              )}
              {/* Update Button Starts */}
              <td className='p-1'>
                <button
                  onClick={() => handleUpdateClick(item)}
                  className='bg-slate-300 hover:bg-slate-700 hover:text-slate-100 text-slate-800 font-bold py-1 px-2 rounded-xl hover:rounded-lg'
                >
                  Update
                </button>
                {isOpen && (
                  <UpdateModal
                    isOpen={isOpen}
                    closeUpdateModal={() => setIsOpen(false)}
                    tableName={tableName}
                    itemId={selectedRow.id}
                  />
                )}
              </td>
              {/* Update Button Ends */}
              {/* Delete Button Starts */}
              <td className='p-1 text-white'>
                <DeleteRow tableName={tableName} itemId={item.id} setTableData={setTableData} />
              </td>
              {/* Delete Button Ends */}
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  // Render pagination controls
  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex my-4 w-auto">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-2 px-4 py-1 rounded-full text-slate-500 hover:bg-slate-100 ${
            currentPage === 1 ? 'cursor-not-allowed' : ''
          }`}
        >
          <BiSolidArrowFromRight size={30} /> {/* Custom back arrow */}
        </button>
        <span className='overflow-auto flex w-auto'>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 rounded-full text-slate-500 hover:bg-slate-100 ${
              page === currentPage ? 'bg-slate-300' : ''
            }`}
          >
            {page}
          </button>
        ))}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`mx-2 px-4 py-2 rounded-full text-slate-500 hover:bg-slate-100 ${
            currentPage === totalPages ? 'cursor-not-allowed' : ''
          }`}
        >
          <BiSolidArrowFromLeft size={30} /> {/* Custom forward arrow */}
        </button>
      </div>
    );
  };

  // Define a function to determine column-specific classes
  const columnClasses = (columnName) => {
    // Add conditional logic based on the column name or other criteria
    // Example: Apply a different class for a specific column
    if (columnName === 'something') {
      return 'text-slate-500'; // Apply a green text color for the 'amount' column
    }

    // Default to an empty string if no specific class is needed
    return '';
  };

  // Define a function to determine row-specific classes
  const rowClasses = (rowData) => {
    // Add conditional logic based on row data or other criteria
    // Example: Apply a different class for rows with specific data
    if (rowData.something === '') {
      return 'text-green-500'; // Apply a green background color for active rows
    }
    // Default to an empty string if no specific class is needed
    return '';
  };

  // Render the complete table
  const renderTable = () => {
    // Initialize the useTableToCSV hook here
    const { exportToCsv } = useTableToCSV(columnsConfig, filteredData);
    // Initialize the useTableToPDF hook here
    const { exportToPdf } = useTableToPDF(columnsConfig, filteredData);

    return (
      <>
        <div className="px-2 space-x-2 text-left overflow">
          <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-2 py-1 border-slate-300 border-4 rounded-lg hover:shadow-lg hover:bg-slate-700 hover:text-white"
          />
          <button
            onClick={exportToCsv} // Trigger CSV export
            className="px-2 py-2 mb-4 text-sm bg-violet-500 hover:bg-violet-600 text-white rounded-md"
          >
            <div className='flex gap-2'>
                <b>CSV</b> <FaDownload size={20} />
            </div>
          </button>
          <button
            onClick={exportToPdf} // Trigger PDF export
            className="px-2 py-2 mb-4 text-sm bg-purple-500 hover:bg-purple-600 text-white rounded-md"
          >
            <div className='flex gap-2'>
                <b>PDF</b> <FaDownload size={20} />
            </div>
          </button>
        </div>
        <table className="table-auto">
          {renderTableHeader()}
          {renderTableBody()}
          {renderTableHeader()}
        </table>

        {/* Pagination Start */}
        {totalPages > 1 && renderPagination()}
        {/* Pagination End */}
      </>
    );
  };

  return { renderTable, toggleColumnVisibility, loading };
}

export default useTable;
