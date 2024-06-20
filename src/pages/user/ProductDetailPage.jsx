import React from 'react';
import { GoHeartFill } from 'react-icons/go';
import { FaStar } from 'react-icons/fa6';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';

const ProductDetailPage = () => {
    return (
        <section className="bg-white py-4">
            <div className="container mx-auto flex flex-col items-center flex-wrap pb-12 px-6">
                <div className="flex flex-col items-center w-full md:w-3/5">
                    <div className="flex flex-col md:flex-row items-center border p-5 w-full">
                        <img
                            className="hover:grow hover:shadow-lg transition-transform duration-300 ease-in-out md:self-start"
                            src={'/images/no-img.png'}
                            style={{ minWidth: '300px' }}
                            alt="상품 이미지"
                        />
                        <div className="mt-5 md:mt-0 md:ml-10 text-left self-start md:self-center w-full">
                            <div className="flex justify-between">
                                <div className="text-2xl font-bold mb-2">왕감자</div>
                                <div className="text-xl text-gray-700 mb-2">₩10,000</div>
                            </div>
                            <div className="my-2">이것은 왕감자입니다. 아주 맛있습니다.</div>
                            <div className="flex mt-5 float-right">
                                <GoHeartFill className="w-5 h-5 text-red-500 cursor-pointer mr-2" />
                                <p className="text-gray-600 mb-4">좋아요 100개</p>
                            </div>
                            <button className="border px-2 py-2 w-full bg-orange-400 text-black rounded-md border-white">
                                구매하기
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col border p-5 w-full mt-6">
                        <h1 className="text-xl font-bold mb-4">리뷰</h1>
                        <div className="bg-gray-100 flex justify-around rounded py-2">
                            <div className="flex flex-col items-center">
                                <p className="pt-3 font-black text-sm">사용자 총 평점</p>
                                <div className="flex items-center text-center mt-2">
                                    <FaStar className="text-3xl text-red-500" />
                                    <FaStar className="text-3xl text-red-500" />
                                    <FaStar className="text-3xl text-red-500" />
                                    <FaStar className="text-3xl text-red-500" />
                                    <FaStar className="text-3xl text-gray-300" />
                                </div>
                                <div className="mt-3 text-3xl font-bold">
                                    <p>
                                        4.92 <span className="text-gray-300">/ 5</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="pt-3 font-black text-sm">전체 리뷰수</p>
                                <div className="flex flex-col items-center text-center mt-2">
                                    <HiChatBubbleBottomCenterText className="text-3xl text-gray-300" />
                                    <p className="mt-3 text-3xl font-bold">254</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-content mt-4">
                            <div className="border-b py-3">
                                <div className="flex items-center text-center">
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-gray-300" />
                                    <p
                                        className="font-bold text-lg ml-1"
                                        style={{ lineHeight: '15px' }}>
                                        4
                                    </p>
                                </div>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <p className="border-r pr-2">potato*****</p>
                                    <p className="pl-2">24.06.20</p>
                                </div>
                                <p className="text-gray-700 mt-5">
                                    이 제품은 정말 좋습니다! 품질이 우수하고 가격도 적당합니다.
                                </p>
                            </div>
                            <div className="mt-5">
                                <div className="flex items-center text-center">
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-red-500" />
                                    <FaStar className="text-gray-300" />
                                    <FaStar className="text-gray-300" />
                                    <p
                                        className="font-bold text-lg ml-1"
                                        style={{ lineHeight: '15px' }}>
                                        3
                                    </p>
                                </div>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <p className="border-r pr-2">potato*****</p>
                                    <p className="pl-2">24.06.20</p>
                                </div>
                                <p className="text-gray-700 mt-5">맛있어요!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;
