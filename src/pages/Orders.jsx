import OrdersTable from '../components/orders/OrdersTable.jsx'

export default function Orders() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">Track every order from checkout to delivery. Filter by status to spot failed and cancelled orders.</p>
      <OrdersTable />
    </div>
  )
}
