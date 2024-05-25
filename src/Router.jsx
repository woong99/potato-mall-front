import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AdminLayout from './components/AdminLayout';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
