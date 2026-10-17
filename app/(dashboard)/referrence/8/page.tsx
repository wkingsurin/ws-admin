import React from "react";
import { X, Plus, ChevronDown, Image, Trash2 } from "lucide-react";

export default function SoftGrayAddProductModalAdvanced() {
  return (
    // ОВЕРЛЕЙ МОДАЛЬНОГО ОКНА С МЯГКИМ РАЗМЫТИЕМ ЗАДНЕГО ПЛАНА
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/10 p-4 font-mono text-[11px] text-slate-600 antialiased backdrop-blur-sm">
      {/* КОНТЕЙНЕР МОДАЛЬНОГО ОКНА */}
      <div className="relative w-full max-w-4xl rounded-xl border border-slate-200/80 bg-white p-6 shadow-xl">
        {/* ХЕДЕР ОКНА */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-3 font-sans text-xs">
          <h3 className="text-sm font-bold text-slate-900">Add product</h3>
          <button className="rounded-md p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition-colors">
            <X size={14} />
          </button>
        </div>

        {/* ДВУХКОЛОНОЧНЫЙ КОНТЕНТ (СТРУКТУРА ОРИГИНАЛА СОХРАНЕНА) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ЛЕВАЯ КОЛОНКА: Блок модификаторов цвета и размеров */}
          <div className="rounded-xl border border-slate-200/60 bg-slate-50/40 p-4 space-y-4">
            <span className="font-sans text-xs font-bold text-slate-900 block">
              Colors and variants
            </span>

            {/* Свернутый цвет: WHITE */}
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-1.5">
              <span className="font-medium text-slate-700">WHITE</span>
              <button className="text-slate-400 hover:text-rose-500 transition-colors">
                <X size={12} />
              </button>
            </div>

            {/* Активный цвет: BEIGE */}
            <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                <span className="font-bold text-slate-800">BEIGE</span>
                <button className="text-slate-400 hover:text-rose-500 transition-colors">
                  <X size={12} />
                </button>
              </div>

              {/* Загрузка медиа и превью */}
              <div className="flex items-center gap-3">
                <div className="h-16 w-14 rounded-lg border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:border-slate-400 transition-colors">
                  <Image size={14} strokeWidth={1.5} />
                  <span className="text-[9px] font-sans mt-1">Upload</span>
                </div>
                <div className="h-16 w-14 rounded-lg border border-slate-100 overflow-hidden bg-slate-100">
                  <img
                    src="https://unsplash.com"
                    alt="Beige variant preview"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Вложенная таблица: Variants of size */}
              <div className="overflow-hidden rounded-lg border border-slate-100">
                <div className="bg-slate-50/80 px-2.5 py-1.5 font-sans text-[10px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                  Variants of size
                </div>
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-slate-50/30 text-[9px] uppercase font-bold text-slate-400 border-b border-slate-100">
                    <tr>
                      <th className="p-2 pl-3">Size</th>
                      <th className="p-2">Price</th>
                      <th className="p-2">OldPrice</th>
                      <th className="p-2">Stock</th>
                      <th className="p-2 pr-3 text-center w-8"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/40">
                      <td className="p-2 pl-3 font-bold font-sans">S</td>
                      <td className="p-2 font-medium text-slate-800">7790</td>
                      <td className="p-2 text-slate-400 line-through">9790</td>
                      <td className="p-2 text-slate-500 font-bold">10</td>
                      <td className="p-2 pr-3 text-center">
                        <button className="text-slate-300 hover:text-rose-500">
                          <Trash2 size={11} />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/40">
                      <td className="p-2 pl-3 font-bold font-sans">M</td>
                      <td className="p-2 font-medium text-slate-800">7790</td>
                      <td className="p-2 text-slate-400 line-through">9790</td>
                      <td className="p-2 text-slate-500 font-bold">8</td>
                      <td className="p-2 pr-3 text-center">
                        <button className="text-slate-300 hover:text-rose-500">
                          <Trash2 size={11} />
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/40">
                      <td className="p-2 pl-3 font-bold font-sans">L</td>
                      <td className="p-2 font-medium text-slate-800">0</td>
                      <td className="p-2 text-slate-300">—</td>
                      <td className="p-2 text-slate-500 font-bold">3</td>
                      <td className="p-2 pr-3 text-center">
                        <button className="text-slate-300 hover:text-rose-500">
                          <Trash2 size={11} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Кнопка внутри карточки цвета: Add size */}
              <button className="w-full rounded-md border border-slate-200 bg-white py-1.5 text-slate-500 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 font-sans text-xs">
                <Plus size={12} /> Add size
              </button>
            </div>

            {/* Главная кнопка: Add color */}
            <button className="w-full rounded-lg border border-dashed border-slate-300 bg-white py-2 text-slate-500 hover:border-slate-400 hover:text-slate-700 transition-all flex items-center justify-center gap-1.5 font-sans text-xs font-medium">
              <Plus size={13} /> Add color
            </button>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Поля ввода параметров */}
          <div className="space-y-4">
            {/* Ряд: Brand & Category */}
            <div className="grid grid-cols-2 gap-4 font-sans text-xs">
              <div>
                <label className="block font-medium text-slate-400 mb-1">
                  Brand
                </label>
                <div className="relative">
                  <select className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 font-mono text-[11px] text-slate-700 appearance-none outline-none focus:border-slate-400 focus:bg-white transition-all">
                    <option>Select brand</option>
                  </select>
                  <ChevronDown
                    size={12}
                    className="absolute right-3 top-2.5 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-slate-400 mb-1">
                  Category
                </label>
                <div className="relative">
                  <select className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 font-mono text-[11px] text-slate-700 appearance-none outline-none focus:border-slate-400 focus:bg-white transition-all">
                    <option>Select category</option>
                  </select>
                  <ChevronDown
                    size={12}
                    className="absolute right-3 top-2.5 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Поле: Title */}
            <div className="font-sans text-xs">
              <label className="block font-medium text-slate-400 mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter product title"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 font-mono text-[11px] text-slate-700 outline-none focus:border-slate-400 focus:bg-white transition-all"
              />
            </div>

            {/* Поле: Description */}
            <div className="font-sans text-xs">
              <label className="block font-medium text-slate-400 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Enter product description"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 font-mono text-[11px] text-slate-700 outline-none focus:border-slate-400 focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Чекбоксы параметров */}
            <div className="flex gap-6 pt-1 font-sans text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 font-medium">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-0"
                />
                <span>isAvailable</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 font-medium">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-0"
                />
                <span>isNew</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
