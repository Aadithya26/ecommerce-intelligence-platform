import { products } from '../../data/mockData'

export default function TopProducts() {
  const top = [...products].sort((a, b) => b.sold - a.sold).slice(0, 5)
  const max = top[0].sold

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-base font-semibold text-white">Top selling products</h2>
      <ul className="space-y-4">
        {top.map((p) => (
          <li key={p.id}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-slate-200">{p.name}</span>
              <span className="tabular-nums text-slate-400">{p.sold} sold</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-teal-500" style={{ width: `${(p.sold / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
