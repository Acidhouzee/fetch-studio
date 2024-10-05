import ReactDOM from 'react-dom/client';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import NotFound from "../src/components/pages/NotFound";
import SinglePost from "./pages/SinglePost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import React, {useEffect} from "react";

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about-us" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="*" element={<NotFound/>}/>

    <Route path="/post/:post-link" element={<SinglePost/>} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
</Routes>