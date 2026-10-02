import React from 'react';
import { LayoutDashboard, Sliders, ExternalLink, Calendar, RefreshCw } from 'lucide-react';

export default function DarkTechDashboard() {
  return (
    <div className="min-h-screen bg-[#0b0f19] p-6 font-sans text-slate-300">
      
      {/* ХЕДЕР С НЕОНОВЫМИ АКЦЕНТАМИ */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#111827] p-5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <LayoutDashboard size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">Панель управления заказами</h1>
            <p className="text-xs text-slate-500">Система мониторинга транзакций в реальном времени</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#161f30] px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
            <RefreshCw size={14} /> Обновить
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 px-3.5 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/20 transition-colors">
            Удалить запись
          </button>
        </div>
      </div>

      {/* КАРТОЧКИ (GRID В ТЕМНЫХ ТОНАХ) */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Заказ */}
        <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>КОД ТРАНЗАКЦИИ</span>
            <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">ACTIVE</span>
          </div>
          <div className="text-base font-bold text-white font-mono">ORD-1784992471870</div>
          <div className="mt-4 flex items-center justify-between text-xs border-t border-slate-800/60 pt-3">
            <span className="text-slate-500">Дата:</span>
            <span className="text-slate-400 font-mono">2026-07-25 14:59</span>
          </div>
        </div>

        {/* Клиент */}
        <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
          <span className="text-xs text-slate-500 block mb-2">ПОКУПАТЕЛЬ</span>
          <div className="text-base font-semibold text-white">Jane Doe</div>
          <div className="text-xs text-indigo-400 mt-1 flex items-center gap-1">
            janedoe@example.com <ExternalLink size={12} />
          </div>
        </div>

        {/* Доставка */}
        <div className="rounded-xl border border-slate-800 bg-[#111827] p-5">
          <span className="text-xs text-slate-500 block mb-2">ЛОГИСТИКА</span>
          <div className="text-sm font-medium text-slate-200 truncate">714 Green St, Apt 2B</div>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">CARD</span>
            <span className="rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 text-[10px]">Pick up</span>
          </div>
        </div>

        {/* Баланс */}
        <div className="rounded-xl border border-indigo-500/20 bg-gradient-to-br from-[#111827] to-[#131b2e] p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl"></div>
          <span className="text-xs text-slate-500 block mb-1">ОБЩАЯ СУММА</span>
          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400">
            $155.80
          </div>
          <div className="text-[10px] text-slate-500 mt-2 font-mono truncate">ID: cms0hvxjm006h3wuakz...</div>
        </div>
      </div>

      {/* ТАБЛИЦА */}
      <div className="rounded-xl border border-slate-800 bg-[#111827] shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left text-xs">
            <thead className="bg-[#161f30] text-[11px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3.5">ID</th>
                <th className="px-4 py-3.5 text-indigo-400">Order Number</th>
                <th className="px-4 py-3.5">User ID</th>
                <th className="px-4 py-3.5">Username</th>
                <th className="px-4 py-3.5">Email</th>
                <th className="px-4 py-3.5">City</th>
                <th className="px-4 py-3.5">Method</th>
                <th className="px-4 py-3.5 text-right">Price</th>
                <th className="px-4 py-3.5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-3 font-mono text-slate-600">cms0hvx...</td>
                  <td className="px-4 py-3 font-mono text-slate-200 font-bold">123</td>
                  <td className="px-4 py-3 text-slate-500 font-mono">123465</td>
                  <td className="px-4 py-3 font-medium text-slate-300">Jane Doe</td>
                  <td className="px-4 py-3 text-slate-400">janedoe@example.com</td>
                  <td className="px-4 py-3 text-slate-400">New York</td>
                  <td className="px-4 py-3">
                    <span className="rounded bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-400 font-medium">PayPal</span>
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-white font-mono">$77.90</td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
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
