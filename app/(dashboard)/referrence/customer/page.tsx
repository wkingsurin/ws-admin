import React from 'react';
import { Search, Plus, Eye, ChevronDown } from 'lucide-react';

export default function SoftGrayCustomerDashboard() {
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

      {/* КАРТОЧКА КЛИЕНТА (CUSTOMER INFO BLOCK) */}
      <div className="mb-6 grid grid-cols-1 gap-6 bg-white p-5 rounded-xl border border-gray-200/80 shadow-2xs sm:grid-cols-4 font-sans text-xs">
        
        {/* Аватар / Превью профиля */}
        <div className="sm:col-span-1 border border-gray-100 bg-gray-50/30 rounded-lg p-2 flex items-center justify-center aspect-square max-h-[220px]">
          <img 
            src="https://unsplash.com" 
            alt="Customer Profile View" 
            className="h-full object-contain mix-blend-multiply opacity-90"
          />
        </div>

        {/* Данные покупателя */}
        <div className="sm:col-span-3 flex flex-col justify-between pl-2">
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Account Details</div>
            <h2 className="text-base font-bold text-gray-900 mb-4">Customer: Jane Doe</h2>
            
            {/* Поля карточки, включая системные null значения в аккуратном сером цвете */}
            <div className="grid grid-cols-1 gap-y-1.5 sm:grid-cols-2 font-mono text-[11px] text-gray-500">
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Id:</span> <span className="text-gray-900">cms0hunvx001c2wua6bldro7m</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Name:</span> <span className="text-gray-900 font-sans font-medium">Jane Doe</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Email:</span> <span className="text-indigo-600 font-sans">janedoe@example.com</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Recipient:</span> <span className="text-gray-300 italic">null</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Country:</span> <span className="text-gray-300 italic">null</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">City:</span> <span className="text-gray-300 italic">null</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Street:</span> <span className="text-gray-300 italic">null</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">PostalCode:</span> <span className="text-gray-300 italic">null</span></div>
              <div className="flex"><span className="w-24 text-gray-400 font-sans">Phone:</span> <span className="text-gray-300 italic">null</span></div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] font-mono text-gray-400">
            Created at: 2026-07-25 14:59:19
          </div>
        </div>

      </div>

      {/* ТАБ-НАВИГАЦИЯ (Favorites / Cart) */}
      <div className="mb-3 flex gap-4 border-b border-gray-200/60 pb-px font-sans text-xs">
        <button className="border-b-2 border-gray-800 pb-2 font-semibold text-gray-900">Favorites</button>
        <button className="pb-2 text-gray-400 hover:text-gray-600 transition-colors">Cart</button>
      </div>

      {/* ТАБЛИЦА СПИСКОВ ТОВАРА */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-2xs overflow-hidden">
        
        {/* Инструменты над таблицей */}
        <div className="p-3 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center gap-4 font-sans text-xs">
          <div className="relative w-72">
            <Search size={13} className="absolute top-2.5 left-2.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by id / orderNumber / userId / price" 
              className="w-full bg-white border border-gray-200 rounded px-2.5 py-1 pl-8 outline-none text-xs focus:border-gray-400 transition-all" 
            />
          </div>
          <button className="flex items-center gap-1 border border-gray-200 bg-white rounded px-2.5 py-1 text-gray-700 hover:bg-gray-50 transition-colors">
            <Plus size={12} /> Add item
          </button>
        </div>

        {/* Сетка интерактивной таблицы с прокруткой */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-50/80 text-[10px] uppercase font-semibold text-gray-400 border-b border-gray-200/60">
              <tr>
                <th className="p-2.5 pl-4 text-center w-12">page</th>
                <th className="p-2.5 w-14">image</th>
                <th className="p-2.5">id</th>
                <th className="p-2.5">variantId</th>
                <th className="p-2.5">sku</th>
                <th className="p-2.5">slug</th>
                <th className="p-2.5 font-sans text-gray-700">brand</th>
                <th className="p-2.5 font-sans text-gray-700">category</th>
                <th className="p-2.5 font-sans text-gray-900 font-bold">title</th>
                <th className="p-2.5 w-24">color</th>
                <th className="p-2.5 w-20">size</th>
                <th className="p-2.5 w-24 text-right pr-4">price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono text-[11px] text-gray-500">
              <tr className="hover:bg-gray-50/60 bg-white transition-colors">
                <td className="p-2.5 pl-4 text-center">
                  <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700">
                    <Eye size={13} />
                  </button>
                </td>
                <td className="p-2.5">
                  <img 
                    src="https://unsplash.com" 
                    alt="Product item" 
                    className="h-8 w-8 rounded border border-gray-100 object-contain p-0.5 bg-gray-50" 
                  />
                </td>
                <td className="p-2.5 text-gray-400 max-w-[100px] truncate" title="cms2vrt5p0001lguavwgdok6m">
                  cms2vrt5p...
                </td>
                <td className="p-2.5 text-gray-400 max-w-[100px] truncate" title="cms0hwaqw00n33wua21vx6vk2">
                  cms0hwaqw...
                </td>
                <td className="p-2.5 text-gray-500 font-bold">TSHT-ADFB-WHT-42</td>
                <td className="p-2.5 text-gray-400 truncate max-w-[120px]">adidas-originals-fb-t-shirt</td>
                <td className="p-2.5 font-sans text-gray-700">Adidas</td>
                <td className="p-2.5 font-sans text-gray-500">T-Shirt</td>
                <td className="p-2.5 font-sans font-medium text-gray-900 whitespace-nowrap">Adidas Originals FB T-Shirt</td>
                <td className="p-2.5">
                  <div className="inline-flex items-center gap-1 border border-gray-200 bg-white px-2 py-0.5 rounded font-sans text-[11px]">
                    White <ChevronDown size={10} className="text-gray-400" />
                  </div>
                </td>
                <td className="p-2.5">
                  <div className="inline-flex items-center gap-1 border border-gray-200 bg-white px-2 py-0.5 rounded text-gray-800">
                    42 <ChevronDown size={10} className="text-gray-400" />
                  </div>
                </td>
                <td className="p-2.5 text-right pr-4 font-bold text-gray-900">7790</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
