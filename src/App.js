// Main App component - Enhanced routing
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RouteLayout from './components/RouteLayout';
import Home from './screens/Home';
import About from './screens/About';
import NotFound from './screens/NotFound';
import Services from './screens/Services';
import ContactUs from './screens/ContactUs';
import Product from './screens/Product';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="Product" element={<Product/>} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
