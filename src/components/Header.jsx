import { NavLink } from 'react-router-dom';
import logo from '../planet.png';
import '../css/Header.css';

const Header = () => (
  <nav className="navbar">
    <div className="title-logo">
      <span className="logoimage">
        <img src={logo} alt="planet-icon" />
      </span>
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <div className="menuitems">
      <span className="menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-rout' : 'unactive')}
        >
          Rockets
        </NavLink>
      </span>
      <span className="menu">
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'active-rout' : 'unactive')}
        >
          Missions
        </NavLink>
      </span>
      <span className="menu">
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'myprofile active-rout' : 'myprofile unactive')}
        >
          My profile
        </NavLink>
      </span>
    </div>
  </nav>
);

export default Header;
