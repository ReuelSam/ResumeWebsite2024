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
            <div className="content-wrapper"> {/* Apply static padding via CSS */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/education" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    <Route path="/skills" element={<Home />} />
                    <Route path="/miscellaneous" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </Fragment>
    );
};

export default MainRouter;
