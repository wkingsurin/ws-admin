import React from 'react';
import { Search, Filter, ArrowUpDown, ChevronDown, Download, Layers } from 'lucide-react';

export default function CompactOrderDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans text-xs text-gray-700">
      
      {/* МИНИМАЛИСТИЧНЫЙ ХЕДЕР С БЫСТРОЙ СТАТИСТИКОЙ */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-3">
        <div className="flex items-center gap-6">
          <h1 className="text-base font-bold text-gray-900 flex items-center gap-1.5">
            <Layers size={16} className="text-indigo-600" /> Диспетчер Заказов
          </h1>
          <div className="flex gap-4 border-l border-gray-200 pl-4">
            <div><span className="text-gray-400">Всего сегодня:</span> <span className="font-semibold text-gray-900">142</span></div>
            <div><span className="text-gray-400">Сумма:</span> <span className="font-semibold text-emerald-600">$12,450.00</span></div>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5">
          <button className="rounded bg-white border border-gray-200 px-2.5 py-1.5 font-medium hover:bg-gray-50">Скрыть</button>
          <button className="rounded bg-white border border-gray-200 px-2.5 py-1.5 font-medium text-rose-600 hover:bg-rose-50">Удалить</button>
          <button className="rounded bg-indigo-600 px-3 py-1.5 font-medium text-white hover:bg-indigo-700">Новый заказ</button>
        </div>
      </div>

      {/* ПАНЕЛЬ ТЕКУЩЕГО ЗАКАЗА (ПЛОСКАЯ, СТРОЧНАЯ) */}
      <div className="mb-4 grid grid-cols-1 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
        <div className="p-3">
          <div className="text-gray-400 font-medium mb-1">ТЕКУЩИЙ ЗАКАЗ</div>
          <div className="font-bold text-gray-900">ORD-1784992471870</div>
          <div className="text-[10px] font-mono text-gray-400 truncate">cms0hvxjm006h3wuak...</div>
        </div>
        <div className="p-3">
          <div className="text-gray-400 font-medium mb-1">КЛИЕНТ</div>
          <div className="font-semibold text-gray-900">Jane Doe</div>
          <div className="text-gray-500 truncate">janedoe@example.com</div>
        </div>
        <div className="p-3">
          <div className="text-gray-400 font-medium mb-1">ДОСТАВКА (Pick up)</div>
          <div className="text-gray-900 font-medium truncate">714 Green St, New York</div>
          <div className="flex items-center gap-2 mt-0.5"><span className="text-[10px] bg-gray-100 px-1 rounded text-gray-600">CARD</span></div>
        </div>
        <div className="p-3 bg-gray-50/50">
          <div className="text-gray-400 font-medium mb-1">ИТОГО К ОПЛАТЕ</div>
          <div className="text-base font-bold text-gray-900">$155.80</div>
          <span className="inline-block rounded bg-emerald-100 px-1.5 text-[10px] font-medium text-emerald-800">Оплачен</span>
        </div>
      </div>

      {/* ТАБЛИЦА С ИНТЕГРИРОВАННЫМИ ФИЛЬТРАМИ В ШАПКАХ */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2">
          <div className="relative w-72">
            <Search size={14} className="absolute top-2 left-2 text-gray-400" />
            <input type="text" placeholder="Быстрый поиск..." className="w-full rounded border border-gray-200 bg-white py-1 pl-7 pr-2 outline-none focus:border-indigo-500" />
          </div>
          <button className="flex items-center gap-1 rounded border border-gray-200 bg-white px-2 py-1 text-gray-600 hover:bg-gray-50">
            <Download size={12} /> Экспорт (.csv)
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead className="bg-gray-100 text-[11px] font-semibold text-gray-600 border-b border-gray-200">
              <tr>
                <th className="p-2 border-r border-gray-200">ID</th>
                <th className="p-2 border-r border-gray-200 cursor-pointer hover:bg-gray-200">
                  <div className="flex items-center justify-between">Заказ <ArrowUpDown size={10} /></div>
                </th>
                <th className="p-2 border-r border-gray-200">User ID</th>
                <th className="p-2 border-r border-gray-200">Покупатель</th>
                <th className="p-2 border-r border-gray-200">Email</th>
                <th className="p-2 border-r border-gray-200">Адрес доставки</th>
                <th className="p-2 border-r border-gray-200 cursor-pointer hover:bg-gray-200">
                  <div className="flex items-center justify-between">Город <Filter size={10} /></div>
                </th>
                <th className="p-2 border-r border-gray-200">Оплата</th>
                <th className="p-2 border-r border-gray-200 text-right">Сумма</th>
                <th className="p-2 text-center">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
              {[...Array(8)].map((_, i) => (
                <tr key={i} className="hover:bg-amber-50/40 odd:bg-white even:bg-gray-50/30 transition-colors">
                  <td className="p-2 text-gray-400 border-r border-gray-100">cms0hvx...</td>
                  <td className="p-2 font-sans font-medium text-gray-900 border-r border-gray-100">123</td>
                  <td className="p-2 text-gray-500 border-r border-gray-100">123465</td>
                  <td className="p-2 font-sans font-medium text-gray-800 border-r border-gray-100">Jane Doe</td>
                  <td className="p-2 font-sans text-gray-500 border-r border-gray-100">janedoe@...</td>
                  <td className="p-2 font-sans text-gray-500 max-w-[140px] truncate border-r border-gray-100">714 Green St, Apt 2B</td>
                  <td className="p-2 font-sans text-gray-700 border-r border-gray-100">New York</td>
                  <td className="p-2 font-sans border-r border-gray-100">PayPal</td>
                  <td className="p-2 font-sans text-right font-bold text-gray-900 border-r border-gray-100">$77.90</td>
                  <td className="p-2 text-center font-sans">
                    <span className="rounded bg-emerald-50 px-1 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">Paid</span>
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
