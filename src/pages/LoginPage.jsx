import React from 'react';

const LoginPage = () => {
    return (
        <main className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-4 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800 flex flex-col">
                    <div className="flex items-center space-x-2 mb-3 self-center">
                        <img src="/images/logo.svg" alt="로고" />
                        <p className="text-2xl font-semibold dark:text-white">PotatoMall</p>
                    </div>
                    <div className="mt-8  flex flex-col">
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
                                required=""
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
                                required=""
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-10 w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            로그인
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
