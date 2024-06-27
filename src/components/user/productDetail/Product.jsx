import React, { useEffect, useState } from 'react';
import { GoHeartFill } from 'react-icons/go';
import { userAndNoAuthApi, userApi } from '../../../hooks/useAxiosInterceptor';

const Product = ({ productId }) => {
    const [product, setProduct] = useState(); // 상품 정보

    useEffect(() => {
        (async () => {
            await fetchProduct();
        })();
    }, []);

    /**
     * 상품 정보 조회
     */
    const fetchProduct = async () => {
        try {
            const res = await userAndNoAuthApi.get(`/api/user/product/${productId}`);
            setProduct(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * 상품 좋아요 추가
     */
    const addProductLike = async (productId) => {
        try {
            const res = await userApi.post(`/api/user/product/${productId}/like`);
            setProduct((prevProduct) => ({
                ...prevProduct,
                isLike: true,
                likeCount: res.data.data.likeCount,
            }));
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * 상품 좋아요 삭제
     */
    const removeProductLike = async (productId) => {
        try {
            const res = await userApi.delete(`/api/user/product/${productId}/like`);
            setProduct((prevProduct) => ({
                ...prevProduct,
                isLike: false,
                likeCount: res.data.data.likeCount,
            }));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex flex-col md:flex-row items-center border p-5 w-full">
            <img
                className="hover:grow hover:shadow-lg transition-transform duration-300 ease-in-out md:self-start"
                src={product?.thumbnailUrl || '/images/no-img.png'}
                style={{ minWidth: '300px' }}
                alt="상품 이미지"
            />
            <div className="mt-5 md:mt-0 md:ml-10 text-left self-start md:self-center w-full">
                <div className="text-2xl font-bold mb-3">{product?.name}</div>
                <div
                    className="my-2"
                    dangerouslySetInnerHTML={{ __html: product?.description }}></div>
                <div className="flex items-center justify-between mt-2 mb-2">
                    <div className="text-xl text-gray-700">₩{product?.price.toLocaleString()}</div>
                    <div className="flex items-center">
                        <GoHeartFill
                            className={`w-5 h-5 cursor-pointer mr-2 ${
                                product?.isLike ? 'text-red-500' : 'text-gray-300'
                            }`}
                            onClick={() => {
                                product?.isLike
                                    ? removeProductLike(product?.productId)
                                    : addProductLike(product?.productId);
                            }}
                        />
                        <p className="text-gray-600">{product?.likeCount}</p>
                    </div>
                </div>
                <button className="border px-2 py-2 w-full bg-orange-400 text-black rounded-md border-white">
                    구매하기
                </button>
            </div>
        </div>
    );
};

export default Product;
