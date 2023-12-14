import { createObjectCsvStringifier } from 'csv-writer'; // Import CSV library

// Export function
function useTableToCSV(columnsConfig, visibleData) {
  const exportToCsv = () => {
    const csvStringifier = createObjectCsvStringifier({
      header: columnsConfig
        .filter((column) => column.visible)
        .map((column) => ({ id: column.key, title: column.header })),
    });

    const csvData = visibleData.map((item) =>
      columnsConfig
        .filter((column) => column.visible)
        .map((column) => item[column.key])
    );

    const csvRecords = csvData.map((data) => {
      const record = {};
      columnsConfig
        .filter((column) => column.visible)
        .forEach((column, index) => {
          record[column.header] = data[index];
        });
      return record;
    });

    const csvString = csvStringifier.getHeaderString() + '\n' + csvStringifier.stringifyRecords(csvRecords);

    // Create a Blob object and trigger a download
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'exported_data.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return { exportToCsv };
}

export { useTableToCSV };
