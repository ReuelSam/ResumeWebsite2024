import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './core/Home';
import Header from './core/Header';
import Footer from './core/Footer';

import './css/App.css'; // Import the CSS file where we'll define the padding

const MainRouter = () => {
    return (
        <Fragment>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/education" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    <Route path="/publications" element={<Home />} />
                    <Route path="/skills" element={<Home />} />
                    <Route path="/miscellaneous" element={<Home />} />
                </Routes>
            <Footer />
        </Fragment>
    );
};

export default MainRouter;
