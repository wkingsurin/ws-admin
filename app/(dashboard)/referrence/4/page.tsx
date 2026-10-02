import React from 'react';
import { Search, SlidersHorizontal, ArrowUpRight, Copy, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function GlassTechDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/70 p-6 font-sans antialiased text-slate-600 selection:bg-indigo-500/10">
      
      {/* ХЕДЕР С ЭФФЕКТОМ СТЁКЛЫШКА */}
      <div className="sticky top-0 z-10 mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white shadow-sm shadow-indigo-200">
            <Layers size={18} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Console</div>
            <h1 className="text-base font-bold text-slate-900 tracking-tight">Заказы и Поставки</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-all">
            Скрыть сессию
          </button>
          <button className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-slate-800 transition-all shadow-sm">
            Создать запись
          </button>
        </div>
      </div>

      {/* КАРТОЧКИ С ТОНКИМИ ГРАДИЕНТАМИ */}
      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Карточка 1 */}
        <div className="group rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm hover:border-indigo-500/30 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">ORD-ID</span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-600 border border-emerald-100">
              <CheckCircle2 size={12} /> Оплачен
            </span>
          </div>
          <div className="mt-3 text-base font-bold tracking-tight text-slate-800 flex items-center gap-1">
            ORD-17849924
            <Copy size={12} className="text-slate-300 opacity-0 group-hover:opacity-100 cursor-pointer hover:text-slate-500 transition-all" />
          </div>
          <p className="mt-1 text-[11px] font-mono text-slate-400">cms0hvxjm006h3wu...</p>
        </div>

        {/* Карточка 2 */}
        <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
          <span className="text-xs text-slate-400 block font-medium">Контрагент</span>
          <div className="mt-3 text-sm font-semibold text-slate-800">Jane Doe</div>
          <div className="text-xs text-slate-500 font-mono mt-0.5">janedoe@example.com</div>
        </div>

        {/* Карточка 3 */}
        <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
          <span className="text-xs text-slate-400 block font-medium">Логистический узел</span>
          <div className="mt-3 text-sm font-medium text-slate-800 truncate">714 Green St, Apt 2B</div>
          <div className="mt-2 flex gap-1.5 text-[10px] font-mono">
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-600">CARD</span>
            <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-indigo-600">Pick up</span>
          </div>
        </div>

        {/* Карточка 4 */}
        <div className="rounded-2xl border border-transparent bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-md text-white">
          <span className="text-xs text-slate-400 block">Метрика ценности</span>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-2xl font-extrabold tracking-tight">$155.80</span>
            <span className="text-xs text-slate-500 font-mono">USD</span>
          </div>
          <div className="mt-3 flex items-center gap-1 text-[10px] font-mono text-emerald-400">
            <ArrowUpRight size={12} /> +12.4% к прошлому ордеру
          </div>
        </div>
      </div>

      {/* ТАБЛИЦА С "ПЛАВАЮЩИМИ" СТРОКАМИ */}
      <div className="rounded-2xl border border-slate-200/60 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <div className="relative w-80">
            <Search size={14} className="absolute top-2.5 left-3 text-slate-400" />
            <input type="text" placeholder="Фильтр по ключевым словам..." className="w-full rounded-xl border border-slate-200/80 bg-slate-50/50 py-1.5 pl-9 pr-3 text-xs outline-none focus:border-indigo-500 focus:bg-white transition-all" />
          </div>
          <button className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
            <SlidersHorizontal size={12} /> Параметры
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/70 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
              <tr>
                <th className="px-5 py-3">Узел ID</th>
                <th className="px-5 py-3 text-slate-800 font-semibold">Код</th>
                <th className="px-5 py-3">Пользователь</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Локация</th>
                <th className="px-5 py-3">Шлюз</th>
                <th className="px-5 py-3 text-right">Тариф</th>
                <th className="px-5 py-3 text-center">Действие</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/60 text-slate-600">
              {[...Array(4)].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-all group">
                  <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400">cms0hvx...</td>
                  <td className="px-5 py-3.5 font-mono font-bold text-slate-900">123</td>
                  <td className="px-5 py-3.5 font-medium text-slate-800">Jane Doe</td>
                  <td className="px-5 py-3.5 text-slate-500">janedoe@example.com</td>
                  <td className="px-5 py-3.5 text-slate-400">New York, US</td>
                  <td className="px-5 py-3.5">
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[10px] text-blue-600 border border-blue-100/70">PayPal</span>
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate-900 font-mono">$77.90</td>
                  <td className="px-5 py-3.5 text-center">
                    <button className="opacity-0 group-hover:opacity-100 inline-flex h-6 w-6 items-center justify-center rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all">
                      <ChevronRight size={14} />
                    </button>
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
