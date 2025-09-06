import { createPortal } from 'react-dom'

function FromPopUp({ isOpen, setIsOpen }) {
    return (
        createPortal(
            <>
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 flex items-center justify-center w-full h-full"
                        style={{ backgroundColor: "rgba(46,139,87,0.3)" }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-lg p-6 mx-auto mt-10 bg-white shadow-lg rounded-2xl"
                        >
                            <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
                                Sign In
                            </h1>

                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block mb-1 text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter your username"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block mb-1 text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-1 text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Re-enter your password"
                                />
                            </div>

                            <div className="flex justify-center space-x-4">
                                <button
                                    type="submit"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 font-semibold text-white transition duration-300 bg-green-700 rounded-lg hover:bg-green-800"
                                >
                                    Sign In
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 font-semibold text-green-900 transition duration-300 bg-green-200 rounded-lg hover:bg-green-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>,
            document.getElementById('portal')
        )
    );
}

export default FromPopUp;
