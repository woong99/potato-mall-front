import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../store/slice/authSlice';

const OAuth2LoginSuccessPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const accessToken = searchParams.get('accessToken');
        dispatch(setAccessToken(accessToken));
        navigate('/');
    }, []);
    return <div></div>;
};

export default OAuth2LoginSuccessPage;
