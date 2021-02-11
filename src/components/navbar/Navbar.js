
const stakePoolLink = "https://adapools.org/pool/76619d4c31c0570824e369d13a95542b65ee29546f2527f96042e602"
const Navbar = ()=> {
  return (
    <div className="navbar">
        <ul id="nav">
          <li>ABOUT</li>
          <li onClick={() => { window.open(stakePoolLink, "_blank")}}> ADAPOOLS </li>
        </ul>
    </div>
  );
}

export default Navbar;
