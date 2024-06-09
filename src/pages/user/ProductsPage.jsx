import React from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const ProductsPage = () => {
    return (
        <section className="bg-white py-4">
            <div className="container mx-auto flex items-center flex-wrap pb-12">
                <div className="px-6">
                    <p className="text-2xl">
                        <span className="font-bold">'감자'</span>에 대한 검색 결과
                    </p>
                    <p className="text-lg mt-3">
                        총 <span className="font-bold">6건</span>의 결과가 존재합니다.
                    </p>
                    <div
                        className="text-sm w-full flex mt-4"
                        style={{ maxWidth: 'calc(100vw - 3rem)' }}>
                        <p className="whitespace-nowrap pr-2">연관검색어 : </p>
                        <div className="text-blue-500 cursor-pointer overflow-x-auto whitespace-nowrap no-scrollbar w-full">
                            <span className="ml-2">왕감자</span>
                            <span className="ml-2">대왕감자</span>
                            <span className="ml-2">회오리감자</span>
                            <span className="ml-2">와사비감자</span>
                            <span className="ml-2">슈퍼감자</span>
                            <span className="ml-2">대홍단감자</span>
                            <span className="ml-2">대홍단감자</span>
                            <span className="ml-2">대홍단감자</span>
                            <span className="ml-2">대홍단감자</span>
                            <span className="ml-2">대홍단감자</span>
                            <span className="ml-2">대홍단감자</span>
                        </div>
                    </div>
                    {/*<div className="text-lg mt-4">*/}
                    {/*    <p className="">*/}
                    {/*        <span className="text-blue-500 cursor-pointer font-bold">감자</span>로*/}
                    {/*        검색하시겠습니까?*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>
                <nav className="w-full z-30 top-0 px-6 py-1 mt-4">
                    <div className="container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3 bg-gray-100 rounded-sm">
                        <div className="flex items-center ml-2 gap-1 md:gap-3 justify-between w-full sm:w-auto">
                            <button className="border border-blue-500 text-blue-500 px-2 py-1 rounded-3xl text-sm">
                                낮은가격순
                            </button>
                            <button className="border border-gray-400 px-2 py-1 rounded-3xl text-sm">
                                높은가격순
                            </button>
                            <button className="border border-gray-400 px-2 py-1 rounded-3xl text-sm">
                                판매량순
                            </button>
                            <button className="border border-gray-400 px-2 py-1 rounded-3xl text-sm">
                                최신순
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg cursor-pointer"
                            src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeartFill className="w-5 h-5 text-red-600 cursor-pointer" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                    <div>
                        <img
                            className="hover:grow hover:shadow-lg"
                            src="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
                            alt="상품 이미지"
                        />
                        <div className="pt-3 flex items-center justify-between">
                            <p className="">Product Name</p>
                            <GoHeart className="w-5 h-5" />
                        </div>
                        <p className="pt-1 text-gray-900">£9.99</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
