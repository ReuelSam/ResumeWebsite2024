import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

    // Function to update the `isMobile` state on window resize
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1300);
        if (window.innerWidth > 1300) {
            setMenuOpen(false); // Close the menu when switching to desktop
        }
    };

    // Add event listener on mount and clean up on unmount
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            bg="dark"
            variant="dark"
            expanded={menuOpen}
            onToggle={setMenuOpen}
            collapseOnSelect
            style={{ width: "100%" }}
        >
            <Container fluid> {/* Use fluid container for full-width */}
                <Navbar.Brand href="#home" style={styles.logoText}>
                    NAME
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
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
    logoText: {
        color: '#f9a825',
        fontSize: '1.5rem',
        fontFamily: "'Montserrat', sans-serif",
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
