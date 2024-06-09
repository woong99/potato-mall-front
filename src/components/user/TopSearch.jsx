import React from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { BsDash } from 'react-icons/bs';

const TopSearch = () => {
    return (
        <div className="bg-white p-4 flex-1 md:w-1/2 md:ml-2">
            <div className="flex justify-between mb-2">
                <h2 className="text-xl font-bold">가장 많이 검색하고 있어요</h2>
                <p className="self-end ml-2 text-gray-400 text-sm">06.08 23:00 기준</p>
            </div>
            <ol
                className="list-inside bg-gray-100 flex flex-col justify-around pl-3"
                style={{ height: 'calc(500px + 2rem)' }}>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl mr-2 font-bold w-4">1</span>
                        <p>검색어 1</p>
                    </div>
                    <GoTriangleUp className="text-red-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl mr-2 font-bold w-4">2</span>
                        <p>검색어 2</p>
                    </div>
                    <GoTriangleDown className="text-blue-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl mr-2 font-bold w-4">3</span>
                        <p>검색어 3</p>
                    </div>
                    <GoTriangleUp className="text-red-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">4</span>
                        <p>검색어 4</p>
                    </div>
                    <GoTriangleUp className="text-red-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">5</span>
                        <p>검색어 5</p>
                    </div>
                    <GoTriangleDown className="text-blue-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">6</span>
                        <p>검색어 6</p>
                    </div>
                    <span className="mr-3 font-bold">New</span>
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">7</span>
                        <p>검색어 7</p>
                    </div>
                    <GoTriangleUp className="text-red-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">8</span>
                        <p>검색어 8</p>
                    </div>
                    <BsDash className="w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">9</span>
                        <p>검색어 9</p>
                    </div>
                    <GoTriangleDown className="text-blue-600 w-8 h-8 mr-3" />
                </li>
                <li className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2 font-bold w-4">10</span>
                        <p>검색어 10</p>
                    </div>
                    <GoTriangleUp className="text-red-600 w-8 h-8 mr-3" />
                </li>
            </ol>
        </div>
    );
};

export default TopSearch;
