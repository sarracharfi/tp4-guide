import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: 16 }}>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p style={{ opacity: 0.7 }}>
          {(error.data && error.data.message) || 'An error occurred.'}
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>Something went wrong</h1>
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          background: '#f6f6f6',
          padding: 12,
          borderRadius: 8,
        }}
      >
        {String(error)}
      </pre>
    </div>
  )
}
