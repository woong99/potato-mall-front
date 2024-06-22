import React, { useRef, useState } from 'react';

const SignUpPage = () => {
    const inputsRef = useRef({}); // input 요소 ref
    const [isCheckDuplicateId, setIsCheckDuplicateId] = useState(false); // 아이디 중복 확인 여부
    const [isAllValid, setIsAllValid] = useState(false); // 모든 입력값이 유효한지 여부

    // 회원가입 폼 데이터
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
    });

    return (
        <main className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full px-4 py-8 mx-auto sm:max-w-md md:h-screen pt-8 md:pt-0">
                <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow flex flex-col">
                    <div className="flex items-center space-x-2 mb-3 self-center">
                        <img src="/images/logo.svg" alt="로고" />
                        <p className="text-2xl font-semibold">PotatoMall</p>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                아이디
                            </label>
                            <div className="flex">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="아이디를 입력해주세요."
                                    value={formData.userId}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            userId: e.target.value,
                                        })
                                    }
                                    ref={(el) => (inputsRef.current['userId'] = el)}
                                />
                                <button
                                    type="button"
                                    // onClick={checkDuplicateId}
                                    className="whitespace-nowrap ml-2 px-4 text-sm text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-400 sm:w-auto">
                                    중복 확인
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                비밀번호
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                                ref={(el) => (inputsRef.current['password'] = el)}
                            />
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                비밀번호 확인
                            </label>
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                value={formData.passwordConfirm}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        passwordConfirm: e.target.value,
                                    })
                                }
                                ref={(el) => (inputsRef.current['passwordConfirm'] = el)}
                            />
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="nickname"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                닉네임
                            </label>
                            <input
                                type="text"
                                name="nickname"
                                id="nickname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="닉네임을 입력해주세요."
                                value={formData.nickname}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nickname: e.target.value,
                                    })
                                }
                                ref={(el) => (inputsRef.current['nickname'] = el)}
                            />
                        </div>
                        <button
                            type="button"
                            // onClick={register}
                            className={`mt-10 w-full px-5 py-3 text-base font-medium text-center text-white bg-orange-300 rounded-lg ${
                                isAllValid
                                    ? 'hover:bg-orange-400 cursor-pointer'
                                    : 'cursor-not-allowed'
                            } focus:ring-4 focus:ring-blue-300 sm:w-auto`}>
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;
