function SearchBar({ value, onChange }) {
    return (
      <div style={{
        marginBottom: '24px',
        position: 'relative'
      }}>
        <input
          type="text"
          placeholder="Search businesses or locations..."
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.25)',
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: '#ffffff',
            fontSize: '15px',
            fontFamily: "'Inter', sans-serif",
            outline: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
            transition: 'border 0.2s ease'
          }}
        />
      </div>
    )
  }
  
  export default SearchBar
  