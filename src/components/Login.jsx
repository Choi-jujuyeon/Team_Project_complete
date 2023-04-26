import { useState } from "react";

function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameInput, setUsernameInput] = useState("");

    const InputChange = (e) => {
        setUsernameInput(e.target.value);
    };

    const UploadInputChange = (e) => {
        setUsername(usernameInput);
        setIsOpen(false);
    };

    return (
        <div>
            {/* 입력받은 username이 들어오도록 설정하기 ! */}
            <div className="ml-2 flex">
                <div className=" hover:bg-slate-200		 text-slate-500		 font-bold py-2 px-4 rounded-full">
                    {username}
                </div>

                <button
                    className="bg-zinc-400	 hover:bg-zinc-600	 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => setIsOpen(true)}
                >
                    Login
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-10 flex justify-center items-center">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <div
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </div>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={usernameInput}
                                onChange={InputChange}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() => setIsOpen(false)}
                            >
                                닫기
                            </button>
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={UploadInputChange}
                            >
                                입력
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;
