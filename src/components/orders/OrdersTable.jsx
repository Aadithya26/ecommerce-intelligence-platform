import { useState } from 'react'
import StatusBadge from './StatusBadge.jsx'
import { orders, inr } from '../../data/mockData'

const filters = ['All', 'Delivered', 'Shipped', 'Processing', 'Cancelled', 'Failed']

export default function OrdersTable() {
  const [filter, setFilter] = useState('All')
  const rows = filter === 'All' ? orders : orders.filter((o) => o.status === filter)

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900">
      <div className="flex flex-wrap gap-2 border-b border-slate-800 p-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
              filter === f ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr className="border-b border-slate-800">
              <th className="px-4 py-3 font-medium">Order ID</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Delivery</th>
              <th className="px-4 py-3 font-medium">Placed</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} className="border-b border-slate-800/60 hover:bg-slate-800/40">
                <td className="px-4 py-3 font-medium text-white">{o.id}</td>
                <td className="px-4 py-3 text-slate-300">{o.customer}</td>
                <td className="px-4 py-3 text-slate-300">{o.product}</td>
                <td className="px-4 py-3 tabular-nums text-slate-200">{inr(o.amount)}</td>
                <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
                <td className={`px-4 py-3 ${o.delivery === 'Delayed' ? 'font-medium text-rose-400' : 'text-slate-400'}`}>{o.delivery}</td>
                <td className="px-4 py-3 text-slate-500">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
