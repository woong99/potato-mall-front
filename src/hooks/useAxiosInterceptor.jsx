import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

const useAxiosInterceptor = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);

    const requestHandler = (config) => {
        config.headers = {
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
        };
        return config;
    };

    const responseHandler = (response) => {
        console.log(response);
        return response;
    };

    const responseErrorHandler = async (error) => {
        // TODO : 추가 예외 처리
        if (error.response.status === 401) {
            window.location.href = '/login';
        } else {
            await Swal.fire({ icon: 'error', text: error.response.data.message });
        }
        return Promise.reject(error);
    };

    const requestInterceptor = api.interceptors.request.use(requestHandler);
    const responseInterceptor = api.interceptors.response.use(
        (response) => responseHandler(response),
        (error) => responseErrorHandler(error),
    );

    useEffect(() => {
        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [requestInterceptor]);
};

export { useAxiosInterceptor, api };
