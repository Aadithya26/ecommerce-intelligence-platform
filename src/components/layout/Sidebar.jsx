import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ShoppingCart, Package, BellRing, Lightbulb, Activity } from 'lucide-react'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/orders', label: 'Orders', icon: ShoppingCart },
  { to: '/inventory', label: 'Inventory', icon: Package },
  { to: '/alerts', label: 'Alerts', icon: BellRing },
  { to: '/insights', label: 'Insights', icon: Lightbulb },
]

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-950 p-4 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="rounded-lg bg-teal-500/15 p-2 text-teal-400">
          <Activity size={20} />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">RetailPulse</p>
          <p className="text-xs text-slate-500">Intelligence Platform</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-teal-500/15 text-teal-300'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <p className="mt-auto px-2 text-xs text-slate-600">Final year project demo</p>
    </aside>
  )
}
