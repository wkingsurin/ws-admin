import { Search, Plus } from "lucide-react";

export default function SoftGrayDashboard() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-mono text-[11px] text-gray-600 antialiased">
      {/* КНОПКИ УПРАВЛЕНИЯ */}
      <div className="mb-6 flex gap-2 border-b border-gray-200/60 pb-3 font-sans text-xs">
        <button className="rounded bg-white border border-gray-200 px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="rounded bg-white border border-gray-200 px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors">
          Hide
        </button>
        <button className="rounded bg-red-50 border border-red-100 px-3 py-1 text-red-600 hover:bg-red-100/60 transition-colors">
          Delete
        </button>
      </div>

      {/* ВЕРХНИЕ ИНФО-БЛОКИ */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-4 font-sans text-xs">
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <div className="font-bold text-gray-900 mb-2 flex items-center gap-1.5">
            Order{" "}
            <span className="text-[10px] font-normal px-1 bg-emerald-100 text-emerald-800 rounded">
              Paid
            </span>
          </div>
          <div className="space-y-1 text-gray-500 font-mono text-[11px]">
            <div>id: cms0hvxjm006h3...</div>
            <div className="text-gray-900 font-sans">num: ORD-178499247</div>
            <div>created: 2026-07-25</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <div className="font-bold text-gray-900 mb-2">Customer</div>
          <div className="space-y-1 text-gray-600">
            <div className="font-medium text-gray-900">Jane Doe</div>
            <div className="text-gray-400 font-mono text-[11px]">
              id: cms0hvxjm...
            </div>
            <div className="text-gray-500 break-all">janedoe@example.com</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <div className="font-bold text-gray-900 mb-2">Shipping</div>
          <div className="space-y-0.5 text-gray-500">
            <div className="text-gray-900 font-medium">
              714 Green St, Apt 2B
            </div>
            <div>New York, US (CA 94108)</div>
            <div className="pt-1.5 flex gap-1 font-mono text-[10px]">
              <span className="bg-gray-100 px-1 text-gray-600">CARD</span>
              <span className="bg-gray-100 px-1 text-gray-600">Pick up</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-xl shadow-2xs">
          <div className="text-gray-400 font-medium mb-1">Totals</div>
          <div className="text-2xl font-light text-white">$155.80</div>
          <div className="mt-2 text-[10px] text-gray-400 font-mono truncate">
            Code: cms0hvxjm006...
          </div>
        </div>
      </div>

      {/* ТАБЛИЧНАЯ ЗОНА */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-2xs overflow-hidden">
        {/* Инпут поиска */}
        <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center font-sans text-xs">
          <div className="relative w-72">
            <Search
              size={13}
              className="absolute top-2 left-2.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Поиск по параметрам..."
              className="w-full bg-white border border-gray-200 rounded px-2.5 py-1 pl-8 outline-none text-xs focus:border-gray-400"
            />
          </div>
          <button className="flex items-center gap-1 border border-gray-200 bg-white rounded px-2.5 py-1 text-gray-700 hover:bg-gray-50">
            <Plus size={12} /> Add row
          </button>
        </div>

        {/* Сетка строк таблицы */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-50/80 text-[10px] uppercase font-semibold text-gray-400 border-b border-gray-200/60">
              <tr>
                <th className="p-2.5 pl-4">id</th>
                <th className="p-2.5 text-gray-900 font-bold">orderNumber</th>
                <th className="p-2.5">userId</th>
                <th className="p-2.5">username</th>
                <th className="p-2.5">customerEmail</th>
                <th className="p-2.5">address</th>
                <th className="p-2.5">city</th>
                <th className="p-2.5">method</th>
                <th className="p-2.5 text-right pr-4">price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono text-[11px] text-gray-500">
              {[...Array(6)].map((_, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50/60 odd:bg-white even:bg-gray-50/20 transition-colors"
                >
                  <td className="p-2.5 pl-4 text-gray-300">cms0hvx...</td>
                  <td className="p-2.5 font-bold text-gray-800">123</td>
                  <td className="p-2.5 text-gray-400">123465</td>
                  <td className="p-2.5 font-sans text-gray-700">Jane Doe</td>
                  <td className="p-2.5 font-sans">janedoe@example.com</td>
                  <td className="p-2.5 font-sans max-w-[150px] truncate">
                    714 Green St, Apt 2B
                  </td>
                  <td className="p-2.5 font-sans text-gray-700">New York</td>
                  <td className="p-2.5 font-sans">
                    <span className="border border-gray-200 px-1 text-[10px] rounded bg-white">
                      PayPal
                    </span>
                  </td>
                  <td className="p-2.5 text-right pr-4 font-bold text-gray-900">
                    $77.90
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
