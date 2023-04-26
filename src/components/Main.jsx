import { useState } from "react";
import Header2 from "./Header2";
import Body from "./Body";
import Body2 from "./Body2";
import Footer from "./Footer";

function Main() {
    const [isNight, setIsNight] = useState(false);
    const ChangeMode = isNight
        ? " bg-gray-800 text-white"
        : " bg-violet-100 text-black ";
    return (
        <div className={ChangeMode}>
            <Header2 isNight={isNight} setIsNight={setIsNight} />

            <Body />
            {/* <Body2 /> */}

            {/* <Footer /> */}
        </div>
    );
}

export default Main;
