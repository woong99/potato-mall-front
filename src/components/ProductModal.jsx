import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

const ProductModal = ({ isOpenProductModal, closeProductModal }) => {
    const toolbar = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr'],
        ['ul', 'ol'],
        ['link', 'image'],
    ]
    return (
        <div
            className={`fixed top-0 right-0 z-40 w-full h-screen max-w-3xl p-4 overflow-y-auto transition-transform ${
                isOpenProductModal ? 'transform-none' : 'translate-x-full'
            } bg-white dark:bg-gray-800`}>
            <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                상품 등록
            </h5>
            <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeProductModal}>
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close menu</span>
            </button>
            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        상품명 *
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="상품명을 입력해주세요."
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        가격 *
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="₩10,000"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="category-create"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        카테고리 *
                    </label>
                    <select
                        id="category-create"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected="">카테고리를 선택해주세요.</option>
                        <option value="FL">Flowbite</option>
                        <option value="RE">React</option>
                        <option value="AN">Angular</option>
                        <option value="VU">Vue</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        상품설명 *
                    </label>
                    <Editor
                        initialEditType="wysiwyg"
                        toolbarItems={toolbar}
                        hideModeSwitch
                        theme="dark"
                    />
                </div>
                <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
                    <button
                        type="submit"
                        className="text-white w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                        등록
                    </button>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        onClick={closeProductModal}>
                        <XMarkIcon className="w-5 h-5 -ml-1 sm:mr-1" />
                        취소
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal
