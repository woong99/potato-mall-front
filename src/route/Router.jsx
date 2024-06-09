import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/admin/ProductPage';
import AdminLayout from '../components/admin/AdminLayout';
import CategoryPage from '../pages/admin/CategoryPage';
import LoginPage from '../pages/admin/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import AuthPage from '../pages/admin/AuthPage';
import PrivateRoute from './PrivateRoute';
import NoAuthRoute from './NoAuthRoute';
import MainPage from '../pages/user/MainPage';
import UserLayout from '../components/user/UserLayout';
import ProductsPage from '../pages/user/ProductsPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route path="/admin/product" element={<ProductPage />} />
                        <Route path="/admin/category" element={<CategoryPage />} />
                        <Route path="/admin/auth" element={<AuthPage />} />
                    </Route>
                </Route>
                <Route element={<NoAuthRoute />}>
                    <Route path="/admin/login" element={<LoginPage />} />
                </Route>
                <Route element={<UserLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
