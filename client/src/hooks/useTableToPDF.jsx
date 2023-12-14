import jsPDF from 'jspdf';
import 'jspdf-autotable';

function useTableToPDF(columnsConfig, filteredData) {
    const exportToPdf = () => {
        const doc = new jsPDF();
        
        // Define the table header and data
        const tableHeader = columnsConfig
          .filter((column) => column.visible)
          .map((column) => column.header);
      
        const tableData = filteredData.map((item) =>
          columnsConfig
            .filter((column) => column.visible)
            .map((column) => item[column.key])
        );
      
        // Set the position for adding content
        let yPos = 20; // Initial Y position
        const marginLeft = 10;
        const tableHeaders = tableHeader.join(',');
        const tableRows = tableData.map((data) => data.join(','));
      
        // Add the table header and data to the PDF
        doc.text(10, yPos, 'Table Data');
        yPos += 10;
        doc.autoTable({
          startY: yPos,
          head: [tableHeaders.split(',')], // Pass an array of arrays
          body: tableRows.map((row) => row.split(',')),
        });
      
        // Save the PDF with a unique name
        const filename = 'table_data.pdf';
        doc.save(filename);
    };

  return { exportToPdf };
}

export { useTableToPDF };
