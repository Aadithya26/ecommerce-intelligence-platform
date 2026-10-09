import DemandForecastChart from '../components/insights/DemandForecastChart.jsx'
import InsightCard from '../components/insights/InsightCard.jsx'
import { insights } from '../data/mockData'

export default function Insights() {
  return (
    <div className="space-y-6">
      <DemandForecastChart />
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((i) => (
          <InsightCard key={i.id} insight={i} />
        ))}
      </div>
    </div>
  )
}
