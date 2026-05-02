import { useState } from 'react'
import BusinessCard from './components/BusinessCard'
import SearchBar from './components/SearchBar'
import businesses from './data'
import bg from './assets/bg.jpg'

function App() {
  const [query, setQuery] = useState('')

  const filtered = businesses.filter(business =>
    business.name.toLowerCase().includes(query.toLowerCase()) ||
    business.category.toLowerCase().includes(query.toLowerCase()) ||
    business.location.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#fff',
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '8px',
          textShadow: '0 2px 12px rgba(0,0,0,0.3)'
        }}>
          Lagos Business Directory
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '24px',
          fontSize: '14px'
        }}>
          Discover local businesses near you
        </p>

        <SearchBar value={query} onChange={setQuery} />

        {filtered.length > 0 ? (
          filtered.map(business => (
            <BusinessCard
              key={business.id}
              name={business.name}
              category={business.category}
              location={business.location}
            />
          ))
        ) : (
          <div style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '60px',
            fontSize: '15px'
          }}>
            No businesses found for "{query}"
          </div>
        )}

      </div>
    </div>
  )
}

export default App
