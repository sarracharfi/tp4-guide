import React, { lazy } from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import App from './routes/App'
import ErrorBoundary from './routes/ErrorBoundary'

// Lazy pages
const About = lazy(() => import('./pages/About.jsx'))
const Users = lazy(() => import('./pages/Users.jsx'))
const UserDetail = lazy(() => import('./pages/UserDetail.jsx'))

// Regular pages
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import NotFound from './pages/NotFound.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Search /> },
      {
        path: 'about',
        element: (
          <React.Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: 'users',
        element: (
          <React.Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
            <Users />
          </React.Suspense>
        ),
      },
      {
        path: 'users/:id',
        element: (
          <React.Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
            <UserDetail />
          </React.Suspense>
        ),
      },
      { path: 'start', loader: () => redirect('/users') },
      { path: '*', element: <NotFound /> },
    ],
  },
])
