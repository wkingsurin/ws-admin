type DeliveryMethod = "COURIER" | "PICKUP" | "POST";
type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";
type PaymentMethod = "CARD" | "CASH" | "PAYPAL";

export interface IOrderCustomer {
  name: string;
  email: string;
}

export interface IOrderShipping {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface IOrderDelivery {
  method: DeliveryMethod;
}

export interface IOrderPayment {
  method: PaymentMethod;
  isPaid: boolean;
}

export interface IOrderItem {
  id: string;
  orderId: string;
  productId: string;
  variantId: string;
  title: string;
  sku: string;
  price: number;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  image: string;
}

export interface IOrderTotals {
  items: number;
  discount: number;
  delivery: number;
  total: number;
}

export interface IOrder {
  id: string;
  orderNumber: string;
  createdAt: string;
  updatedAt: string;

  customer: IOrderCustomer;

  shipping: IOrderShipping;

  items: IOrderItem[];

  currency: string;

  totals: IOrderTotals;

  status: OrderStatus;

  payment: IOrderPayment;
  delivery: IOrderDelivery;
}

export interface OrdersState {
  ordersIds: Record<string, string>;
  orders: Record<string, IOrder>;
  _hasHydrated: boolean;

  setHydrated: (state: boolean) => void;
  createOrder: (order: IOrder) => void;
  removeOrder: (state: IOrder) => void;
}

export interface IOrderProps {
  data: IOrder;
}
