import { useEffect, useState } from 'react'
import { initialKpis, revenueSeries, initialFeed, feedTemplates } from '../data/mockData'

// Simulates real-time data by nudging numbers every few seconds.
export default function useLiveData(intervalMs = 3000) {
  const [kpis, setKpis] = useState(initialKpis)
  const [series, setSeries] = useState(revenueSeries)
  const [feed, setFeed] = useState(initialFeed)

  useEffect(() => {
    let counter = 100
    const id = setInterval(() => {
      const orderBump = Math.floor(Math.random() * 4) + 1
      const revBump = orderBump * (Math.floor(Math.random() * 2500) + 800)

      setKpis((k) => ({
        revenue: k.revenue + revBump,
        profit: k.profit + Math.round(revBump * 0.24),
        orders: k.orders + orderBump,
        failedRate: Math.max(2, Math.min(9, +(k.failedRate + (Math.random() - 0.5) * 0.2).toFixed(1))),
      }))

      setSeries((s) => {
        const last = s[s.length - 1]
        const revenue = Math.round(Math.max(15000, last.revenue + (Math.random() - 0.4) * 6000))
        const time = new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', second: '2-digit' })
        return [...s.slice(-11), { time, revenue, profit: Math.round(revenue * 0.24) }]
      })

      const t = feedTemplates[Math.floor(Math.random() * feedTemplates.length)]
      setFeed((f) => [{ id: counter++, ...t, time: 'just now' }, ...f].slice(0, 7))
    }, intervalMs)

    return () => clearInterval(id)
  }, [intervalMs])

  return { kpis, series, feed }
}
