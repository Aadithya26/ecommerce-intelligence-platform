import { useState } from 'react'
import { AlertOctagon, AlertTriangle, Info, X } from 'lucide-react'
import { alerts as initialAlerts } from '../../data/mockData'

const styles = {
  Critical: { icon: AlertOctagon, box: 'border-rose-500/40 bg-rose-500/10', text: 'text-rose-400' },
  Warning: { icon: AlertTriangle, box: 'border-amber-500/40 bg-amber-500/10', text: 'text-amber-400' },
  Info: { icon: Info, box: 'border-sky-500/40 bg-sky-500/10', text: 'text-sky-400' },
}

export default function AlertList() {
  const [items, setItems] = useState(initialAlerts)

  if (items.length === 0) {
    return <p className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">No active alerts. Everything looks healthy.</p>
  }

  return (
    <ul className="space-y-3">
      {items.map((a) => {
        const { icon: Icon, box, text } = styles[a.severity]
        return (
          <li key={a.id} className={`flex items-start gap-4 rounded-xl border p-4 ${box}`}>
            <Icon className={`mt-0.5 shrink-0 ${text}`} size={22} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-white">{a.title}</h3>
                <span className={`text-xs font-medium ${text}`}>{a.severity}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{a.detail}</p>
              <p className="mt-1 text-xs text-slate-500">{a.time}</p>
            </div>
            <button
              onClick={() => setItems((prev) => prev.filter((x) => x.id !== a.id))}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
              aria-label="Dismiss alert"
            >
              <X size={16} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
