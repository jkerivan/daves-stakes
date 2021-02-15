import { Link } from 'react-router-dom';

const Navbar = ()=> {
  return (
    <div className="navbar">
        <nav id="nav">
            <li className="nav-link"><Link to="/about"> ABOUT </Link></li>
            <li className="nav-link"><Link to="/news"> NEWS </Link></li>
            <li className="nav-link"><Link  to="/pool"> POOL </Link></li>
        </nav>
    </div>
  );
}

export default Navbar;
