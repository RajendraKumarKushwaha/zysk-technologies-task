import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="top-header d-flex justify-content-between align-items-center p-3">

            <div>
               <Link to="/"> <img src="/assests/images/Group 160.png" alt="logo" />
               </Link>
            </div>
            <button
                className="menu-toggle d-md-none"
                onClick={handleToggle}
                style={{
                    background: "transparent",
                    border: "none",

                    fontSize: "24px",
                    cursor: "pointer",
                }}
            >
                ☰
            </button>

            <div
                className={`menu-container d-md-flex ${isMenuOpen ? "menu-open" : "d-none"
                    }`}
            >
                <nav className="menu  fw-bold">
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Home</Link></span>
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Products</Link></span>
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Resources</Link></span>
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Pricing</Link></span>
                </nav>
            </div>
            <div className="d-none d-md-block">
                <img src="/assests/images/_Navigation actions.png" alt="logo" />
            </div>
        </header>
    )
}