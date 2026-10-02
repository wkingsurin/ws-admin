import React from 'react';
import { ArrowDown, ChevronDown, Plus, Search } from 'lucide-react'; // Базовые иконки

export default function CleanMinimalDashboard() {
  return (
    <div className="min-h-screen bg-white p-6 font-sans text-xs text-slate-700">
      
      {/* ПАНЕЛЬ ДЕЙСТВИЙ (ВЕРХНИЙ ЛЕВЫЙ УГОЛ В ОРИГИНАЛЕ) */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-slate-600 font-medium">Cancel</button>
          <button className="text-slate-400 hover:text-slate-600 font-medium">Hide</button>
          <button className="text-rose-500 hover:text-rose-600 font-medium">Delete</button>
        </div>
        <div className="text-slate-400 font-mono">Environment: Production</div>
      </div>

      {/* СЕТКА ДЕТАЛЕЙ ЗАКАЗА (4 СТОЛБЦА КАК В ОРИГИНАЛЕ) */}
      <div className="mb-8 grid grid-cols-1 gap-8 text-slate-600 sm:grid-cols-4">
        
        {/* Блок 1: Order */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="font-semibold text-slate-900">Order</span>
            <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 border border-emerald-100">Paid</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex"><span className="w-20 text-slate-400">ID:</span> <span className="font-mono text-slate-900">cms0hvxjm006h3wuakzimzot9p</span></div>
            <div className="flex"><span className="w-20 text-slate-400">Number:</span> <span className="font-medium text-slate-800">ORD-1784992471870</span></div>
            <div className="flex"><span className="w-20 text-slate-400">Created at:</span> <span className="text-slate-500">2026-07-25 14:59:19</span></div>
            <div className="flex"><span className="w-20 text-slate-400">Updated at:</span> <span className="text-slate-500">2026-07-25 14:59:19</span></div>
          </div>
        </div>

        {/* Блок 2: Customer */}
        <div>
          <div className="mb-3 font-semibold text-slate-900">Customer</div>
          <div className="space-y-1.5">
            <div className="flex"><span className="w-16 text-slate-400">Id:</span> <span className="font-mono text-slate-500">cms0hvxjm006h3wuakzimzot9p</span></div>
            <div className="flex"><span className="w-16 text-slate-400">Name:</span> <span className="font-medium text-slate-800">Jane Doe</span></div>
            <div className="flex"><span className="w-16 text-slate-400">Email:</span> <span className="text-indigo-600 hover:underline cursor-pointer">janedoe@example.com</span></div>
          </div>
        </div>

        {/* Блок 3: Shipping */}
        <div>
          <div className="mb-3 font-semibold text-slate-900">Shipping</div>
          <div className="space-y-1.5">
            <div className="flex"><span className="w-24 text-slate-400">Address:</span> <span className="text-slate-800">714 Green St, Apt 2B</span></div>
            <div className="flex"><span className="w-24 text-slate-400">City:</span> <span className="text-slate-800">New York</span></div>
            <div className="flex"><span className="w-24 text-slate-400">Country:</span> <span className="text-slate-800">United States</span></div>
            <div className="flex"><span className="w-24 text-slate-400">Postal code:</span> <span className="text-slate-800">CA 94108</span></div>
            <div className="flex"><span className="w-24 text-slate-400">Payment method:</span> <span className="font-medium text-slate-900">CARD</span></div>
            <div className="flex"><span className="w-24 text-slate-400">Delivery method:</span> <span className="text-slate-600">Pick up</span></div>
          </div>
        </div>

        {/* Блок 4: Totals */}
        <div className="bg-slate-50/60 rounded-xl p-4 border border-slate-100">
          <div className="mb-3 font-semibold text-slate-900">Totals</div>
          <div className="space-y-2">
            <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
              <span className="text-slate-400">Total items price:</span> 
              <span className="font-bold text-slate-900 text-sm">$155.80</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Discount amount:</span> 
              <span className="font-mono text-[11px] text-slate-400 block truncate">cms0hvxjm006h3wuakzimzot9p</span>
            </div>
          </div>
        </div>

      </div>

      {/* СТРОКА ПОИСКА И ФИЛЬТРОВ НАД ТАБЛИЦЕЙ */}
      <div className="mb-4 flex items-center justify-between border-t border-slate-200 pt-4">
        <div className="relative w-80">
          <Search size={14} className="absolute top-2 left-2.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Поиск: id / orderNumber / userId / price" 
            className="w-full rounded border border-slate-200 bg-white py-1.5 pl-8 pr-3 outline-none focus:border-slate-400" 
          />
        </div>
        <button className="flex items-center gap-1 rounded bg-slate-900 px-3 py-1.5 font-medium text-white hover:bg-slate-800">
          <Plus size={12} /> Add order
        </button>
      </div>

      {/* СТРОГАЯ ПЛОСКАЯ ТАБЛИЦА */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="p-2 pl-0 font-mono">id</th>
              <th className="p-2 text-slate-900">
                <div className="flex items-center gap-0.5 cursor-pointer">orderNumber <ArrowDown size={10} /></div>
              </th>
              <th className="p-2">userId</th>
              <th className="p-2">username</th>
              <th className="p-2">customerName</th>
              <th className="p-2">customerEmail</th>
              <th className="p-2">address</th>
              <th className="p-2">city</th>
              <th className="p-2">country</th>
              <th className="p-2">postalCode</th>
              <th className="p-2">paymentMethod</th>
              <th className="p-2">deliveryMethod</th>
              <th className="p-2 text-right">price</th>
              <th className="p-2 text-center">isPaid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="p-2 pl-0 font-mono text-slate-400">cms0hvx...</td>
                <td className="p-2 font-mono font-bold text-slate-900">123</td>
                <td className="p-2 font-mono text-slate-400">123465</td>
                <td className="p-2">Jane Doe</td>
                <td className="p-2">Jane Doe</td>
                <td className="p-2 text-slate-400">janedoe@example.com</td>
                <td className="p-2 max-w-[120px] truncate text-slate-400">714 Green St, Apt 2B</td>
                <td className="p-2">New York</td>
                <td className="p-2">United States</td>
                <td className="p-2 font-mono text-slate-400">CA 94108</td>
                <td className="p-2">PayPal</td>
                <td className="p-2">Pick up</td>
                <td className="p-2 text-right font-semibold text-slate-900 font-mono">$77.90</td>
                <td className="p-2 text-center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
