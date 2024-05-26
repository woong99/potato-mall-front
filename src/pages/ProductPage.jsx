import React, { useState } from 'react';
import { PencilSquareIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/16/solid';
import ProductModal from '../components/ProductModal';
import Breadcrumb from '../components/Breadcrumb';

const ProductPage = () => {
    const [isOpenProductModal, setIsOpenProductModal] = useState(false); // 상품 추가 모달 상태

    /**
     * 상품 추가 모달 열기
     */
    const openProductCreateModal = () => {
        setIsOpenProductModal(true);
    };

    /**
     * 상품 모달 닫기
     */
    const closeProductModal = () => {
        setIsOpenProductModal(false);
    };

    return (
        <main>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <Breadcrumb menuTitle="상품 관리" />
                    <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                        <div className="flex items-center mb-4 sm:mb-0">
                            <div className="sm:pr-3 flex">
                                <label htmlFor="products-search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                                    <input
                                        type="text"
                                        name="email"
                                        id="products-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="검색어를 입력해주세요."
                                    />
                                </div>
                                <button
                                    className="ms-2 mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-primary-800"
                                    type="button"
                                    onClick={openProductCreateModal}>
                                    검색
                                </button>
                            </div>
                        </div>
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-primary-800"
                            type="button"
                            onClick={openProductCreateModal}>
                            <div className="flex items-center">
                                <PlusCircleIcon className="w-4 h-4 mr-2 " />
                                상품 추가
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor="checkbox-all" className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            상품명
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            카테고리
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            설명
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            가격
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-{{ .id }}"
                                                    type="checkbox"
                                                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label
                                                    htmlFor="checkbox-{{ .id }}"
                                                    className="sr-only">
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <div className="text-base font-semibold text-gray-900 dark:text-white">
                                                Education Dashboard
                                            </div>
                                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Html templates
                                            </div>
                                        </td>
                                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Angular
                                        </td>
                                        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                            Start developing with an open-source library of over
                                            450+ UI components, sections, and pages built with the
                                            utility classes from Tailwind CSS and designed in Figma.
                                        </td>
                                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            #194556
                                        </td>
                                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            $149
                                        </td>

                                        <td className="p-4 space-x-2 whitespace-nowrap">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                                                <PencilSquareIcon className="w-4 h-4 mr-2" />
                                                수정
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                                <TrashIcon className="w-4 h-4 mr-2" />
                                                삭제
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center mb-4 sm:mb-0">
                    <a
                        href="#"
                        className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </a>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">1-20</span> of{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">2290</span>
                    </span>
                </div>
            </div>

            <div
                id="drawer-delete-product-default"
                className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white dark:bg-gray-800"
                tabIndex="-1"
                aria-labelledby="drawer-label"
                aria-hidden="true">
                <h5
                    id="drawer-label"
                    className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Delete item
                </h5>
                <button
                    type="button"
                    data-drawer-dismiss="drawer-delete-product-default"
                    aria-controls="drawer-delete-product-default"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <svg
                    className="w-10 h-10 mt-8 mb-4 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="mb-6 text-lg text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                </h3>
                <a
                    href="#"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-900">
                    Yes, I'm sure
                </a>
                <a
                    href="#"
                    className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    data-drawer-hide="drawer-delete-product-default">
                    No, cancel
                </a>
            </div>

            {/* 상품 추가 모달 S */}
            <ProductModal
                isOpenProductModal={isOpenProductModal}
                closeProductModal={closeProductModal}
            />
            {isOpenProductModal && (
                <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div>
            )}
            {/* 상품 추가 모달 E */}
        </main>
    );
};

export default ProductPage;
