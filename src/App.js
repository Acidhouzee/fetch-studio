import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Cursor from "./helpers/cursor";
// CSS
import "./App.css";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/contactForm/Footer";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";

function App() {
    const location = useLocation();

    useEffect(() => {
        Cursor('.cursor');
    }, [location]);

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
            <div className="cursor"/>
        </>
    );
}

export default App;
