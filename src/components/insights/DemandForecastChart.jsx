import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import { forecast } from '../../data/mockData'

export default function DemandForecastChart() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-1 text-base font-semibold text-white">Demand forecast (units per day)</h2>
      <p className="mb-4 text-xs text-slate-500">Actual sales vs predicted demand for the next 3 days</p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecast}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }} />
            <Legend />
            <Line type="monotone" dataKey="actual" name="Actual" stroke="#14b8a6" strokeWidth={2.5} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="forecast" name="Forecast" stroke="#f59e0b" strokeWidth={2.5} strokeDasharray="6 4" dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
