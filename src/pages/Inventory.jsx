import InventoryTable from '../components/inventory/InventoryTable.jsx'

export default function Inventory() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">Products below their reorder level are highlighted in red.</p>
      <InventoryTable />
    </div>
  )
}
