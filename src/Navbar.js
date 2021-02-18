import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
          <img src="/logo512.png" alt="images"/>
            <h1>Code <code>Stream</code></h1>
            <div className="links">
              <Link className="Nav-link" to="/">Home</Link>
              <Link to="/create" className="Nav-link">New Blog</Link>
              <a
                className="Nav-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
            
        </nav>
     );
}
 
export default Navbar;