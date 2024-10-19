import React, { useState } from 'react';
import { Box, Text, Anchor, Button } from 'grommet';
import { Github, Linkedin, Sun, Moon } from 'grommet-icons';

const Footer = ({ isDarkMode, toggleTheme }) => {
    const [githubHovered, setGithubHovered] = useState(false);
    const [linkedinHovered, setLinkedinHovered] = useState(false);
    const [darkModeToggleHovered, setDarkModeToggleHovered] = useState(false);

    return (
        <Box
            as="footer"
            pad={{ vertical: 'medium', horizontal: 'large' }}
            background={isDarkMode ? 'dark-1' : 'light-1'}
            direction="row"
            align="center"
            justify="between"
            fill="horizontal"
        >
            {/* Left Section: Contact Details */}
            <Box align="start">
                <Text size="medium" color={isDarkMode ? 'light-1' : 'dark-1'} weight="bold">
                    FirstName LastName
                </Text>

                <Text size="small" color={isDarkMode ? 'light-1' : 'dark-1'} italic>
                    email@gmail.com
                </Text>

                <Text size="small" color={isDarkMode ? 'light-1' : 'dark-1'}>
                    +1 (000)-000-0000
                </Text>
            </Box>

            {/* Center Section: Copyright */}
            <Box align="center">
                <Text size="small" color={isDarkMode ? 'light-1' : 'dark-1'}>
                    © {new Date().getFullYear()}
                </Text>
            </Box>

            {/* Right Section: Social Media Links and Theme Toggle */}
            <Box direction="row" align="center" gap="small">
                <Anchor href="/resume" label="Resume" color={isDarkMode ? 'light-1' : 'dark-1'} />
                
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
                
                {/* Theme Toggle Button */}
                <Button
                    icon={isDarkMode 
                        ? <Sun color={darkModeToggleHovered ? '#00C781' : 'light-1'} /> 
                        : <Moon color={darkModeToggleHovered ? '#00C781' : 'dark-1'} />
                    }
                    onClick={toggleTheme}
                    onMouseEnter={() => setDarkModeToggleHovered(true)}
                    onMouseLeave={() => setDarkModeToggleHovered(false)}
                    plain={true}
                />
            </Box>
        </Box>
    );
};

export default Footer;
