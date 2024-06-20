import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { api } from '../../hooks/useAxiosInterceptor';

const Header = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const [searchWord, setSearchWord] = useState(''); // 검색어
    const [isComposing, setIsComposing] = useState(false); // 컴포징을 위한 상태
    const [suggestions, setSuggestions] = useState([]); // 검색어 추천 목록

    /**
     * 검색 input focus 이벤트 처리
     */
    const handleSearchFocus = (flag) => {
        if (flag) {
            setShowSuggestions(true);
        } else {
            setTimeout(() => {
                setShowSuggestions(false);
            }, 100);
        }
    };

    /**
     * 검색
     */
    const search = () => {
        navigate(`/products?searchWord=${searchWord}`);
        setSearchWord('');
        setShowSuggestions(false);
        setSuggestions([]);
    };

    /**
     * 엔터키 입력 시 검색
     */
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (isComposing) {
                return;
            }
            search();
        }
    };

    /**
     * 검색어 추천 목록 조회
     */
    const handleSearch = async () => {
        if (!searchWord || !searchWord.trim()) {
            setSuggestions([]);
            return;
        }

        const res = await api.get(
            `/api/product/search-with-auto-complete?searchWord=${searchWord}`,
        );
        setSuggestions(res.data.data);
    };

    /**
     * 추천 검색어 클릭 시 검색
     */
    const handleSuggestion = (searchWord) => {
        navigate(`/products?searchWord=${searchWord}`);
        setSearchWord('');
        setShowSuggestions(false);
        setSuggestions([]);
    };

    return (
        <nav id="header" className="w-full z-30 top-0 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-5">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg
                        className="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div
                    className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
                    id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li>
                                <p
                                    className="inline-block no-underline hover:text-black hover:underline py-2 px-4 cursor-pointer"
                                    onClick={() => navigate('/products')}>
                                    Products
                                </p>
                            </li>
                            <li>
                                <p className="inline-block no-underline hover:text-black hover:underline py-2 px-4 cursor-pointer">
                                    MyPage
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="order-2 md:order-2">
                    <span
                        className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl cursor-pointer"
                        onClick={() => navigate('/')}>
                        <img src="/images/logo.svg" alt="logo" />
                        Potato Mall
                    </span>
                </div>

                {/* Desktop Search S */}
                <div className="order-3 w-1/2 hidden md:block relative">
                    <input
                        type="text"
                        placeholder="찾고 싶은 상품을 검색해보세요!"
                        className="border border-gray-300 rounded-md w-full focus:outline-none focus:border-gray-500 focus:shadow-none focus:ring-0"
                        onFocus={() => handleSearchFocus(true)}
                        onBlur={() => handleSearchFocus(false)}
                        onChange={(e) => setSearchWord(e.target.value)}
                        onKeyDown={handleEnter}
                        onKeyUp={handleSearch}
                        onCompositionStart={() => setIsComposing(true)}
                        onCompositionEnd={() => setIsComposing(false)}
                        value={searchWord}
                    />
                    <FaSearch
                        className="absolute right-0 top-0 mt-3 mr-3 cursor-pointer"
                        onClick={search}
                    />
                    {showSuggestions && (
                        <ul className="w-full absolute right-0 bg-white text-gray-500 border z-50 rounded-md">
                            {suggestions?.map((suggestion) => (
                                <li
                                    key={suggestion.name}
                                    className={'px-4 py-2 hover:bg-gray-100 cursor-pointer'}
                                    onClick={() => handleSuggestion(suggestion.name)}>
                                    {suggestion.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* Desktop Search E */}

                <div
                    className="order-2 md:order-3 flex items-center"
                    onClick={() => navigate('/login')}>
                    <FaUser className="cursor-pointer w-5 h-5" />
                </div>
            </div>

            {/* Mobile Search S */}
            <div className="order-2 md:hidden px-6 mb-5 relative">
                <input
                    type="text"
                    placeholder="찾고 싶은 상품을 검색해보세요!"
                    className="border border-gray-300 rounded-md w-full focus:outline-none focus:border-gray-500 focus:shadow-none focus:ring-0"
                    onFocus={() => handleSearchFocus(true)}
                    onBlur={() => handleSearchFocus(false)}
                    onChange={(e) => setSearchWord(e.target.value)}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                    onKeyDown={handleEnter}
                    onKeyUp={handleSearch}
                    value={searchWord}
                />
                <FaSearch
                    className="absolute right-6 top-0 mt-3 mr-3 cursor-pointer"
                    onClick={search}
                />
                {showSuggestions && (
                    <ul
                        className="absolute   bg-white text-gray-500 border z-50 rounded-md"
                        style={{ width: 'calc(100% - 3rem)' }}>
                        {suggestions?.map((suggestion) => (
                            <li
                                key={suggestion.name}
                                className={'px-4 py-2 hover:bg-gray-100 cursor-pointer'}
                                onClick={() => handleSuggestion(suggestion.name)}>
                                {suggestion.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Mobile Search E */}
        </nav>
    );
};

export default Header;
