import { DataTableColumn } from "@/components/data-table/types";
import { ICartItem, IFavorite, IUser } from "./types/types";
import CellImage from "@/components/data-table/cell-image";
import CellSelector from "@/components/data-table/cell-selector";
import { ICartItemRow } from "./components/customer/types";

export const CUSTOMER_COLUMNS: DataTableColumn<IUser>[] = [
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "name",
    header: "name",
    accessorKey: "name",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    editable: true,
    maxSymbols: 300,
  },
  {
    id: "email",
    header: "email",
    accessorKey: "email",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    editable: true,
    maxSymbols: 300,
  },
  {
    id: "recipient",
    header: "recipient",
    accessor: (user) => user.address.recipient,
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    render: (user) => user.address.recipient,
    editable: true,
  },
  {
    id: "country",
    header: "country",
    accessor: (user) => user.address.country,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (user) => user.address.country,
    editable: true,
  },
  {
    id: "city",
    header: "city",
    accessor: (user) => user.address.city,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (user) => user.address.city,
    editable: true,
  },
  {
    id: "street",
    header: "street",
    accessor: (user) => user.address.street,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (user) => user.address.street,
    editable: true,
  },
  {
    id: "postalCode",
    header: "postalCode",
    accessor: (user) => user.address.postalCode,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (user) => user.address.postalCode,
    editable: true,
  },
  {
    id: "phone",
    header: "phone",
    accessor: (user) => user.address.phone,
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    render: (user) => user.address.phone,
    editable: true,
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
  },
];

export const FAVORITE_COLUMNS: DataTableColumn<IFavorite>[] = [
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
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
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
  },
];

export const CART_COLUMNS: DataTableColumn<ICartItemRow>[] = [
  {
    id: "image",
    header: "image",
    accessorKey: "image",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 100,
    render: (item) => <CellImage alt={item.title} src={item.image} />,
  },
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "variantId",
    header: "variantId",
    accessorKey: "variantId",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
  },
  {
    id: "sku",
    header: "sku",
    accessorKey: "sku",
    initialWidth: 150,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "slug",
    header: "slug",
    accessorKey: "slug",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "brandName",
    header: "brandName",
    accessorKey: "brandName",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "categoryName",
    header: "categoryName",
    accessorKey: "categoryName",
    initialWidth: 120,
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
    accessor: (cartItem) => cartItem.selectedColor.value,
    initialWidth: 150,
    minWidth: 150,
    maxWidth: 300,
    render: (cartItem, { onSave } = { onSave: () => {} }) => (
      <CellSelector
        value={cartItem.selectedColor.value}
        options={cartItem.availableColors}
        onChange={onSave}
      />
    ),
    filter: {
      type: "checkbox",
      options: (data: ICartItem[]) => {
        const colors = [
          ...new Set(data.map((row) => row.selectedColor.value)),
        ].sort();

        return colors.map((color) => ({
          label: color,
          value: color,
        }));
      },
    },
    editor: "custom",
    className: "px-2",
  },
  {
    id: "selectedSize",
    header: "selectedSize",
    accessor: (cartItem) => cartItem.selectedSize,
    initialWidth: 150,
    minWidth: 150,
    maxWidth: 300,
    render: (cartItem, { onSave } = { onSave: () => {} }) => (
      <CellSelector
        value={cartItem.selectedSize}
        options={cartItem.availableSizes}
        onChange={onSave}
      />
    ),
    filter: {
      type: "checkbox",
      options: (data: ICartItem[]) => {
        const sizes = [...new Set(data.map((row) => row.selectedSize))].sort();

        return sizes.map((size) => ({
          label: size,
          value: size,
        }));
      },
    },
    editor: "custom",
    className: "px-2",
  },
  {
    id: "price",
    header: "price",
    accessorKey: "price",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "oldPrice",
    header: "oldPrice",
    accessorKey: "oldPrice",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "quantity",
    header: "quantity",
    accessorKey: "quantity",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    editable: true,
  },
  {
    id: "maxStock",
    header: "maxStock",
    accessorKey: "maxStock",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
  },
];
