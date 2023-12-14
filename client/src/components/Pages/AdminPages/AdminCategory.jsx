import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

import AdminHeader from "../../Sections/AdminSections/AdminHeader";


import Sidebar from "../../Sections/AdminSections/Sidebar";
import Breadcrumb from '../../Sections/AdminSections/Breadcrumb';
import AdminContentTab from '../../Sections/AdminSections/AdminContentTab';

function useToggleOnScreenSize(initialState, screenSizeThreshold) {
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= screenSizeThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSizeThreshold]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return [isVisible, toggleVisibility];
}

const AdminCategory = () => {
  
  const [isVisible, toggleVisibility] = useToggleOnScreenSize(true, 768);

  return (
    <>
      <Row className='container-fluid'>
        {isVisible && <Col xs={12} lg={3} md={4}><Sidebar /></Col>}
        <Col>
          <Row>
            <Col xs={'auto'}>
              <BsLayoutTextSidebarReverse onClick={toggleVisibility} size={40} className='m-2 text-warning' />
            </Col>
            <Col>
              <AdminHeader />
            </Col>
          </Row>
          <Breadcrumb />
          <Row className='px-3'>
            <Col className='my-3'>
              <AdminContentTab />
            </Col>
            
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AdminCategory;
