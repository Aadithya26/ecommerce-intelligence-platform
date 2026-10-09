const styles = {
  Delivered: 'bg-emerald-500/15 text-emerald-400',
  Shipped: 'bg-sky-500/15 text-sky-400',
  Processing: 'bg-slate-500/20 text-slate-300',
  Cancelled: 'bg-amber-500/15 text-amber-400',
  Failed: 'bg-rose-500/15 text-rose-400',
}

export default function StatusBadge({ status }) {
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>{status}</span>
}
