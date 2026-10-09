import { IndianRupee, ShoppingBag, TrendingUp, XCircle } from 'lucide-react'
import useLiveData from '../hooks/useLiveData.js'
import { inr } from '../data/mockData'
import KpiCard from '../components/dashboard/KpiCard.jsx'
import RevenueChart from '../components/dashboard/RevenueChart.jsx'
import TopProducts from '../components/dashboard/TopProducts.jsx'
import LiveActivityFeed from '../components/dashboard/LiveActivityFeed.jsx'

export default function Dashboard() {
  const { kpis, series, feed } = useLiveData()

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="Revenue today" value={inr(kpis.revenue)} change={12.4} icon={IndianRupee} />
        <KpiCard title="Profit today" value={inr(kpis.profit)} change={8.1} icon={TrendingUp} tone="bg-amber-500/15 text-amber-400" />
        <KpiCard title="Orders today" value={kpis.orders.toLocaleString('en-IN')} change={5.6} icon={ShoppingBag} tone="bg-sky-500/15 text-sky-400" />
        <KpiCard title="Failed / cancelled" value={`${kpis.failedRate}%`} change={-1.2} icon={XCircle} tone="bg-rose-500/15 text-rose-400" goodWhenDown />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={series} />
        </div>
        <LiveActivityFeed feed={feed} />
      </div>

      <TopProducts />
    </div>
  )
}
