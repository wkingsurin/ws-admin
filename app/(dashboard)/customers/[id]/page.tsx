import { notFound } from "next/navigation";
import { DetailRow } from "../../orders/[id]/types";
import { getCustomerById } from "./get-customer";
import { mapCustomer } from "./map-customer";
import CustomerClientPage from "./client";
import { getCartByUserId } from "./get-cart";
import { getFavoritesByUserId } from "./get-favorites";
import mapCartItem from "./map-cartItem";

type CustomerDetails = {
  order: DetailRow[];
  orderDate: DetailRow[];
  customer: DetailRow[];
  shipping: DetailRow[];
  shippingMethods: DetailRow[];
  totals: DetailRow[];
  status: string;
};

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = await getCustomerById(id);
  const customerCart = await getCartByUserId(id);
  const customerFavorites = await getFavoritesByUserId(id);

  if (!customer) {
    notFound();
  }

  const mappedCustomer = mapCustomer(customer);
  console.log(`[mappedCustomer]:`, mappedCustomer);

  const mappedCartItems = customerCart?.items.map(mapCartItem);
  console.log(`[cart]:`, customerCart);
  console.log(`[customerCart.items]:`, mappedCartItems);
  console.log(`[customerFavorites]:`, customerFavorites);

  // const mappedCart = mapCart(cart);

  // const orderDetails: OrderDetails = {
  //   order: [
  //     { label: "Id", value: mappedCustomer.id },
  //     { label: "Number", value: mappedCustomer.orderNumber },
  //   ],
  //   orderDate: [
  //     { label: "Created at", value: mappedCustomer.createdAt },
  //     { label: "Updated at", value: mappedCustomer.updatedAt },
  //   ],
  //   customer: [
  //     { label: "Id", value: mappedCustomer.customer.name },
  //     { label: "Name", value: mappedCustomer.customer.name },
  //     { label: "Email", value: mappedCustomer.customer.email },
  //   ],
  //   shipping: [
  //     { label: "Address", value: mappedCustomer.shipping.address },
  //     { label: "City", value: mappedCustomer.shipping.city },
  //     { label: "Country", value: mappedCustomer.shipping.country },
  //     { label: "Postal code", value: mappedCustomer.shipping.postalCode },
  //   ],
  //   shippingMethods: [
  //     { label: "Payment method", value: mappedCustomer.payment.method },
  //     { label: "Delivery method", value: mappedCustomer.delivery.method },
  //   ],
  //   totals: [
  //     { label: "Total price", value: String(mappedCustomer.totals.total) },
  //     { label: "Discount", value: String(mappedCustomer.totals.discount) },
  //   ],
  //   status: mappedCustomer.status,
  // };

  return (
    <CustomerClientPage
      data={{
        customer: mappedCustomer,
        cartItems: mappedCartItems,
        // favorites: customerFavorites,
      }}
    />
  );
}
