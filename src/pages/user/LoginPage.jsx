import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    /**
     * SNS 로그인
     */
    const snsLogin = (provider) => {
        let url = '';
        if (provider === 'NAVER') {
            url = `${process.env.REACT_APP_API_URL}/oauth2/authorization/naver`;
        } else if (provider === 'KAKAO') {
            url = `${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`;
        } else if (provider === 'GOOGLE') {
            url = `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`;
        }
        window.location.href = url;
    };
    return (
        <main className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full px-4 py-8 mx-auto sm:max-w-md md:h-screen pt-8 md:pt-0 dark:bg-gray-900">
                <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800 flex flex-col">
                    <div className="flex items-center space-x-2 mb-3 self-center">
                        <img src="/images/logo.svg" alt="로고" />
                        <p className="text-2xl font-semibold dark:text-white">PotatoMall</p>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                아이디
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="아이디를 입력해주세요."
                                // value={id}
                                // onChange={(e) => {
                                //     setId(e.target.value);
                                // }}
                            />
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                비밀번호
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                // value={password}
                                // onChange={(e) => {
                                //     setPassword(e.target.value);
                                // }}
                            />
                        </div>
                        <button
                            type="button"
                            // onClick={login}
                            className="mt-10 w-full px-5 py-3 text-base font-medium text-center text-white bg-orange-300 rounded-lg hover:bg-orange-400 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            로그인
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/sign-up')}
                            className="mt-3 w-full px-5 py-3 text-base font-medium text-center text-white bg-orange-300 rounded-lg hover:bg-orange-400 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            회원가입
                        </button>
                        <div className="flex justify-around mt-6">
                            <img
                                src="/images/naver-login.png"
                                alt="네이버 로그인"
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => snsLogin('NAVER')}
                            />
                            <img
                                src="/images/kakao-login.webp"
                                alt="카카오 로그인"
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => snsLogin('KAKAO')}
                            />
                            <img
                                src="/images/google-login.svg"
                                alt="구글 로그인"
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => snsLogin('GOOGLE')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
