import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import JU from "./pages/주연";
import KIM from "./pages/규혁";
import LEE from "./pages/현진";
import PARK from "./pages/범진";
import JOE from "./pages/성윤";
import Body2 from "./components/Body2";
const App = () => {
    const [isNight, setIsNight] = useState(false);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main isNight={isNight} setIsNight={setIsNight} />
                        }
                    />
                    <Route
                        path="/JU"
                        element={
                            <JU isNight={isNight} setIsNight={setIsNight} />
                        }
                    />

                    <Route
                        path="/LEE"
                        element={
                            <LEE isNight={isNight} setIsNight={setIsNight} />
                        }
                    />
                    <Route
                        path="/PARK"
                        element={
                            <PARK isNight={isNight} setIsNight={setIsNight} />
                        }
                    />
                    <Route
                        path="/JOE"
                        element={
                            <JOE isNight={isNight} setIsNight={setIsNight} />
                        }
                    />
                    <Route
                        path="/KIM"
                        element={
                            <KIM isNight={isNight} setIsNight={setIsNight} />
                        }
                    />
                    <Route path="/body2" element={<Body2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
