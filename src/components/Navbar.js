import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-success navbar-expand-lg px-5">
    <div className="navbar-brand">
      Github Search
    </div>
  <ul className="navbar-nav px-5">
    <li className="nav-item">
      <NavLink to="/" end className="nav-link">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/about" className="nav-link">About</NavLink>
    </li>
  </ul>
  </nav>
)