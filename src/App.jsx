import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Comments from "./pages/Comments.jsx";
import Carte from "./pages/Carte.jsx";
import './styles/main.css'
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/comment" element={<Comments />} />
                <Route path="/carte" element={<Carte />} />
            </Routes>
        </>
    );
};

export default App;
