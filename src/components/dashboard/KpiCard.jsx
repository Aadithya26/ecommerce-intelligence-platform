export default function KpiCard({ title, value, change, icon: Icon, tone = 'bg-teal-500/15 text-teal-400', goodWhenDown = false }) {
  const up = change >= 0
  const good = goodWhenDown ? !up : up
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        <div className={`rounded-lg p-2 ${tone}`}>
          <Icon size={18} />
        </div>
      </div>
      <p className="mt-3 text-2xl font-bold tabular-nums text-white">{value}</p>
      <p className={`mt-1 text-xs ${good ? 'text-emerald-400' : 'text-rose-400'}`}>
        {up ? '▲' : '▼'} {Math.abs(change)}% vs yesterday
      </p>
    </div>
  )
}
