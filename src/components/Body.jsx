import React from "react";

const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
};

const Body = () => {
    const url = "https://team-purple-project.vercel.app/";

    return (
        <div className="   relative max-w-screen  flex flex-cols items-center justify-between">
            <div class="   abolute  flex flex-col h-full w-full text-left ml-48 mr-10 body-text">
                <div className="text-2xl mb-8 font-semibold ">
                    중요한건 꺾였는데도 그냥 하는 마음 !
                </div>
                <div className="text-5xl my-8 font-black">
                    <div className="my-4">버티자 !</div>
                    <div>버티면 다 되는 거야 !</div>
                </div>

                <button
                    className="animate-pulse  text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500	my-8 hover:bg-gradient-to-l	 text-white  py-5 w-60 rounded-full  "
                    onClick={() => handleOpenNewTab(url)}
                >
                    게임하러 가기 !
                </button>
            </div>
            <div className="   grid grid-cols-5 h-screen content-center mr-40 ml-30">
                <img
                    src={`${process.env.PUBLIC_URL}/images2/규혁.jpg`}
                    className="col-start-2 rounded-lg transform hover:scale-110 transition duration-500"
                ></img>
                <img
                    src={`${process.env.PUBLIC_URL}/images2/성윤.jpg`}
                    className="col-start-4  rounded-lg transform hover:scale-110 transition duration-500"
                ></img>

                <img
                    src={`${process.env.PUBLIC_URL}/images2/현진.jpg`}
                    className="col-start-1 rounded-lg h-100 transform hover:scale-110 transition duration-500"
                ></img>
                <img
                    src={`${process.env.PUBLIC_URL}/images2/범진.jpg`}
                    className="col-start-3 rounded-lg h-100 transform hover:scale-110 transition duration-500"
                ></img>
                <img
                    src={`${process.env.PUBLIC_URL}/images2/주연.jpg`}
                    className="col-start-5 rounded-lg h-100 transform hover:scale-110 transition duration-500"
                ></img>
            </div>
        </div>
    );
};
export default Body;
