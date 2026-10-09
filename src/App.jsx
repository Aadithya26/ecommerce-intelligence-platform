import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Orders from './pages/Orders.jsx'
import Inventory from './pages/Inventory.jsx'
import Alerts from './pages/Alerts.jsx'
import Insights from './pages/Insights.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/insights" element={<Insights />} />
      </Route>
    </Routes>
  )
}
