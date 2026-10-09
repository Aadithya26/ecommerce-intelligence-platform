export const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

export const products = [
  { id: 'P001', name: 'Wireless Earbuds Pro', category: 'Electronics', price: 3499, stock: 12, reorderLevel: 40, sold: 482, rating: 4.5, demand: 'High' },
  { id: 'P002', name: 'Smart Fitness Band', category: 'Electronics', price: 2199, stock: 85, reorderLevel: 40, sold: 391, rating: 4.2, demand: 'High' },
  { id: 'P003', name: 'Running Shoes Air', category: 'Fashion', price: 4299, stock: 23, reorderLevel: 30, sold: 276, rating: 4.4, demand: 'Medium' },
  { id: 'P004', name: 'Cotton Casual Shirt', category: 'Fashion', price: 899, stock: 210, reorderLevel: 60, sold: 198, rating: 3.9, demand: 'Medium' },
  { id: 'P005', name: 'Stainless Water Bottle', category: 'Home', price: 649, stock: 340, reorderLevel: 80, sold: 164, rating: 4.6, demand: 'Low' },
  { id: 'P006', name: 'Bluetooth Speaker Mini', category: 'Electronics', price: 1899, stock: 8, reorderLevel: 25, sold: 322, rating: 4.1, demand: 'High' },
  { id: 'P007', name: 'Non-stick Cookware Set', category: 'Home', price: 2799, stock: 64, reorderLevel: 30, sold: 121, rating: 3.8, demand: 'Low' },
  { id: 'P008', name: 'Laptop Backpack 30L', category: 'Accessories', price: 1599, stock: 47, reorderLevel: 35, sold: 233, rating: 4.3, demand: 'Medium' },
]

export const orders = [
  { id: 'ORD-10421', customer: 'Aarav Sharma', product: 'Wireless Earbuds Pro', amount: 3499, status: 'Delivered', date: '09 Oct, 10:42', delivery: 'On time' },
  { id: 'ORD-10422', customer: 'Priya Nair', product: 'Smart Fitness Band', amount: 2199, status: 'Shipped', date: '09 Oct, 10:55', delivery: 'On time' },
  { id: 'ORD-10423', customer: 'Karthik Raja', product: 'Running Shoes Air', amount: 4299, status: 'Shipped', date: '09 Oct, 11:03', delivery: 'Delayed' },
  { id: 'ORD-10424', customer: 'Sneha Iyer', product: 'Cotton Casual Shirt', amount: 899, status: 'Cancelled', date: '09 Oct, 11:10', delivery: '—' },
  { id: 'ORD-10425', customer: 'Rohan Mehta', product: 'Bluetooth Speaker Mini', amount: 1899, status: 'Processing', date: '09 Oct, 11:18', delivery: 'Pending' },
  { id: 'ORD-10426', customer: 'Divya Menon', product: 'Stainless Water Bottle', amount: 649, status: 'Delivered', date: '09 Oct, 11:25', delivery: 'On time' },
  { id: 'ORD-10427', customer: 'Arjun Das', product: 'Laptop Backpack 30L', amount: 1599, status: 'Failed', date: '09 Oct, 11:31', delivery: '—' },
  { id: 'ORD-10428', customer: 'Meera Pillai', product: 'Non-stick Cookware Set', amount: 2799, status: 'Delivered', date: '09 Oct, 11:40', delivery: 'On time' },
  { id: 'ORD-10429', customer: 'Vikram Singh', product: 'Wireless Earbuds Pro', amount: 3499, status: 'Processing', date: '09 Oct, 11:46', delivery: 'Pending' },
  { id: 'ORD-10430', customer: 'Lakshmi Narayan', product: 'Smart Fitness Band', amount: 2199, status: 'Shipped', date: '09 Oct, 11:52', delivery: 'Delayed' },
  { id: 'ORD-10431', customer: 'Imran Khan', product: 'Bluetooth Speaker Mini', amount: 1899, status: 'Delivered', date: '09 Oct, 12:02', delivery: 'On time' },
  { id: 'ORD-10432', customer: 'Anita Joseph', product: 'Running Shoes Air', amount: 4299, status: 'Cancelled', date: '09 Oct, 12:09', delivery: '—' },
  { id: 'ORD-10433', customer: 'Suresh Kumar', product: 'Cotton Casual Shirt', amount: 899, status: 'Delivered', date: '09 Oct, 12:15', delivery: 'On time' },
  { id: 'ORD-10434', customer: 'Pooja Reddy', product: 'Wireless Earbuds Pro', amount: 3499, status: 'Failed', date: '09 Oct, 12:21', delivery: '—' },
]

