import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api, userApi } from '../../hooks/useAxiosInterceptor';
import Swal from 'sweetalert2';

const PaySuccessPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const requestData = {
            orderId: searchParams.get('orderId'),
            amount: searchParams.get('amount'),
            paymentKey: searchParams.get('paymentKey'),
        };

        (async () => {
            try {
                await api.post('/api/user/pay/verify-payment', requestData);
                await userApi.post('/api/user/pay/confirm', requestData);
                await Swal.fire('결제 성공', '결제가 성공적으로 완료되었습니다.', 'success');
                // TODO : 장바구니 개수 최신화
                navigate('/'); // TODO : 결제 완료 페이지로 이동
            } catch (error) {
                await Swal.fire('결제 실패', '결제에 실패했습니다. 다시 시도해주세요.', 'error');
                navigate('/');
            }
        })();
    }, []);

    return <div></div>;
};

export default PaySuccessPage;
