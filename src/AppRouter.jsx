import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";

function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}

export default AppRouter
