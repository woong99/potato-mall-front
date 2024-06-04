import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setAccessToken } from '../store/slice/authSlice';
import axios from 'axios';

const NoAuthRoute = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (!accessToken) {
                try {
                    const res = await axios.get('http://localhost:8080/api/admin/refresh', {
                        withCredentials: 'true',
                    });
                    dispatch(setAccessToken(res.data.data.token));
                    setIsAuthenticated(true);
                } catch (error) {
                    // TODO : 추가 예외 처리
                    if (error.response.status === 401) {
                        setIsAuthenticated(false);
                    }
                }
            }
        })();
    }, []);

    return isAuthenticated ? <Navigate to="/auth" /> : <Outlet />;
};

export default NoAuthRoute;
