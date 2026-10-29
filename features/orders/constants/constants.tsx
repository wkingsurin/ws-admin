import { DataTableColumn } from "@/components/data-table/types";
import { IOrder, IOrderItem } from "../types/types";
import DeliveryMethod from "../components/delivery-method";
import PaymentStatus from "../components/payment-status";
import CellImage from "@/components/data-table/cell-image";

export const ORDER_COLUMNS: DataTableColumn<IOrder>[] = [
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "orderNumber",
    header: "orderNumber",
    accessorKey: "orderNumber",
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "customerName",
    header: "customerName",
    accessor: (order) => order.customer.name,
    initialWidth: 180,
    minWidth: 120,
    maxWidth: 300,
    render: (order) => order.customer.name,
  },
  {
    id: "customerEmail",
    header: "customerEmail",
    accessor: (order) => order.customer.email,
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    render: (order) => order.customer.email,
  },
  {
    id: "address",
    header: "address",
    accessor: (order) => order.shipping.address,
    initialWidth: 250,
    minWidth: 180,
    maxWidth: 300,
    render: (order) => order.shipping.address,
    editable: true,
  },
  {
    id: "city",
    header: "city",
    accessor: (order) => order.shipping.city,
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
    render: (order) => order.shipping.city,
    editable: true,
  },
  {
    id: "country",
    header: "country",
    accessor: (order) => order.shipping.country,
    initialWidth: 160,
    minWidth: 100,
    maxWidth: 300,
    render: (order) => order.shipping.country,
    editable: true,
  },
  {
    id: "postalCode",
    header: "postalCode",
    accessor: (order) => order.shipping.postalCode,
    initialWidth: 130,
    minWidth: 100,
    maxWidth: 300,
    render: (order) => order.shipping.postalCode,
    editable: true,
  },
  {
    id: "paymentMethod",
    header: "paymentMethod",
    accessor: (order) => order.payment.method,
    initialWidth: 160,
    minWidth: 120,
    maxWidth: 300,
    render: (order) => order.payment.method,
    filter: {
      type: "checkbox",
      options: [
        { label: "Card", value: "CARD" },
        { label: "Cash", value: "CASH" },
        { label: "PayPal", value: "PAYPAl" },
      ],
    },
  },
  {
    id: "deliveryMethod",
    header: "deliveryMethod",
    accessor: (order) => order.delivery.method,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (order, { onSave } = { onSave: () => {} }) => (
      <DeliveryMethod
        method={order.delivery.method}
        onChange={(value) => onSave(value)}
      />
    ),
    filter: {
      type: "checkbox",
      options: [
        { label: "Courier", value: "COURIER" },
        { label: "Pick up", value: "PICKUP" },
        { label: "Post", value: "POST" },
      ],
    },
    editor: "custom",
    className: "px-2",
  },
  {
    id: "price",
    header: "price",
    accessor: (order) => order.totals.total,
    initialWidth: 120,
    minWidth: 90,
    maxWidth: 300,
    render: (order) => order.totals.total,
  },
  {
    id: "isPaid",
    header: "isPaid",
    accessor: (order) => order.payment.isPaid,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (order, { onSave } = { onSave: () => {} }) => (
      <PaymentStatus
        isPaid={order.payment.isPaid}
        onChange={(value) => onSave(String(value))}
      />
    ),
    filter: {
      type: "checkbox",
      options: [
        { label: "Оплачен", value: "PAID" },
        { label: "Не оплачен", value: "UNPAID" },
      ],
    },
    editor: "custom",
    className: "px-2",
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
  },
  {
    id: "updatedAt",
    header: "updatedAt",
    accessorKey: "updatedAt",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
  },
];

export const ORDER_ITEM_COLUMNS: DataTableColumn<IOrderItem>[] = [
  {
    id: "image",
    header: "image",
    accessorKey: "image",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 100,
    render: (item) => <CellImage src={item.image} alt={item.title} />,
  },
  {
    id: "productId",
    header: "productId",
    accessorKey: "productId",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "variantId",
    header: "variantId",
    accessorKey: "variantId",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "sku",
    header: "sku",
    accessorKey: "sku",
    initialWidth: 160,
    minWidth: 120,
    maxWidth: 300,
  },
  {
    id: "title",
    header: "title",
    accessorKey: "title",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "selectedColor",
    header: "selectedColor",
    accessor: (orderItem) => orderItem.selectedColor,
    initialWidth: 160,
    minWidth: 140,
    maxWidth: 300,
    render: (orderItem) => orderItem.selectedColor,
  },
  {
    id: "selectedSize",
    header: "selectedSize",
    accessor: (orderItem) => orderItem.selectedSize,
    initialWidth: 160,
    minWidth: 140,
    maxWidth: 300,
    render: (orderItem) => orderItem.selectedSize,
  },
  {
    id: "price",
    header: "price",
    accessorKey: "price",
    initialWidth: 100,
    minWidth: 80,
    maxWidth: 300,
  },
  {
    id: "quantity",
    header: "quantity",
    accessorKey: "quantity",
    initialWidth: 120,
    minWidth: 80,
    maxWidth: 300,
  },
];
