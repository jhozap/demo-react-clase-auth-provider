import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../components/login/LoginPage';
import ContentRoutes from './ContentRoutes';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />

                <Route path="/*" element={
                    <PrivateRoute>
                        <ContentRoutes />
                    </PrivateRoute>
                } />

                <Route path="/*" element={<ContentRoutes />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
