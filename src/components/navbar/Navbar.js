import { Link } from 'react-router-dom';

const stakePoolLink = "https://adapools.org/pool/76619d4c31c0570824e369d13a95542b65ee29546f2527f96042e602"
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
