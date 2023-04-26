import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";

const Header2 = ({ isNight, setIsNight }) => {
    const [detail, setDetail] = useState(false);
    const [detail2, setDetail2] = useState(false);
    const [days, setDays] = useState(0);

    useEffect(() => {
        const targetDate = new Date("2023-04-27");
        const intervalId = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            setDays(diffInDays);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const ChangeNight = () => setIsNight(!isNight);

    return (
        <div>
            <header className="max-w-screen pt-10 flex items-center justify-between font-bold">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logo.png `}
                            alt=""
                            className="h-20"
                        />
                    </div>
                </Link>

                <div className="flex text-4xl font-bold text-center p-2 bg-zinc-100		 text-zinc-500		 rounded-full ">
                    🔥{" "}
                    <div className="countdown-text mx-5">스터디 D - {days}</div>
                    🔥
                </div>

                <div className="flex items-center">
                    <div className="flex ">
                        {detail && (
                            <div className="bg-white border text-pink-400 border-gray-300 rounded-lg shadow-md p-4 text-  ">
                                <p>Team GITHUB👉</p>
                            </div>
                        )}
                    </div>

                    <Link
                        to="https://github.com/ollok99"
                        className="mr-20 ml-5"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/gitlogo.png `}
                            alt=""
                            className="h-10"
                            onMouseEnter={() => setDetail(true)}
                            onMouseLeave={() => setDetail(false)}
                        />
                    </Link>
                    <div className="mr-3">
                        {detail2 && (
                            <div className="bg-white border text-pink-400	 border-gray-300 rounded-lg shadow-md p-4  ">
                                <p>Light/Dark👉</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={ChangeNight}
                        className="mr-20 ml-5"
                        onMouseEnter={() => setDetail2(true)}
                        onMouseLeave={() => setDetail2(false)}
                    >
                        {isNight ? (
                            <MdNightlight color="white " size={40} />
                        ) : (
                            <MdLightMode color="yellow " size={40} />
                        )}
                    </button>
                    <div className="mr-3">
                        <Login />
                    </div>
                </div>
            </header>
            {/* <div className=" underline decoration-double underline-offset-4 font-bold flex justify-self-center gap-20  col-start-2 col-end-6 ">
                <Link to="/KIM">김규혁</Link>
                <Link to="/LEE">이현진</Link>
                <Link to="/PARK">박범진</Link>
                <Link to="/JOE">조성윤</Link>
                <Link to="/JU">최주연</Link>
            </div> */}
        </div>
    );
};
export default Header2;
