import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const titles = {
  '/': 'Live Dashboard',
  '/orders': 'Orders & Delivery',
  '/inventory': 'Inventory',
  '/alerts': 'Alerts',
  '/insights': 'Insights & Predictions',
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 py-4 backdrop-blur">
      <div>
        <h1 className="text-lg font-semibold text-white">{titles[pathname] ?? 'Dashboard'}</h1>
        <p className="text-xs text-slate-500">Real-Time E-Commerce Intelligence & Analytics Platform</p>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
          <span className="live-dot h-2 w-2 rounded-full bg-emerald-400" />
          Live
        </span>
        <span className="tabular-nums text-slate-400">{now.toLocaleTimeString('en-IN')}</span>
      </div>
    </header>
  )
}
