import { Link } from "react-router-dom";
import './footer.css';
export function Footer() {
    return (
        <div>
            <div className=" mt-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-4">
                        <h6>Product</h6>
                        <ul className="list-unstyled list-color lh-lg">
                            <li><Link to="/" className="para text-decoration-none">Overview</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Features</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Solutions</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Tutorials</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Pricing</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Releases</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                        <h6>Company</h6>
                        <ul className="list-unstyled list-color lh-lg">
                            <li><Link to="/" className="para text-decoration-none">About us</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Careers</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Press</Link></li>
                            <li><Link to="/" className="para text-decoration-none">News</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Media kit</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                        <h6>Resources</h6>
                        <ul className="list-unstyled list-color lh-lg">
                            <li><Link to="/" className="para text-decoration-none">Blog</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Newsletter</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Events</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Help center</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Tutorials</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Support</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                        <h6>Use cases</h6>
                        <ul className="list-unstyled list-color lh-lg">
                            <li><Link to="/" className="para text-decoration-none">Startups</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Enterprise</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Government</Link></li>
                            <li><Link to="/" className="para text-decoration-none">SaaS center</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Marketplaces</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Ecommerce</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                        <h6>Social</h6>
                        <ul className="list-unstyled list-color lh-lg">
                            <li><Link to="/" className="para text-decoration-none">Twitter</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Linkedin</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Facebook</Link></li>
                            <li><Link to="/" className="para text-decoration-none">GitHub</Link></li>
                            <li><Link to="/" className="para text-decoration-none">AngelList</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Dribbble</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                        <h6>Legal</h6>
                        <ul className="list-unstyled list-color lh-lg">
                            <li><Link to="/" className="para text-decoration-none">Terms</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Privacy</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Cookies</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Licenses</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Settings</Link></li>
                            <li><Link to="/" className="para text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='hr'/>
            <div className="d-flex foot justify-content-between">
                <div>
                    <img src="/assests/images/Group 160.png" alt="logo" />
                </div>
               
                <div>
                    <p className="para">© 2077 zysktechnologies. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
