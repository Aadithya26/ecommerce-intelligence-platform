import AlertList from '../components/alerts/AlertList.jsx'

export default function Alerts() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">Automatic alerts for stock-out risk, delivery delays, sales spikes and unusual transactions.</p>
      <AlertList />
    </div>
  )
}
