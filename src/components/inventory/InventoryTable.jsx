import { Star } from 'lucide-react'
import { products, inr } from '../../data/mockData'

const demandTone = {
  High: 'bg-rose-500/15 text-rose-400',
  Medium: 'bg-amber-500/15 text-amber-400',
  Low: 'bg-slate-500/20 text-slate-300',
}

export default function InventoryTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
      <table className="w-full text-left text-sm">
        <thead className="text-slate-400">
          <tr className="border-b border-slate-800">
            <th className="px-4 py-3 font-medium">Product</th>
            <th className="px-4 py-3 font-medium">Category</th>
            <th className="px-4 py-3 font-medium">Price</th>
            <th className="px-4 py-3 font-medium">Stock level</th>
            <th className="px-4 py-3 font-medium">Demand</th>
            <th className="px-4 py-3 font-medium">Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            const low = p.stock < p.reorderLevel
            const pct = Math.min(100, (p.stock / (p.reorderLevel * 3)) * 100)
            return (
              <tr key={p.id} className={`border-b border-slate-800/60 ${low ? 'bg-rose-500/5' : ''}`}>
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.id}</p>
                </td>
                <td className="px-4 py-3 text-slate-300">{p.category}</td>
                <td className="px-4 py-3 tabular-nums text-slate-200">{inr(p.price)}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-28 rounded-full bg-slate-800">
                      <div className={`h-2 rounded-full ${low ? 'bg-rose-500' : 'bg-teal-500'}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className={`tabular-nums ${low ? 'font-semibold text-rose-400' : 'text-slate-300'}`}>{p.stock}</span>
                    {low && <span className="text-xs text-rose-400">Low stock</span>}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${demandTone[p.demand]}`}>{p.demand}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1 text-slate-200">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" /> {p.rating}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
