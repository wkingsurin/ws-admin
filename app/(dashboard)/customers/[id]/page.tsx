"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import Toolbar from "./toolbar/toolbar";
import CustomerDetails from "./details/customer-details";
import FavoritesToolbar from "@/features/customers/components/customer/favorites-toolbar";
import CartToolbar from "@/features/customers/components/customer/cart-toolbar";
import FavoritesTable from "@/features/customers/components/customer/favorites-table";
import CartItemsTable from "@/features/customers/components/customer/cart-table";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CustomerPage() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");

  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col gap-3 p-3 rounded-md w-full min-h-[260px] bg-white border-[0.5px] border-black/10">
          <Toolbar />
          <CustomerDetails />
        </div>

        <div className="flex gap-3">
          <Link className="px-3" href={"?page=favorites"}>
            Favorites
          </Link>
          <Link className="px-3" href={"?page=cart"}>
            Cart
          </Link>
        </div>

        <DashboardTable
          className="flex-1 min-h-0"
          toolbar={
            currentPage === "favorites" ? <FavoritesToolbar /> : <CartToolbar />
          }
        >
          {currentPage === "favorites" ? (
            <FavoritesTable />
          ) : (
            <CartItemsTable />
          )}
        </DashboardTable>
      </div>
    </div>
  );
}
