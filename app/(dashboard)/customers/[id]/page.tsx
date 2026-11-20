import { notFound } from "next/navigation";
import CustomerClientPage from "./client";
import { getCustomerById } from "@/features/customers/get-customer";
import { getCartByUserId } from "@/features/customers/get-cart";
import { getFavoritesByUserId } from "@/features/customers/get-favorites";
import { mapCustomer } from "@/features/customers/map-customer";
import mapCartItem from "@/features/customers/map-cartItem";
import mapFavorite from "@/features/customers/map-favorite";
import { getOrders } from "@/features/orders/get-orders";
import { mapOrder } from "@/features/orders/map-order";

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = await getCustomerById(id);
  const customerCart = await getCartByUserId(id);
  const customerFavorites = await getFavoritesByUserId(id);
  const customerOrders = await getOrders(id);

  if (!customer) {
    notFound();
  }

  const mappedCustomer = mapCustomer(customer);

  const mappedCartItems = customerCart?.items.map(mapCartItem);

  const mappedFavorites = customerFavorites.map(mapFavorite);

  const mappedOrders = customerOrders.map(mapOrder);

  return (
    <CustomerClientPage
      data={{
        customer: mappedCustomer,
        cartItems: mappedCartItems,
        favorites: mappedFavorites,
        orders: mappedOrders,
      }}
    />
  );
}
