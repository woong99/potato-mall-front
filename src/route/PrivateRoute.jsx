import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setAccessToken } from '../store/slice/authSlice';
import axios from 'axios';

const PrivateRoute = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (accessToken) {
                setIsAuthenticated(true);
                setIsLoading(false);
            } else {
                try {
                    const res = await axios.post(
                        'http://localhost:8080/api/admin/refresh',
                        {},
                        { withCredentials: true },
                    );
                    dispatch(setAccessToken(res.data.data.token));
                    setIsAuthenticated(true);
                    setIsLoading(false);
                } catch (error) {
                    // TODO : 추가 예외 처리
                    if (error.response.status === 401) {
                        navigate('/login');
                    }
                }
            }
        })();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // TODO : 로딩 스피너 추가
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
