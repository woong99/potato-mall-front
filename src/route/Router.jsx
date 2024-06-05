import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import AdminLayout from '../components/AdminLayout';
import CategoryPage from '../pages/CategoryPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import AuthPage from '../pages/AuthPage';
import PrivateRoute from './PrivateRoute';
import NoAuthRoute from './NoAuthRoute';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/category" element={<CategoryPage />} />
                        <Route path="/auth" element={<AuthPage />} />
                    </Route>
                </Route>
                <Route element={<NoAuthRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;