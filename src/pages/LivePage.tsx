import { useState, useEffect, useRef } from 'react'
import { Pause, Square, Mic } from 'lucide-react'

export default function LivePage() {
  const [listening, setListening] = useState(false)
  const [paused, setPaused] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [translateLive, setTranslateLive] = useState(true)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (listening && !paused) {
      intervalRef.current = window.setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [listening, paused])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const start = () => {
    setListening(true)
    setPaused(false)
    setSeconds(0)
  }

  const stop = () => {
    setListening(false)
    setPaused(false)
    setSeconds(0)
  }

  // Simulated waveform bars
  const bars = Array.from({ length: 32 }, (_, i) => {
    const base = listening && !paused ? 12 + Math.sin(Date.now() / 200 + i * 0.4) * 18 + Math.random() * 10 : 6 + Math.random() * 4
    return Math.max(4, Math.min(48, base))
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 56px - 64px - 40px)' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep)' }}>
          Live Listening
        </h1>
      </div>

      {/* Waveform area */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 0'
      }}>
        {/* Waveform */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          height: 64,
          marginBottom: 28,
          width: '100%',
          maxWidth: 280
        }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: listening && !paused ? h : 6 + (i % 5),
                borderRadius: 2,
                background: listening && !paused
                  ? `linear-gradient(180deg, #60A5FA, #2563EB)`
                  : 'var(--color-border)',
                transition: 'height 150ms ease',
                opacity: listening && !paused ? 0.7 + (i % 3) * 0.1 : 0.4
              }}
            />
          ))}
        </div>

        {/* Timer */}
        <div style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          color: 'var(--color-deep)',
          fontVariantNumeric: 'tabular-nums',
          marginBottom: 32
        }}>
          {formatTime(seconds)}
        </div>

        {/* Controls */}
        {!listening ? (
          <button
            onClick={start}
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 0 10px rgba(37,99,235,0.15), 0 8px 24px rgba(37,99,235,0.35)',
              cursor: 'pointer'
            }}
          >
            <Mic size={28} color="white" />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <button
              onClick={() => setPaused(p => !p)}
              className="btn btn-secondary"
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {paused ? (
                <Mic size={22} color="var(--color-primary)" />
              ) : (
                <Pause size={22} color="var(--color-primary)" />
              )}
            </button>

            <button
              onClick={stop}
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#EF4444',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(239,68,68,0.35)',
                cursor: 'pointer'
              }}
            >
              <Square size={20} color="white" fill="white" />
            </button>
          </div>
        )}

        {listening && (
          <p style={{
            marginTop: 16,
            fontSize: 13,
            color: paused ? 'var(--color-warning)' : 'var(--color-primary)',
            fontWeight: 500
          }}>
            {paused ? 'Paused' : 'Listening…'}
          </p>
        )}
      </div>

      {/* Translate Live toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 14,
        marginTop: 'auto'
      }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-deep)' }}>
          Translate Live
        </span>
        <button
          onClick={() => setTranslateLive(t => !t)}
          style={{
            width: 48,
            height: 28,
            borderRadius: 14,
            background: translateLive ? 'var(--color-primary)' : 'var(--color-border)',
            border: 'none',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background 180ms ease'
          }}
          aria-label="Toggle live translation"
        >
          <span style={{
            position: 'absolute',
            top: 3,
            left: translateLive ? 23 : 3,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            transition: 'left 180ms ease'
          }} />
        </button>
      </div>

      {/* Demo note */}
      <p style={{
        textAlign: 'center',
        fontSize: 11,
        color: 'var(--color-text-muted)',
        marginTop: 12
      }}>
        Demo mode · No real microphone capture yet
      </p>
    </div>
  )
}
