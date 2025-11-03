import { NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen">
      <header
        style={{
          position: 'sticky',
          top: 0,
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid #eee',
          background: '#fff8'
        }}>
        <nav
          style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center',
            padding: '12px 16px',
            maxWidth: 960,
            margin: '0 auto'
          }}>
          <strong>router-4pages</strong>
          <Nav to="/">Home</Nav>
          <Nav to="/users">Users</Nav>
          <Nav to="/search">Search</Nav>
          <Nav to="/about">About</Nav>
        </nav>
      </header>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
        <Outlet />
      </main>
    </div>
  )
}

function Nav({ to, children }) {
  return (
    <NavLink
      to={to}
      end
      style={({ isActive }) => ({
        padding: '6px 12px',
        borderRadius: 999,
        textDecoration: 'none',
        color: isActive ? '#fff' : '#111',
        background: isActive ? '#111' : 'transparent'
      })}
    >
      {children}
    </NavLink>
  )
}
