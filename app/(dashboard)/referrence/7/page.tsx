import React from "react";
import {
  Search,
  Plus,
  ArrowLeft,
  Eye,
  Trash2,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

export default function OrderDetailsDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 font-sans text-xs text-slate-600 antialiased">
      {/* КНОПКИ УПРАВЛЕНИЯ ВЕРХНИЕ */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-200/60 pb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <ArrowLeft size={14} /> Cancel
          </button>
          <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            Hide
          </button>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg bg-rose-50 text-rose-600 px-3 py-1.5 font-medium hover:bg-rose-100 transition-colors">
          <Trash2 size={14} /> Delete Order
        </button>
      </div>

      {/* ИНФОРМАЦИОННЫЕ ПАНЕЛИ (4 СТОЛБЦА) */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-4">
        {/* Order */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-bold text-slate-900">Order</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-100">
              Paid
            </span>
          </div>
          <div className="space-y-1.5 font-mono text-[11px] text-slate-500">
            <div className="flex justify-between">
              <span>id:</span>{" "}
              <span className="text-slate-800">cms0hvxjm...zt9p</span>
            </div>
            <div className="flex justify-between font-sans">
              <span>Number:</span>{" "}
              <span className="font-semibold text-slate-900">
                ORD-1784992471870
              </span>
            </div>
            <div className="flex justify-between">
              <span>Method:</span>{" "}
              <span className="font-sans font-medium text-slate-800">CARD</span>
            </div>
            <div className="flex justify-between">
              <span>Created:</span>{" "}
              <span className="text-slate-700">2026-07-25 14:59</span>
            </div>
          </div>
        </div>

        {/* Customer */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="mb-3 font-bold text-slate-900">Customer</div>
          <div className="space-y-1.5">
            <div className="flex justify-between font-mono text-[11px] text-slate-400">
              <span>id:</span>{" "}
              <span className="text-slate-600">cms0hvxjm...</span>
            </div>
            <div className="flex justify-between">
              <span>Name:</span>{" "}
              <span className="font-semibold text-slate-800">Jane Doe</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Email:</span>{" "}
              <span className="text-indigo-600 truncate hover:underline">
                janedoe@example.com
              </span>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <div className="mb-3 font-bold text-slate-900">Shipping</div>
          <div className="space-y-1 text-slate-500">
            <div className="font-semibold text-slate-800">
              714 Green St, Apt 2B
            </div>
            <div>New York, United States</div>
            <div className="text-slate-400 font-mono text-[11px]">
              Postal: CA 94108
            </div>
            <div className="pt-1 text-[11px] font-medium text-indigo-600">
              Method: Pick up
            </div>
          </div>
        </div>

        {/* Totals */}
        <div className="bg-slate-900 text-white p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-slate-400 font-medium tracking-wider uppercase text-[10px]">
              Totals
            </div>
            <div className="mt-1 text-3xl font-light tracking-tight">
              $155.<span className="text-xl font-medium">80</span>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-800 pt-2 text-[11px] text-slate-400 font-mono flex justify-between">
            <span>Discount:</span>
            <span className="text-white">0</span>
          </div>
        </div>
      </div>

      {/* ТАБЛИЦА С ТОВАРАМИ И МОДИФИКАТОРАМИ */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
        {/* Поиск и добавление позиций */}
        <div className="p-3.5 border-b border-slate-100 bg-slate-50/50 flex flex-wrap justify-between items-center gap-3">
          <div className="relative w-80">
            <Search
              size={14}
              className="absolute top-2.5 left-3 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by id / variantId / sku / title..."
              className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-3 text-xs outline-none focus:border-slate-400 transition-all"
            />
          </div>
          <button className="flex items-center gap-1.5 bg-slate-900 text-white rounded-lg px-3 py-1.5 font-medium hover:bg-slate-800 transition-colors shadow-xs">
            <Plus size={14} /> Add variant
          </button>
        </div>

        {/* Контент списка вариантов */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-slate-50 text-[10px] uppercase font-semibold text-slate-500 border-b border-slate-200">
              <tr>
                <th className="p-3 pl-4 text-center w-12">Page</th>
                <th className="p-3 w-16">Image</th>
                <th className="p-3">Product ID / Variant ID</th>
                <th className="p-3">SKU</th>
                <th className="p-3 font-semibold text-slate-800">Title</th>
                <th className="p-3 w-28">Color</th>
                <th className="p-3 w-24">Size</th>
                <th className="p-3 text-right w-24">Price</th>
                <th className="p-3 text-center w-20">Quantity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {/* Строка 1: Худи */}
              <tr className="hover:bg-slate-50/60 bg-white transition-colors">
                <td className="p-3 pl-4 text-center">
                  <button
                    className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-indigo-600"
                    title="View details"
                  >
                    <Eye size={14} />
                  </button>
                </td>
                <td className="p-3">
                  <div className="h-10 w-10 rounded-lg border border-slate-100 bg-slate-50 p-1 flex items-center justify-center">
                    <img
                      src="https://unsplash.com"
                      alt="product"
                      className="h-full object-contain rounded"
                    />
                  </div>
                </td>
                <td className="p-3 font-mono text-[11px] text-slate-400">
                  <div
                    className="truncate w-32"
                    title="cms0hvxjm006h3wuakzimzot9p"
                  >
                    p: cms0hvxjm...
                  </div>
                  <div
                    className="truncate w-32 text-slate-400/80"
                    title="cms0hvybj006w3wuaxz8vrp21"
                  >
                    v: cms0hvybj...
                  </div>
                </td>
                <td className="p-3 font-mono text-slate-500">HOOD-UA-WHT-50</td>
                <td className="p-3 font-medium text-slate-800">
                  Under Armour Hoodie
                </td>
                <td className="p-3">
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 appearance-none pr-6 font-medium text-slate-700 outline-none focus:border-slate-400">
                      <option>White</option>
                      <option>Black</option>
                    </select>
                    <ChevronDown
                      size={12}
                      className="absolute right-2 top-2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 appearance-none pr-6 font-mono text-slate-700 outline-none focus:border-slate-400">
                      <option>50</option>
                      <option>48</option>
                    </select>
                    <ChevronDown
                      size={12}
                      className="absolute right-2 top-2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </td>
                <td className="p-3 text-right font-bold text-slate-900 font-mono">
                  $77.90
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-full text-center bg-slate-50 border border-slate-200 rounded py-1 font-mono font-medium outline-none focus:border-slate-400"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
