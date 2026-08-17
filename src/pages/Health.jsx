import { useEffect, useState } from 'react'

function Health() {
  const [status, setStatus] = useState('Checking...')
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed')
        }
        return response.json()
      })
      .then((result) => {
        setData(result)
        setStatus('Connected successfully')
      })
      .catch(() => {
        setStatus('Health check failed')
      })
  }, [])

  return (
    <main className="page-container">
      <section className="placeholder-page">
        <span className="hero-label">SYSTEM STATUS</span>
        <h1>Health Check</h1>

        <div className="health-status">
          <strong>{status}</strong>

          {data && (
            <p>
              Fetched data successfully. Test item: {data.title}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Health