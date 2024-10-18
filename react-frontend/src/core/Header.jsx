import { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar
            expand="xl"
            fixed="top"
            bg="dark"
            variant="dark"
            expanded={menuOpen}
            onToggle={setMenuOpen}
            collapseOnSelect
            style={{ width: "100%"}} // Ensure Navbar takes full width
        >
            <Container fluid>
                <div className="navbar-brand">
                    <Row className="align-items-center" style={{ gap: '10px' }}> {/* Add gap for spacing */}
                        <Col xs="auto">
                            {/* Placeholder image */}
                            <Image src="https://via.placeholder.com/50" roundedCircle />
                        </Col>
                        <Col>
                            <div style={styles.brandText}>
                                <h4 style={styles.name}>FirstName LastName</h4>
                                <p style={styles.title}>Job Title 1 | Job Title 2</p>
                                <div style={styles.iconContainer}>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Hamburger menu */}
                {/* Add the bg-dark class dynamically based on the menuOpen state */}
                <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'bg-dark' : ''}>
                    <Nav className="ms-auto">
                        {/* Special case for "Home" */}
                        <NavLink
                            to="/"
                            end // Ensures this only matches the exact root URL
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                            style={({ isActive }) =>
                                isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem
                            }
                            onMouseEnter={() => setHoverIndex(0)}
                            onMouseLeave={() => setHoverIndex(null)}
                            onClick={() => setMenuOpen(false)} // Close menu after clicking on mobile
                        >
                            Home
                        </NavLink>

                        {/* Remaining nav items */}
                        {['About', 'Education', 'Projects', 'Publications', 'Skills', 'Miscellaneous'].map((item, index) => (
                            <NavLink
                                key={index + 1} // Start index at 1 to avoid conflict with "Home"
                                to={`/${item.toLowerCase()}`} // Ensure leading slash for paths
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                end // Ensures exact matching for root paths like "/about"
                                style={({ isActive }) =>
                                    isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem
                                }
                                onMouseEnter={() => setHoverIndex(index + 1)}
                                onMouseLeave={() => setHoverIndex(null)}
                                onClick={() => setMenuOpen(false)} // Close menu after clicking on mobile
                            >
                                {item}
                            </NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const styles = {
    brandText: {
        color: '#f9a825',
        textAlign: 'left',
    },
    name: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0',
    },
    title: {
        fontSize: '0.9rem',
        fontStyle: 'italic',
        marginTop: '0',
        color: '#fff',
    },
    iconContainer: {
        display: 'flex',
        gap: '15px', // Increase space between icons
        marginTop: '5px',
    },
    icon: {
        color: '#fff', // Keep the icons white
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    navItem: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '500',
        padding: '10px 20px',
        borderRadius: '50px',
        transition: 'all 0.3s ease',
        border: '2px solid transparent',  // Default border is transparent
    },
    navItemHover: {
        border: '2px solid #f9a825',  // Only the border changes on hover
        color: '#fff',  // Keep text color the same on hover
    },
    activeNavItem: {
        border: '2px solid #f9a825', // Apply active style (highlighted border)
        color: '#f9a825',  // Active link text color
    }
};

export default Header;
