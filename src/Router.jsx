import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AdminLayout from './components/AdminLayout';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/product" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
