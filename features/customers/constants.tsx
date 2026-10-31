import { DataTableColumn } from "@/components/data-table/types";
import { ICartItem, IFavoriteRow, IUser } from "./types/types";
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
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
    searchable: true,
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
    searchable: true,
  },
];

export const FAVORITE_COLUMNS: DataTableColumn<IFavoriteRow>[] = [
  {
    id: "image",
    header: "image",
    accessorKey: "image",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 100,
    render: (item) => {
      return <CellImage alt={item.title} src={item.image?.src ?? ""} />;
    },
  },
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "productId",
    header: "productId",
    accessorKey: "productId",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    searchable: true,
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
    searchable: true,
  },
  {
    id: "variantId",
    header: "variantId",
    accessorKey: "variantId",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "sku",
    header: "sku",
    accessorKey: "sku",
    initialWidth: 150,
    minWidth: 150,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "slug",
    header: "slug",
    accessorKey: "slug",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "brandName",
    header: "brandName",
    accessorKey: "brandName",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "categoryName",
    header: "categoryName",
    accessorKey: "categoryName",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "title",
    header: "title",
    accessorKey: "title",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
    searchable: true,
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
    searchable: true,
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
    searchable: true,
  },
  {
    id: "price",
    header: "price",
    accessorKey: "price",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "oldPrice",
    header: "oldPrice",
    accessorKey: "oldPrice",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "quantity",
    header: "quantity",
    accessorKey: "quantity",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    editable: true,
    searchable: true,
  },
  {
    id: "maxStock",
    header: "maxStock",
    accessorKey: "maxStock",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "createdAt",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    searchable: true,
  },
];
