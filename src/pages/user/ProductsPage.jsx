import React, { useEffect, useState } from 'react';
import { GoHeartFill } from 'react-icons/go';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { api, userAndNoAuthApi, userApi } from '../../hooks/useAxiosInterceptor';
import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const ProductsPage = () => {
    const [searchWord, setSearchWord] = useState(''); // 검색어
    const [productList, setProductList] = useState([]); // 상품 목록
    const [totalElements, setTotalElements] = useState(0); // 총 상품 수
    const [isMobile, setIsMobile] = useState(false); // 모바일 여부
    const [sortCondition, setSortCondition] = useState(''); // 정렬 조건
    const [nowPage, setNowPage] = useState(1); // 현재 페이지
    const [relatedTerms, setRelatedTerms] = useState([]); // 연관 검색어 목록
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // 모바일 여부 확인
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        (async () => {
            const page = searchParams.get('page') || '';
            const nowSearchWord = searchParams.get('searchWord') || '';
            const nowSortCondition = searchParams.get('sortCondition') || '';
            setSearchWord(nowSearchWord);
            setSortCondition(nowSortCondition);
            setNowPage(page === '' ? 1 : Number(page));

            await fetchProductList(page, nowSearchWord, nowSortCondition);

            await fetchRelatedTerms(nowSearchWord);
        })();
    }, [location]);

    /**
     * 상품 목록 조회
     */
    const fetchProductList = async (page, searchWord, sortCondition) => {
        try {
            let url = `/api/user/product/search?size=8`;
            if (page) {
                url += `&page=${page - 1}`;
            }

            if (searchWord) {
                url += `&searchWord=${searchWord}`;
            }

            if (sortCondition) {
                url += `&sortCondition=${sortCondition}`;
            }

            const res = await userAndNoAuthApi.get(url);
            setProductList(res.data.data.result);
            const totalElementsData = res.data.data.totalElements;
            setTotalElements(totalElementsData);
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * 연관 검색어 조회
     */
    const fetchRelatedTerms = async (searchWord) => {
        if (!searchWord) {
            return;
        }
        const res = await api.get(
            '/api/user/product/search-with-auto-complete?searchWord=' + searchWord,
        );
        setRelatedTerms(res.data.data.filter((d) => d.name !== searchWord));
    };

    /**
     * 페이지 변경
     */
    const handleChangePage = (page) => {
        let url = `/products?page=${page.selected + 1}`;
        if (searchWord) {
            url += `&searchWord=${searchWord}`;
        }

        if (sortCondition) {
            url += `&sortCondition=${sortCondition}`;
        }
        navigate(url);
    };

    /**
     * 정렬
     */
    const handleSort = (flag) => {
        let url = `/products`;

        if (sortCondition) {
            if (searchWord) {
                url += `?searchWord=${searchWord}`;
            }
            navigate(url);
            return;
        }

        if (flag === 'lowPrice') {
            url += `?sortCondition=lowPrice`;
        } else if (flag === 'highPrice') {
            url += `?sortCondition=highPrice`;
        } else if (flag === 'latest') {
            url += `?sortCondition=latest`;
        } else {
            // TODO : 판매량순 추가
        }

        if (searchWord) {
            url += `&searchWord=${searchWord}`;
        }
        navigate(url);
    };

    /**
     * 상품 좋아요 추가
     */
    const addProductLike = async (productId) => {
        try {
            const res = await userApi.post(`/api/user/product/${productId}/like`);
            setProductList((prevProduct) =>
                prevProduct.map((product) =>
                    product.productId === productId
                        ? {
                              ...product,
                              isLike: true,
                              likeCount: res.data.data.likeCount,
                          }
                        : product,
                ),
            );
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
            setProductList((prevProduct) =>
                prevProduct.map((product) =>
                    product.productId === productId
                        ? {
                              ...product,
                              isLike: false,
                              likeCount: res.data.data.likeCount,
                          }
                        : product,
                ),
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="bg-white py-4">
            <div className="container mx-auto flex items-center flex-wrap pb-12">
                {searchWord && (
                    <div className="px-6">
                        <p className="text-2xl">
                            <span className="font-bold">'{searchWord}'</span>에 대한 검색 결과
                        </p>
                        <p className="text-lg mt-3">
                            총 <span className="font-bold">{totalElements}건</span>의 결과가
                            존재합니다.
                        </p>
                        {totalElements > 0 && productList.length > 0 && (
                            <div
                                className="text-sm w-full flex mt-4"
                                style={{ maxWidth: 'calc(100vw - 3rem)' }}>
                                {relatedTerms.length > 0 && (
                                    <>
                                        <p className="whitespace-nowrap pr-2">연관검색어 : </p>
                                        <div className="text-blue-500 cursor-pointer overflow-x-auto whitespace-nowrap no-scrollbar w-full">
                                            {relatedTerms.map((term) => (
                                                <span
                                                    className="ml-2"
                                                    key={term.name}
                                                    onClick={() =>
                                                        navigate(
                                                            `/products?searchWord=${term.name}`,
                                                        )
                                                    }>
                                                    {term.name}
                                                </span>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/*<div className="text-lg mt-4">*/}
                        {/*    <p className="">*/}
                        {/*        <span className="text-blue-500 cursor-pointer font-bold">감자</span>로*/}
                        {/*        검색하시겠습니까?*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                )}
                {totalElements > 0 && productList.length > 0 && (
                    <nav className={`w-full z-30 top-0 px-6 py-1 ${searchWord && 'mt-4'}`}>
                        <div className="container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3 bg-gray-100 rounded-sm">
                            <div className="flex items-center ml-2 gap-1 md:gap-3 justify-between w-full sm:w-auto">
                                <button
                                    className={`border px-2 py-1 rounded-3xl text-sm ${
                                        sortCondition === 'lowPrice'
                                            ? 'border-blue-500 text-blue-500'
                                            : 'border-gray-400'
                                    }`}
                                    onClick={() => handleSort('lowPrice')}>
                                    낮은가격순
                                </button>
                                <button
                                    className={`border px-2 py-1 rounded-3xl text-sm ${
                                        sortCondition === 'highPrice'
                                            ? 'border-blue-500 text-blue-500'
                                            : 'border-gray-400'
                                    }`}
                                    onClick={() => handleSort('highPrice')}>
                                    높은가격순
                                </button>
                                <button className="border border-gray-400 px-2 py-1 rounded-3xl text-sm">
                                    {/* TODO : 판매량순 추가 */}
                                    판매량순
                                </button>
                                <button
                                    className={`border px-2 py-1 rounded-3xl text-sm ${
                                        sortCondition === 'latest'
                                            ? 'border-blue-500 text-blue-500'
                                            : 'border-gray-400'
                                    }`}
                                    onClick={() => handleSort('latest')}>
                                    최신순
                                </button>
                            </div>
                        </div>
                    </nav>
                )}

                {productList.length > 0 ? (
                    productList.map((product) => (
                        <div
                            className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
                            key={product.productId}>
                            <div>
                                <img
                                    className="hover:grow hover:shadow-lg cursor-pointer"
                                    src={product.thumbnailUrl || '/images/no-img.png'}
                                    style={{ minWidth: '300px' }}
                                    onClick={() => navigate(`/product/${product.productId}`)}
                                    alt="상품 이미지"
                                />
                                <div className="pt-3 flex items-center justify-between">
                                    <p className="">{product.name}</p>
                                    <div className="flex items-center">
                                        <GoHeartFill
                                            className={`w-5 h-5 cursor-pointer ${
                                                product.isLike ? 'text-red-500' : 'text-gray-300'
                                            }`}
                                            onClick={() =>
                                                product.isLike
                                                    ? removeProductLike(product.productId)
                                                    : addProductLike(product.productId)
                                            }
                                        />
                                        <span className="ml-1">{product.likeCount}</span>
                                    </div>
                                </div>
                                <p className="pt-1 text-gray-900">
                                    ₩{product.price.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full p-6 border h-64 flex flex-col justify-center items-center mt-5 text-gray-500 font-semibold mx-2">
                        <p>판매중인 상품이 없습니다.</p>
                        <p>검색어를 변경해보세요.</p>
                    </div>
                )}
            </div>
            {totalElements > 0 && productList.length > 0 && (
                <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <ReactPaginate
                        previousLabel={<ChevronLeftIcon className="w-5 h-5" />}
                        previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        nextLabel={<ChevronRightIcon className="w-5 h-5" />}
                        nextClassName="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        activeClassName="bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-indigo-600"
                        pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        breakClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                        pageCount={totalElements / 8}
                        pageRangeDisplayed={isMobile ? 1 : 5}
                        marginPagesDisplayed={1}
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        onPageChange={(page) => {
                            handleChangePage(page);
                        }}
                        forcePage={nowPage - 1}
                    />
                </div>
            )}
        </section>
    );
};

export default ProductsPage;
