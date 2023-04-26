import Header2 from "../components/Header2";
import { useState } from "react";

function JOE({ isNight, setIsNight }) {
    const ChangeMode = isNight
        ? " bg-gray-800 text-white"
        : " bg-violet-100 text-black ";
    return (
        <div className={ChangeMode}>
            <Header2 isNight={isNight} setIsNight={setIsNight} />
            <h1>Other Page</h1>
            <p>You have successfully navigated to the other page!</p>
        </div>
    );
}
export default JOE;
