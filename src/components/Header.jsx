import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { Link } from "react-router-dom";

const Header2 = ({ isNight, setIsNight }) => {
    const ChangeNight = () => setIsNight(!isNight);

    return (
        <div className=" py-4 grid grid-cols-6 gap-4">
            <Link to="/">
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png `}
                    alt=""
                />
            </Link>

            <div className=" flex col-start-5 justify-center items-center">
                <div className="mr-3">TEAM GITHUB</div>
                <Link to="https://github.com/ollok99">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/gitlogo.png `}
                        alt=""
                        className="h-10"
                    />
                </Link>
            </div>
            <div className="  flex col-start-6 justify-center items-center">
                <div className="mr-3">Light/Dark</div>
                <button onClick={ChangeNight}>
                    {isNight ? (
                        <MdNightlight color="white" size={40} />
                    ) : (
                        <MdLightMode color="yellow" size={40} />
                    )}
                </button>
            </div>
            <div className=" underline decoration-double underline-offset-4 font-bold flex justify-self-center gap-20  col-start-2 col-end-6 ">
                <Link to="/KIM">김규혁</Link>
                <Link to="/LEE">이현진</Link>
                <Link to="/PARK">박범진</Link>
                <Link to="/JOE">조성윤</Link>
                <Link to="/JU">최주연</Link>
            </div>
        </div>
    );
};
export default Header2;
