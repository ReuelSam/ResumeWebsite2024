import React, { useState, useContext, useEffect } from 'react';
import { Header, Box, Text, Image, Anchor, Button, Menu, ResponsiveContext } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';
import { useLocation } from 'react-router-dom';

const MyResumeHeader = ({ isDarkMode }) => {
    const size = useContext(ResponsiveContext);
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('Home');
    const [screenSize, setScreenSize] = useState(size);

    const [githubHovered, setGithubHovered] = useState(false);
    const [linkedinHovered, setLinkedinHovered] = useState(false);

    const customBreakpoint = size === 'medium' || size === 'small'; // Trigger menu at medium size

    useEffect(() => {
        const pathToLabel = {
            '/': 'Home',
            '/about': 'About',
            '/education': 'Education',
            '/projects': 'Projects',
            '/publications': 'Publications',
            '/skills': 'Skills',
            '/miscellaneous': 'Miscellaneous',
        };
        setActiveButton(pathToLabel[location.pathname] || 'Home');
    }, [location]);

    useEffect(() => {
        setScreenSize(size);
    }, [size]);

    const buttonStyles = (label) => ({
        border: activeButton === label ? '2px solid #FFA500' : 'none',
        borderRadius: '12px',
        padding: '8px 16px',
        color: activeButton === label ? '#FFA500' : isDarkMode ? 'white' : 'black',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border 0.2s ease',
    });

    const resumeButtonStyles = {
        backgroundColor: 'transparent',
        borderRadius: '12px',
        border: isDarkMode ? '1px solid white' : '1px solid black',
        color: isDarkMode ? 'white' : 'black',
        padding: '10px 20px',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Header
            background={isDarkMode ? 'dark-1' : 'light-1'}
            pad="medium"
            fill="horizontal"
            justify="between"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}
        >
            <Box direction="row" align="center" gap="medium">
                <Image
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    style={{ borderRadius: '50%' }}
                />
                <Box direction="column" align="start">

                    <Text size="large" weight="bold" color="#FFA500">
                        FirstName LastName
                    </Text>

                    <Text size="medium" color={isDarkMode ? 'light-4' : 'dark-4'}>
                        Job Title | Job Title 2
                    </Text>

                    <Box direction="row" gap="medium" align="center" pad={{ top: 'small' }}>
                        <Anchor
                            href="https://github.com"
                            onMouseEnter={() => setGithubHovered(true)}
                            onMouseLeave={() => setGithubHovered(false)}
                            plain={true}
                        >
                            <Github color={githubHovered ? '#00C781' : isDarkMode ? 'white' : 'black'} />
                        </Anchor>
                        
                        <Anchor
                            href="https://linkedin.com"
                            onMouseEnter={() => setLinkedinHovered(true)}
                            onMouseLeave={() => setLinkedinHovered(false)}
                            plain={true}
                        >
                            <Linkedin color={linkedinHovered ? '#00C781' : isDarkMode ? 'white' : 'black'} />
                        </Anchor>
                    </Box>
                </Box>
            </Box>

            <Box align="end" direction="row" gap="medium">
                {customBreakpoint ? (
                <>
                    <Button label="Resume" href="/resume" style={resumeButtonStyles} />
                    <Menu
                    label={activeButton} // Show the current active page label
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'About', href: '/about' },
                        { label: 'Education', href: '/education' },
                        { label: 'Projects', href: '/projects' },
                        { label: 'Publications', href: '/publications' },
                        { label: 'Skills', href: '/skills' },
                        { label: 'Miscellaneous', href: '/miscellaneous' },
                    ]}
                    />
                </>
                ) : (
                <Box direction="row" gap="medium">
                    {[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Education', href: '/education' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Publications', href: '/publications' },
                    { label: 'Skills', href: '/skills' },
                    { label: 'Miscellaneous', href: '/miscellaneous' },
                    ].map(({ label, href }) => (
                    <Button
                        key={label}
                        label={label}
                        plain
                        href={href}
                        style={buttonStyles(label)}
                    />
                    ))}
                    <Button label="Resume" href="/resume" style={resumeButtonStyles} />
                </Box>
                )}
            </Box>
        </Header>
    );
};

export default MyResumeHeader;
