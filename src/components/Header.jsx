import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-icon">🎬</span>
        <span>Movie Explorer</span>
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Explore
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Watchlist
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          About
        </NavLink>

        <NavLink
          to="/health"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Health
        </NavLink>
      </nav>
    </header>
  )
}

export default Header