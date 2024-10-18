import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    // Hover state to change icon color
    const [hoveredIcon, setHoveredIcon] = useState(null);

    return (
        <footer style={styles.footer}>
            <Container fluid>
                <Row className="align-items-center">
                    {/* Left Section: Personal Information */}
                    <Col xs={12} md={4} style={styles.leftSection}>
                        <p style={styles.text}>FirstName LastName</p>
                        <p style={styles.text}>email@example.com</p>
                    </Col>

                    {/* Middle Section: Current Year */}
                    <Col xs={12} md={4} className="text-center" style={styles.middleSection}>
                        <p style={styles.text}>{currentYear}</p>
                    </Col>

                    {/* Right Section: External Links */}
                    <Col xs={12} md={4} className="text-end" style={styles.rightSection}>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                ...styles.icon,
                                color: hoveredIcon === 'github' ? '#f9a825' : '#f1f1f1',
                            }}
                            onMouseEnter={() => setHoveredIcon('github')}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            <FaGithub size={25} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                ...styles.icon,
                                color: hoveredIcon === 'linkedin' ? '#f9a825' : '#f1f1f1',
                            }}
                            onMouseEnter={() => setHoveredIcon('linkedin')}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            <FaLinkedin size={25} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#1e1e1e',
        color: '#f1f1f1',
        padding: '40px 0', // Increased padding for more space
        width: '100vw', // Ensure footer takes full viewport width
        position: 'relative',
        bottom: '0',
        left: '0',
        marginTop: 'auto',
        boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.1)', // Adds subtle shadow to give it depth
    },
    leftSection: {
        textAlign: 'left',
    },
    middleSection: {
        textAlign: 'center',
    },
    rightSection: {
        textAlign: 'right',
    },
    text: {
        margin: '0',
        fontSize: '1.1rem', // Slightly increased font size
    },
    icon: {
        color: '#f1f1f1', // Default color for the icons
        marginLeft: '15px',
        transition: 'color 0.3s ease', // Smooth transition on hover
        textDecoration: 'none',
    },
};

export default Footer;
