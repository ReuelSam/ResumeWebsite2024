import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Grommet, Box } from 'grommet';

import MyResumeHeader from './core/Header';
import Footer from './core/Footer'; // Import the Footer
import Home from './core/Home';
import About from './pages/About';

import './css/App.css'; // Import the CSS for custom styles

// Define Light and Dark themes
const lightTheme = {
    global: {
        colors: {
            background: '#f0f0f0',
            text: 'black',
            brand: 'dark-1',
        },
    },
};

const darkTheme = {
    global: {
        colors: {
            background: 'dark-1',
            text: 'light-1',
            brand: 'light-1',
        },
    },
};

const MainRouter = () => {
    // Check for saved theme preference in localStorage
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : true; // Default to dark mode if no preference
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        // Save the user's theme preference in localStorage whenever it changes
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Grommet theme={isDarkMode ? darkTheme : lightTheme}>
            <Box fill>
                <MyResumeHeader isDarkMode={isDarkMode} />
                <Box
                    as="main"
                    pad="medium"
                    margin={{ top: '140px' }}
                    border={{ color: 'brand', size: 'medium' }}
                    flex="grow"
                    fill="horizontal"
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Box>
                <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> {/* Pass the theme toggle */}
            </Box>
        </Grommet>
    );
};

export default MainRouter;