export const initialKpis = {
  revenue: 482350,
  profit: 118400,
  orders: 1284,
  failedRate: 4.8,
}

export const revenueSeries = [
  { time: '9 AM', revenue: 21000, profit: 5100 },
  { time: '10 AM', revenue: 28500, profit: 7000 },
  { time: '11 AM', revenue: 34200, profit: 8300 },
  { time: '12 PM', revenue: 41800, profit: 10400 },
  { time: '1 PM', revenue: 38900, profit: 9500 },
  { time: '2 PM', revenue: 45600, profit: 11800 },
  { time: '3 PM', revenue: 52300, profit: 13200 },
  { time: '4 PM', revenue: 49800, profit: 12400 },
]

export const initialFeed = [
  { id: 1, text: 'New order ORD-10434 placed for Wireless Earbuds Pro', type: 'order', time: 'just now' },
  { id: 2, text: 'Payment failed for ORD-10427', type: 'failed', time: '1 min ago' },
  { id: 3, text: 'ORD-10423 marked delayed by courier', type: 'delay', time: '3 min ago' },
  { id: 4, text: 'Stock for Bluetooth Speaker Mini dropped to 8 units', type: 'stock', time: '5 min ago' },
]

export const feedTemplates = [
  { text: 'New order placed for Smart Fitness Band', type: 'order' },
  { text: 'New order placed for Wireless Earbuds Pro', type: 'order' },
  { text: 'Order cancelled by customer', type: 'failed' },
  { text: 'Delivery completed in Chennai', type: 'delivered' },
  { text: 'New 5-star rating received', type: 'rating' },
  { text: 'Courier reported delay in Bengaluru route', type: 'delay' },
  { text: 'New order placed for Running Shoes Air', type: 'order' },
]

export const alerts = [
  { id: 1, severity: 'Critical', title: 'Stock-out risk: Wireless Earbuds Pro', detail: 'Sales up 62% in the last 2 hours. 12 units left, about 3 hours of stock at the current rate.', time: '2 min ago' },
  { id: 2, severity: 'Critical', title: 'Stock-out risk: Bluetooth Speaker Mini', detail: 'Only 8 units left. Demand is high and reorder level is 25.', time: '6 min ago' },
  { id: 3, severity: 'Warning', title: 'Delivery delays on the Bengaluru route', detail: '2 shipments are running more than 24 hours late.', time: '14 min ago' },
  { id: 4, severity: 'Warning', title: 'Sales spike: Smart Fitness Band', detail: 'Orders are 38% above the hourly average.', time: '22 min ago' },
  { id: 5, severity: 'Warning', title: 'Unusual transactions detected', detail: '3 failed payments from the same card in 5 minutes.', time: '31 min ago' },
  { id: 6, severity: 'Info', title: 'Declining sales: Non-stick Cookware Set', detail: 'Sales dropped 18% compared with last week.', time: '1 hr ago' },
]

export const forecast = [
  { day: 'Mon', actual: 320, forecast: 310 },
  { day: 'Tue', actual: 345, forecast: 338 },
  { day: 'Wed', actual: 372, forecast: 365 },
  { day: 'Thu', actual: 410, forecast: 398 },
  { day: 'Fri', actual: 455, forecast: 440 },
  { day: 'Sat', forecast: 492 },
  { day: 'Sun', forecast: 528 },
  { day: 'Mon+', forecast: 560 },
]

export const insights = [
  { id: 1, title: 'Restock Wireless Earbuds Pro today', body: 'Predicted demand for the next 7 days is about 620 units. Current stock covers less than 1 day.', impact: 'High', tag: 'Inventory' },
  { id: 2, title: 'Bundle slow-moving cookware', body: 'Pair Non-stick Cookware Set with Stainless Water Bottle at 10% off to recover declining sales.', impact: 'Medium', tag: 'Sales' },
  { id: 3, title: 'Switch courier on the Bengaluru route', body: 'Delayed deliveries on this route are 3x the average and may lower ratings.', impact: 'High', tag: 'Delivery' },
  { id: 4, title: 'Review payment gateway failures', body: 'Failed orders are at 4.8%. Most failures happen between 11 AM and 1 PM.', impact: 'Medium', tag: 'Risk' },
]
