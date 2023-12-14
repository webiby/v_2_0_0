import React, { useEffect, useState } from 'react';
import SidebarFooter from '../../UiParts/AdminUiParts/SidebarFooter';
import axios from 'axios'; // Import Axios

export default function Sidebar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('http://localhost:3000/api/table/all')
      .then((response) => {
        // Set the data in the state and mark loading as false
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on component mount


  return (
    <>
      <div className="h-1 bg-orange-500 w-full rounded-full"></div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        <h6 className="text-left py-2 font-extrabold text-yellow-300">Products</h6>
        {data
        .filter((item) => item.table.includes('product'))
        .map((item) => (
        <a href="" className="no-underline">
          <div key={item.id} className="cursor-pointer overflow-hidden text-nowrap text-slate-900 hover:text-yellow-100 hover:ml-2 hover:-mr-2 text-left font-thin hover:font-bold rounded-full bg-gradient-to-br hover:from-orange-900 hover:to-orange-500 from-yellow-600 to-yellow-400 border-r-8 border-r-yellow-400 hover:border-yellow-200 p-1 my-2"
            style={{boxShadow: '20px 20px 60px #475569, -20px -20px 60px #475569'}}>
            <span className="py-1 px-2">{item.table}</span>
          </div>
        </a>
        ))}
        
        <h6 className="text-left py-2 font-extrabold text-yellow-300">Website</h6>
        {data
        .filter((item) => item.table.includes('website_'))
        .map((item) => (
        <a href="" className="no-underline">
          <div key={item.id} className="cursor-pointer overflow-hidden text-nowrap text-slate-900 hover:text-yellow-100 hover:ml-2 hover:-mr-2 text-left font-thin hover:font-bold rounded-full bg-gradient-to-br hover:from-orange-900 hover:to-orange-500 from-yellow-600 to-yellow-400 border-r-8 border-r-yellow-400 hover:border-yellow-200 p-1 my-2"
            style={{boxShadow: '20px 20px 60px #475569, -20px -20px 60px #475569'}}>
            <span className="py-1 px-2">{item.table}</span>
          </div>
        </a>
        ))}
        </div>
      )}
      <div className="h-1 bg-orange-500 w-full rounded-full"></div>
      {/* Sidebar Footer Advertisement */}
      <SidebarFooter />
    </>
  )
}
