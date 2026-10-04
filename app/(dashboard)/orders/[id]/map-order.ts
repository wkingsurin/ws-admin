import { IOrder } from "@/features/orders/types";
import { OrderWithRelations } from "../types";

export default function mapOrder(order: OrderWithRelations): IOrder {
  return {
    id: order.id,
    orderNumber: order.orderNumber,

    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),

    customer: {
      name: order.customerName,
      email: order.customerEmail,
    },

    shipping: {
      address: order.shippingAddress,
      city: order.shippingCity,
      country: order.shippingCountry,
      postalCode: order.shippingPostalCode,
    },

    payment: {
      method: order.paymentMethod,
      isPaid: order.isPaid,
    },

    delivery: {
      method: order.deliveryMethod,
    },

    totals: {
      items: order.totalItemsPrice,
      discount: order.discountAmount,
      delivery: order.deliveryPrice,
      total: order.totalPrice,
    },

    status: order.status,

    currency: order.currency,

    items: order.items.map((item) => ({
      id: item.id,

      orderId: item.orderId,

      productId: item.productId,
      variantId: item.variantId,

      title: item.title,

      sku: item.sku,

      price: item.price,

      quantity: item.quantity,

      selectedColor: item.selectedColor,
      selectedSize: item.selectedSize,

      image: item.image,
    })),
  };
}
