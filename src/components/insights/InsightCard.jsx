const impactTone = {
  High: 'bg-rose-500/15 text-rose-400',
  Medium: 'bg-amber-500/15 text-amber-400',
}

export default function InsightCard({ insight }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-2 flex items-center gap-2 text-xs">
        <span className="rounded-full bg-slate-800 px-2.5 py-1 text-slate-300">{insight.tag}</span>
        <span className={`rounded-full px-2.5 py-1 font-medium ${impactTone[insight.impact]}`}>{insight.impact} impact</span>
      </div>
      <h3 className="font-semibold text-white">{insight.title}</h3>
      <p className="mt-1 text-sm text-slate-400">{insight.body}</p>
    </div>
  )
}
