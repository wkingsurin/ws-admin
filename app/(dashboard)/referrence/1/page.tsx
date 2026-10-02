import React from "react";
import {
  ArrowUpDown,
  Search,
  Plus,
  Trash2,
  EyeOff,
  X,
  User,
  Truck,
  CreditCard,
  ShoppingBag,
  Calendar,
} from "lucide-react"; // Используем современные иконки

export default function OrderManagement() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans text-slate-800">
      {/* ВЕРХНЯЯ ПАНЕЛЬ УПРАВЛЕНИЯ */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-semibold">
            <ShoppingBag size={20} />
          </span>
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Управление заказами
            </h1>
            <p className="text-xs text-slate-500">
              Просмотр, фильтрация и изменение статусов
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <EyeOff size={16} /> Скрыть
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-100 transition-colors">
            <Trash2 size={16} /> Удалить
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <X size={16} /> Отмена
          </button>
        </div>
      </div>

      {/* ДЕТАЛИ ТЕКУЩЕГО ЗАКАЗА (ДЕТАЛЬНАЯ КАРТОЧКА) */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Блок: Заказ */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1 w-full bg-emerald-500"></div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Информация
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
              Оплачен
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            ORD-1784992471870
          </h3>
          <p className="mt-1 text-xs font-mono text-slate-400">
            ID: cms0hvxjm006h3wu...
          </p>
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
            <div className="flex justify-between">
              <span>Создан:</span>{" "}
              <span className="font-medium text-slate-700">
                2026-07-25 14:59
              </span>
            </div>
            <div className="flex justify-between">
              <span>Обновлен:</span>{" "}
              <span className="font-medium text-slate-700">
                2026-07-25 14:59
              </span>
            </div>
          </div>
        </div>

        {/* Блок: Клиент */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200/60">
          <div className="mb-3 flex items-center gap-2 text-slate-400">
            <User size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Клиент
            </span>
          </div>
          <h3 className="text-base font-semibold text-slate-900">Jane Doe</h3>
          <p className="text-sm text-slate-600">janedoe@example.com</p>
          <p className="mt-2 text-xs font-mono text-slate-400">
            ID: cms0hvxjm006h3wu...
          </p>
        </div>

        {/* Блок: Доставка */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200/60">
          <div className="mb-3 flex items-center gap-2 text-slate-400">
            <Truck size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Доставка
            </span>
          </div>
          <p className="text-sm font-medium text-slate-900">
            714 Green St, Apt 2B
          </p>
          <p className="text-sm text-slate-600">
            New York, United States, CA 94108
          </p>
          <div className="mt-3 flex gap-2">
            <span className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-800">
              CARD
            </span>
            <span className="inline-flex items-center rounded bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
              Pick up
            </span>
          </div>
        </div>

        {/* Блок: Итого */}
        <div className="rounded-xl bg-indigo-900 p-5 text-white shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">
            Финансы
          </span>
          <div className="mt-2">
            <span className="text-sm text-indigo-200">Общая сумма:</span>
            <div className="text-3xl font-black">$155.80</div>
          </div>
          <div className="mt-4 border-t border-indigo-800 pt-3 text-xs text-indigo-200">
            <div>Промокод:</div>
            <div className="font-mono text-white opacity-90 truncate">
              cms0hvxjm006h3wu...
            </div>
          </div>
        </div>
      </div>

      {/* ТАБЛИЦА ВСЕХ ЗАКАЗОВ */}
      <div className="rounded-xl bg-white shadow-sm border border-slate-200/60 overflow-hidden">
        {/* Поиск и фильтры в таблице */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 p-4">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center l-3 pl-3 text-slate-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Поиск по ID, номеру заказа или пользователю..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pr-4 pl-10 text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-100">
            <Plus size={16} /> Добавить заказ
          </button>
        </div>

        {/* Сама таблица */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-mono">ID</th>
                <th className="px-4 py-3">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700">
                    Номер заказа <ArrowUpDown size={12} />
                  </div>
                </th>
                <th className="px-4 py-3">User ID</th>
                <th className="px-4 py-3">Покупатель</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Адрес</th>
                <th className="px-4 py-3">Город</th>
                <th className="px-4 py-3">Оплата</th>
                <th className="px-4 py-3 text-right">Цена</th>
                <th className="px-4 py-3 text-center">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {[...Array(5)].map((_, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-slate-50/50 hover:bg-indigo-50/30 transition-colors"
                >
                  <td className="px-4 py-3 font-mono text-xs text-slate-400">
                    cms0hvx...
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-900">123</td>
                  <td className="px-4 py-3 text-slate-500">123465</td>
                  <td className="px-4 py-3 font-medium text-slate-800">
                    Jane Doe
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    janedoe@example.com
                  </td>
                  <td className="px-4 py-3 max-w-[150px] truncate text-slate-500">
                    714 Green St, Apt 2B
                  </td>
                  <td className="px-4 py-3 text-slate-600">New York</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                      PayPal
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-slate-900">
                    $77.90
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                      true
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
