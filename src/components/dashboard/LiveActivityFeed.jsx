import { ShoppingCart, XCircle, Truck, PackageMinus, Star, CheckCircle2 } from 'lucide-react'

const icons = {
  order: { icon: ShoppingCart, tone: 'text-teal-400' },
  failed: { icon: XCircle, tone: 'text-rose-400' },
  delay: { icon: Truck, tone: 'text-amber-400' },
  stock: { icon: PackageMinus, tone: 'text-orange-400' },
  rating: { icon: Star, tone: 'text-yellow-400' },
  delivered: { icon: CheckCircle2, tone: 'text-emerald-400' },
}

export default function LiveActivityFeed({ feed }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-base font-semibold text-white">Live activity</h2>
      <ul className="space-y-3">
        {feed.map((item) => {
          const { icon: Icon, tone } = icons[item.type] ?? icons.order
          return (
            <li key={item.id} className="flex items-start gap-3 text-sm">
              <Icon size={16} className={`mt-0.5 shrink-0 ${tone}`} />
              <div className="min-w-0">
                <p className="text-slate-200">{item.text}</p>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
