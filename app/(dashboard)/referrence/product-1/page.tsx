import React from "react";
import { Search, Plus, Eye, ChevronDown } from "lucide-react"; // Базовые иконки

export default function SoftGrayProductDashboard() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 font-mono text-[11px] text-gray-600 antialiased">
      {/* ВЕРХНИЕ КНОПКИ УПРАВЛЕНИЯ */}
      <div className="mb-6 flex gap-2 border-b border-gray-200/60 pb-3 font-sans text-xs">
        <button className="rounded bg-white border border-gray-200 px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors">
          Hide
        </button>
        <button className="rounded bg-red-50 border border-red-100 px-3 py-1 text-red-600 hover:bg-red-100/60 transition-colors">
          Delete
        </button>
      </div>

      {/* КАРТОЧКА ТОВАРА (PRODUCT INFO BLOCK) */}
      <div className="mb-8 grid grid-cols-1 gap-6 bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs sm:grid-cols-4 font-sans text-xs">
        {/* Левая колонка: Большое превью товара */}
        <div className="sm:col-span-1 border border-gray-100 bg-gray-50/30 rounded-lg p-2 flex items-center justify-center aspect-square max-h-[220px]">
          <img
            src="https://unsplash.com"
            alt="Product Preview"
            className="h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Правая колонка: Детальные характеристики (Занимает 3 части из 4) */}
        <div className="sm:col-span-3 flex flex-col justify-between pl-2">
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">
              Product Specification
            </div>
            <h2 className="text-base font-bold text-gray-900 mb-4">
              Under Armour Hoodie
            </h2>

            {/* Сетка ключ-значение в строгом монохромном стиле */}
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 font-mono text-[11px] text-gray-500">
              <div className="flex">
                <span className="w-24 text-gray-400 font-sans">id:</span>{" "}
                <span className="text-gray-900">
                  cms0hvxjm006h3wuakzimzot9p
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400 font-sans">Brand:</span>{" "}
                <span className="text-gray-800 font-sans font-medium">
                  Unuder Armour
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400 font-sans">Category:</span>{" "}
                <span className="text-gray-800 font-sans">hoodie</span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400 font-sans">Stock:</span>{" "}
                <span className="text-gray-900 font-bold">7</span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400 font-sans">Price:</span>{" "}
                <span className="text-gray-900 font-sans font-bold text-xs">
                  7790
                </span>
              </div>
              <div className="flex">
                <span className="w-24 text-gray-400 font-sans">Old price:</span>{" "}
                <span className="text-gray-400 line-through">9790</span>
              </div>
            </div>
          </div>

          {/* Временные метки внизу карточки */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-x-6 text-[10px] font-mono text-gray-400">
            <div>Created at: 2026-07-25 14:59:19</div>
            <div>Updated at: 2026-07-25 14:59:19</div>
          </div>
        </div>
      </div>

      {/* ТАБЛИЧНАЯ ЗОНА ВАРИАНТОВ (VARIANTS TABLE) */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-2xs overflow-hidden">
        {/* Строка управления над таблицей */}
        <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center gap-4 font-sans text-xs">
          <div className="relative w-72">
            <Search
              size={13}
              className="absolute top-2.5 left-2.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by id / orderNumber / userId / price"
              className="w-full bg-white border border-gray-200 rounded px-2.5 py-1 pl-8 outline-none text-xs focus:border-gray-400 transition-all"
            />
          </div>
          <button className="flex items-center gap-1 border border-gray-200 bg-white rounded px-2.5 py-1 text-gray-700 hover:bg-gray-50 transition-colors">
            <Plus size={12} /> Add variant
          </button>
        </div>

        {/* Сетка таблицы вариантов */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-50/80 text-[10px] uppercase font-semibold text-gray-400 border-b border-gray-200/60">
              <tr>
                <th className="p-2.5 pl-4 text-center w-12">page</th>
                <th className="p-2.5">id</th>
                <th className="p-2.5 text-gray-900 font-bold">sku</th>
                <th className="p-2.5">colorId</th>
                <th className="p-2.5">size</th>
                <th className="p-2.5 w-24">price</th>
                <th className="p-2.5 w-24">oldPrice</th>
                <th className="p-2.5 w-20 text-center pr-4">stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono text-[11px] text-gray-500">
              <tr className="hover:bg-gray-50/60 bg-white transition-colors">
                <td className="p-2.5 pl-4 text-center">
                  <button
                    className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700"
                    title="View variant"
                  >
                    <Eye size={13} />
                  </button>
                </td>
                <td
                  className="p-2.5 text-gray-400 max-w-[120px] truncate"
                  title="cms0hvp9e001i3wua"
                >
                  cms0hvp9e001i3wuai8r976pj
                </td>
                <td className="p-2.5 font-bold text-gray-800">
                  CAP-BS-BLK-One-size
                </td>
                <td
                  className="p-2.5 text-gray-400 max-w-[140px] truncate"
                  title="cms0hvnn4000m3wua"
                >
                  cms0hvnn4000m3wua4ry2omfg
                </td>
                <td className="p-2.5">
                  <div className="inline-flex items-center gap-1 border border-gray-200 bg-white px-2 py-0.5 rounded font-sans text-[11px]">
                    One-size <ChevronDown size={10} className="text-gray-400" />
                  </div>
                </td>
                <td className="p-2.5">
                  <div className="inline-flex items-center gap-1 border border-gray-200 bg-white px-2 py-0.5 rounded text-gray-800 font-bold">
                    7790 <ChevronDown size={10} className="text-gray-400" />
                  </div>
                </td>
                <td className="p-2.5">
                  <div className="inline-flex items-center gap-1 border border-gray-200 bg-white px-2 py-0.5 rounded text-gray-400 line-through">
                    9790 <ChevronDown size={10} className="text-gray-400" />
                  </div>
                </td>
                <td className="p-2.5 text-center pr-4">
                  <div className="inline-flex items-center gap-1 border border-gray-200 bg-white px-2 py-0.5 rounded font-bold text-gray-700">
                    1 <ChevronDown size={10} className="text-gray-400" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
