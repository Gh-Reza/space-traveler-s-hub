import logo from '../planet.png';

const Header = () => (
  <nav className="navbar">
    <div>
      <span className="logoimage">
        <img src={logo} alt="planet-icon" />
      </span>
    </div>
    <div className="menuitems">
      <span className="menu">Rockets</span>
      <span className="menu">Missions</span>
      <span className="menu">My profile</span>
    </div>
  </nav>
);

export default Header;
