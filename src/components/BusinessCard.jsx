function BusinessCard({ name, category, location }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.12)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      borderRadius: '20px',
      padding: '24px',
      marginBottom: '16px',
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1)
      `,
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `
          0 16px 40px rgba(0, 0, 0, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.5),
          inset 0 -1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = `
          0 8px 32px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          inset 0 -1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {/* Bevel highlight — top edge */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)'
      }} />

      {/* Category tag */}
      <div style={{
        display: 'inline-block',
        background: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.8)',
        marginBottom: '12px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase'
      }}>
        {category}
      </div>

      <h2 style={{
        margin: '0 0 8px 0',
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '-0.3px'
      }}>
        {name}
      </h2>

      <p style={{
        margin: '0',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        📍 {location}
      </p>
    </div>
  )
}

export default BusinessCard
