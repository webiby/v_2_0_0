import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainHeader from '../Sections/MainHeader';
import MainHome from './MainPages/MainHome';
import MainAbout from './MainPages/MainAbout';
import MainProducts from './MainPages/MainProducts';
import MainServices from './MainPages/MainServices';
import MainContact from './MainPages/MainContact';

import Header from '../Sections/PublicSections/Header';
import HomePage from './PublicPages/HomePage';
import AboutPage from './PublicPages/AboutPage';
import ProductsPage from './PublicPages/ProductsPage';
import ServicesPage from './PublicPages/ServicesPage';
import ContactPages from './PublicPages/ContactPages';

import AdminPageHeader from './AdminPages/AdminPageHeader';
import AdminWelcome from './AdminPages/AdminWelcome';

import ProductDetail from './PublicPages/ProductDetail';
import ServiceDetail from './PublicPages/ServiceDetail';

import Error404 from './ErrorPages/Error404';
import Login from './AuthPages/Login';
import Registration from './AuthPages/Registration';


export default function AllRoutes() {
    const [websites, setWebsites] = useState([]);
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        const fetchData = async (endpoint, setData) => {
            try {
                const response = await fetch(`http://localhost:3000/api/table/${endpoint}/all`);
                const data = await response.json();
                if (data && data.length > 0) {
                setData(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        Promise.all([
            // fetchData(Database-Name / endpoint, setData)
            fetchData('webiby_keys', setWebsites),
            fetchData('website_products', setProducts),
            fetchData('website_services', setServices),
            fetchData('users', setUsers),
        ]).then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                {loading && <h1>Loading...</h1>}
            </div>
        );
    }

    const renderWebsiteRoutes = () => {
        if (websites.length === 0) {
        return <Route element={<div>No website data available.</div>} />;
        }
    
        return websites.map((website) => (
        <Route key={website.id} path={`/${website.website_name}/${website.id}`} element={<Header website={website} />}>
            <Route index element={<HomePage website={website} />} />
            <Route path="about" element={<AboutPage website={website} />} />
            <Route path="products" element={<ProductsPage website={website} />} />
            <Route path="services" element={<ServicesPage website={website} />} />
            <Route path="contact" element={<ContactPages website={website} />} />
        </Route>
        ));
    };

    const renderProductRoutes = () => {
        if (products.length === 0) {
            return <Route element={<div>No product data available.</div>} />;
        }

        return products.map((product) => (
            <Route key={product.id} path={`/${product.product_name}/${product.id}`} element={<Header product={product} />}>
                <Route index element={<ProductDetail />} />
            </Route>
        ));
    };

    const renderServiceRoutes = () => {
        if (services.length === 0) {
            return <Route element={<div>No service data available.</div>} />;
        }

        return services.map((service) => (
            <Route key={service.id} path={`/${service.service_name}/${service.id}`} element={<Header service={service} />}>
                <Route index element={<ServiceDetail />} />
            </Route>
        ));
    };

    // Add authentication logic here, e.g., check if the user is authenticated
    // You might use cookies, JWT tokens, or another authentication method
    const handleLogin = () => {
        // Implement your login logic and set the authenticated state to true
        console.log('User logged in successfully');
        setAuthenticated(true);
    };
    const handleLogout = () => {
        // Implement your logout logic and set the authenticated state to false
        console.log('User logged out successfully');
        setAuthenticated(false);
    };

    const renderAdminRoutes = () => {
        if (users.length === 0) {
            return <Route element={<div>No admin data available.</div>} />;
        }
        return users.map((user) => (
            <Route key={user.id} path={`/admin/dashboard/${user.id}`} element={ authenticated ? (<AdminPageHeader user={user} handleLogin={handleLogin} />) : (<Navigate to="/login" />) }>
                <Route index element={<AdminWelcome user={user} />} />
                {/* <Route path="about" element={<AboutPage website={website} />} />
                <Route path="products" element={<ProductsPage website={website} />} />
                <Route path="services" element={<ServicesPage website={website} />} />
                <Route path="contact" element={<ContactPages website={website} />} /> */}
            </Route>
        ));
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<MainHome />} />
          <Route path="about" element={<MainAbout />} />
          <Route path="products" element={<MainProducts />} />
          <Route path="services" element={<MainServices />} />
          <Route path="contact" element={<MainContact />} />
        </Route>
        {renderWebsiteRoutes()}
        {renderProductRoutes()}
        {renderServiceRoutes()}
        {renderAdminRoutes()}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<Error404 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

