"use client";

import DashboardTable from "@/components/dashboard/dashboard-table";
import Toolbar from "./toolbar/toolbar";
import FavoritesToolbar from "@/features/customers/components/customer/favorites-toolbar";
import CartToolbar from "@/features/customers/components/customer/cart-toolbar";
import FavoritesTable from "@/features/customers/components/customer/favorites-table";
import CartItemsTable from "@/features/customers/components/customer/cart-table";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { DetailRow } from "../../orders/[id]/types";
import ImageCard from "./details/image-card";
import { ICartItem, IFavorite, IUser } from "@/features/customers/types/types";

interface CustomerProps {
  data: { customer: IUser; cartItems?: ICartItem[]; favorites?: IFavorite[] };
}

export default function CustomerClientPage({ data }: CustomerProps) {
  const { cartItems = [], favorites = [] } = data;

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");

  const customer: DetailRow[] = [
    { label: "Id", value: "cms0hunvx001c2wua6bldro7m" },
    { label: "Name", value: "Jane Doe" },
    { label: "Email", value: "janedoe@example.com" },
    { label: "Recipient", value: "" },
    { label: "Country", value: "" },
    { label: "City", value: "" },
    { label: "Street", value: "" },
    { label: "PostalCode", value: "" },
    { label: "Phone", value: "" },
    { label: "Created at", value: "2026-07-25 14:59:19" },
    { label: "Updated at", value: "2026-07-25 14:59:19" },
  ];
  const customerRows = customer.filter(
    (row) =>
      row.label.toLowerCase() !== "title" &&
      row.label.toLowerCase() !== "created at" &&
      row.label.toLowerCase() !== "updated at",
  );
  const customerDate = customer.filter(
    (row) =>
      row.label.toLowerCase() === "created at" ||
      row.label.toLowerCase() === "updated at",
  );

  const image: { alt: string; src: string } = {
    alt: "User",
    src: "/",
  };

  return (
    <div className="flex flex-col gap-3 h-full min-h-0">
      <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
        <Toolbar />

        <hr className="bg-black/10" />

        <div className="flex gap-8 bg-white border-[0.5] border-black/10 p-5 rounded-2xl">
          <div className="flex items-center justify-center w-1/4 h-55 p-3 bg-[#F9FAFB]/30 border-[0.5px] border-[#F3F4F6] rounded-lg">
            <ImageCard src={image.src} alt={image.alt} />
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <span className="font-bold text-xs text-[#99A1AF] uppercase">
              Account Details
            </span>
            <div className="flex flex-col gap-4 w-full">
              <h3 className="font-bold text-base leading-[150%]">Customer</h3>
              <div className="grid grid-cols-2 gap-2">
                {customerRows.map((row) => (
                  <div key={row.label} className="flex gap-3 text-sm">
                    <span className="w-24 text-[#99A1AF]">{row.label}</span>
                    <p className="font-mono text-[#101828]">{row.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 w-full border-t-[0.5px] border-[#F3F4F6] pt-3">
                {customerDate.map((row) => (
                  <div
                    key={row.label}
                    className="flex gap-3 font-mono text-xs text-[#99A1AF]"
                  >
                    <span>{row.label}</span>
                    <p>{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={`px-3 border-b-[2px] pb-2 ${currentPage !== "favorites" ? "border-[#1E2939]" : "border-transparent"}`}
            href={"?page=cart"}
          >
            Cart
          </Link>
          <Link
            className={`px-3 border-b-[2px] pb-2 ${currentPage === "favorites" ? "border-[#1E2939]" : "border-transparent"}`}
            href={"?page=favorites"}
          >
            Favorites
          </Link>
        </div>

        <DashboardTable
          className="flex-1 min-h-0"
          toolbar={
            currentPage === "favorites" ? <FavoritesToolbar /> : <CartToolbar />
          }
        >
          {currentPage === "favorites" ? (
            <FavoritesTable data={favorites} />
          ) : (
            <CartItemsTable data={cartItems} />
          )}
        </DashboardTable>
      </div>
    </div>
  );
}
