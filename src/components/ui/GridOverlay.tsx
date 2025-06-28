'use client'

import { useState, useEffect } from 'react'

interface GridOverlayProps {
  columns?: number
  maxWidth?: string
  gap?: string
  padding?: string
}

export function GridOverlay({ 
  columns = 12, 
  maxWidth = '1400px',
  gap = '1.5rem',
  padding = '1rem'
}: GridOverlayProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 'g') {
        event.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background: 'rgba(59, 130, 246, 0.02)',
      }}
    >
      <div 
        className="h-full mx-auto"
        style={{
          maxWidth,
          padding: `0 ${padding}`,
        }}
      >
        <div 
          className="h-full grid opacity-30"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap,
          }}
        >
          {Array.from({ length: columns }).map((_, index) => (
            <div
              key={index}
              className="h-full"
              style={{
                background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderTop: 'none',
                borderBottom: 'none',
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Grid info */}
      <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 text-xs font-mono">
        <div className="text-gray-600">Grid Overlay (Alt+G to toggle)</div>
        <div className="text-gray-800">
          {columns} columns • {gap} gap • {maxWidth} max-width
        </div>
      </div>
    </div>
  )
}