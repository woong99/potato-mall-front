import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserAccessToken } from '../store/slice/authSlice';
import { Navigate, Outlet } from 'react-router-dom';

const UserNoAuthRoute = () => {
    const accessToken = useSelector((state) => state.auth.userAccessToken);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await checkISAuthenticated();
        })();
    }, []);

    /**
     * 로그인 여부 확인
     */
    const checkISAuthenticated = async () => {
        if (accessToken) {
            setIsAuthenticated(true);
        } else {
            try {
                const res = await axios.post(
                    // TODO : Access Token 재발급 URL 변경
                    `${process.env.REACT_APP_API_URL}/api/admin/refresh`,
                    {},
                    { withCredentials: true },
                );
                dispatch(setUserAccessToken(res.data.data.token));
                setIsAuthenticated(true);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default UserNoAuthRoute;
