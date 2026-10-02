import React from "react";
import {
  Search,
  Plus,
  Trash,
  Shield,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

export default function StripeStyleDetailDashboard() {
  return (
    <div className="min-h-screen bg-[#fcfdfd] p-8 font-sans text-xs antialiased text-slate-600">
      {/* СИСТЕМНЫЙ ХЕДЕР С ТЕКУЩИМ СТАТУСОМ */}
      <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{" "}
            Сделка полностью оплачена
          </div>
          <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
            Спецификация заказа ORD-17849924
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded border border-slate-200 bg-white px-2.5 py-1.5 font-medium text-slate-600 hover:bg-slate-50">
            Hide from log
          </button>
          <button className="rounded bg-rose-600 px-3 py-1.5 font-medium text-white hover:bg-rose-700 shadow-xs">
            Cancel order
          </button>
        </div>
      </div>

      {/* ОРИГИНАЛЬНАЯ СЕТКА ХАРАКТЕРИСТИК (СПЛЮЩЕННАЯ И ОПРЯТНАЯ) */}
      <div className="mb-8 grid grid-cols-1 gap-4 border border-slate-200 rounded-xl bg-white p-5 shadow-xs md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {/* Клеть 1 */}
        <div className="pb-3 md:pb-0 md:pr-4">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Основное
          </div>
          <div className="space-y-1 font-mono text-[11px]">
            <div>
              <span className="text-slate-400 font-sans">ID:</span>{" "}
              cms0hvxjm006h3wuakz
            </div>
            <div className="text-slate-900 font-sans font-medium">
              №: ORD-1784992471870
            </div>
            <div className="text-slate-500 font-sans">Тип: CARD (Pick up)</div>
          </div>
        </div>

        {/* Клеть 2 */}
        <div className="py-3 md:py-0 md:px-4">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Покупатель
          </div>
          <div className="text-sm font-semibold text-slate-800">Jane Doe</div>
          <div className="text-indigo-600 mt-0.5 hover:underline cursor-pointer">
            janedoe@example.com
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-1">
            id: cms0hvxjm0...
          </div>
        </div>

        {/* Клеть 3 */}
        <div className="py-3 md:py-0 md:px-4">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Адрес отгрузки
          </div>
          <div className="font-medium text-slate-800">714 Green St, Apt 2B</div>
          <div className="text-slate-500">New York, United States</div>
          <div className="text-slate-400 font-mono mt-0.5">Zip: CA 94108</div>
        </div>

        {/* Клеть 4 */}
        <div className="pt-3 md:pt-0 md:pl-4 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Финальный баланс
            </div>
            <div className="text-2xl font-semibold tracking-tight text-slate-900">
              $155.80
            </div>
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-2">
            Discount code applied
          </div>
        </div>
      </div>

      {/* ТАБЛИЦА ТОВАРНЫХ НАИМЕНОВАНИЙ */}
      <div className="border border-slate-200 rounded-xl bg-white shadow-xs overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 bg-[#fafafa] px-4 py-3">
          <div className="relative w-72">
            <Search
              size={13}
              className="absolute top-2.5 left-3 text-slate-400"
            />
            <input
              type="text"
              placeholder="Поиск вариантов в таблице..."
              className="w-full rounded border border-slate-200 bg-white py-1 pl-8 pr-3 text-xs outline-none focus:border-slate-400"
            />
          </div>
          <button className="flex items-center gap-1 rounded bg-slate-900 px-2.5 py-1 text-xs text-white hover:bg-slate-800">
            <Plus size={12} /> Add variant
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#fcfcfc] text-[10px] font-semibold text-slate-400 border-b border-slate-200">
              <tr>
                <th className="p-3 pl-4 text-center">Action</th>
                <th className="p-3">Превью</th>
                <th className="p-3">Связи (ProductID / VariantID)</th>
                <th className="p-3">Артикул SKU</th>
                <th className="p-3 text-slate-800 font-bold">
                  Наименование товара
                </th>
                <th className="p-3">Цвет</th>
                <th className="p-3">Размер</th>
                <th className="p-3 text-right">Цена товара</th>
                <th className="p-3 text-center">Кол-во</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {[...Array(3)].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                  <td className="p-3 pl-4 text-center">
                    <button className="text-slate-400 hover:text-indigo-600 font-medium">
                      View
                    </button>
                  </td>
                  <td className="p-3">
                    <img
                      src="https://unsplash.com"
                      alt="item"
                      className="h-8 w-8 rounded border border-slate-100 object-contain p-0.5 bg-slate-50"
                    />
                  </td>
                  <td className="p-3 font-mono text-[10px] text-slate-400 leading-tight">
                    <div>p: cms0hw77900e33w...</div>
                    <div className="text-slate-400/70">
                      v: cms0hw8lz00fa3w...
                    </div>
                  </td>
                  <td className="p-3 font-mono text-slate-500">
                    SNRK-ADST-BLE-41
                  </td>
                  <td className="p-3 font-medium text-slate-900">
                    Adidas Sports Sneakers
                  </td>
                  <td className="p-3">
                    <div className="inline-flex items-center gap-1.5 rounded border border-slate-200 bg-white px-2 py-0.5">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>{" "}
                      Blue{" "}
                      <ChevronDown size={10} className="text-slate-400 ml-1" />
                    </div>
                  </td>
                  <td className="p-3 font-mono text-slate-800 font-medium">
                    <div className="inline-flex items-center border border-slate-200 bg-white px-2 py-0.5 rounded">
                      41{" "}
                      <ChevronDown size={10} className="text-slate-400 ml-1" />
                    </div>
                  </td>
                  <td className="p-3 text-right font-bold text-slate-900 font-mono">
                    $77.90
                  </td>
                  <td className="p-3 text-center">
                    <span className="font-mono bg-slate-50 border border-slate-200 px-2 py-0.5 rounded font-bold text-slate-800">
                      1
                    </span>
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
