import { DataTableColumn } from "@/components/data-table/types";
import { IProduct, IVariant } from "./types";
import ProductAvailability from "./components/product-availability";
import ProductCondition from "./components/product-condition";
import CellSelector from "./components/cell-selector";

export const ProductColumns: DataTableColumn<IProduct>[] = [
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "brand",
    header: "brand",
    accessor: (product) => product.brand.name,
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => product.brand.name,
    editable: true,
  },
  {
    id: "category",
    header: "category",
    accessor: (product) => product.category.name,
    initialWidth: 160,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => product.category.name,
    editable: true,
  },
  {
    id: "title",
    header: "title",
    accessorKey: "title",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    editable: true,
  },
  {
    id: "description",
    header: "description",
    accessorKey: "description",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    render: (product) => product.description,
    editable: true,
  },
  {
    id: "currency",
    header: "currency",
    accessorKey: "currency",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 120,
    render: (product) => product.currency,
  },
  {
    id: "isAvailable",
    header: "isAvailable",
    accessorKey: "isAvailable",
    initialWidth: 130,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => (
      <ProductAvailability isAvailable={product.isAvailable} />
    ),
    filter: {
      type: "checkbox",
      options: [
        { label: "true", value: "true" },
        { label: "false", value: "false" },
      ],
    },
    className: "p-0",
  },
  {
    id: "isNew",
    header: "isNew",
    accessorKey: "isNew",
    initialWidth: 160,
    minWidth: 120,
    maxWidth: 300,
    render: (product) => <ProductCondition isNew={product.isNew ?? false} />,
    filter: {
      type: "checkbox",
      options: [
        { label: "true", value: "true" },
        { label: "false", value: "false" },
      ],
    },
    className: "p-0",
  },
];

export const Products: IProduct[] = [
  {
    id: "cms0ifi5c0007m4ua5fuim1hz",
    title: "Under Armour Hoodie",
    slug: "under-armour-hoodie",
    description: "Under Armour Hoodie",
    currency: "USD",

    brand: { name: "Under Armour", slug: "under-armour" },

    category: { name: "Hoodie", slug: "hoodie" },

    isAvailable: true,
    isNew: false,

    options: {
      color: [
        { id: "", name: "White", slug: "", images: [{ id: "", src: "" }] },
      ],
      size: [{ value: "" }],
    },

    variants: [
      {
        id: "",
        sku: "",
        price: 7790,
        oldPrice: null,
        stock: 7,
        attributes: { colorId: "", size: "" },
      },
    ],
  },
];

export const VARIANT_COLUMNS: DataTableColumn<IVariant>[] = [
  {
    id: "id",
    header: "id",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 150,
    maxWidth: 300,
  },
  {
    id: "sku",
    header: "sku",
    accessorKey: "sku",
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "colorId",
    header: "colorId",
    accessorKey: "attributes",
    initialWidth: 130,
    minWidth: 100,
    maxWidth: 300,
    render: (variant) => variant.attributes.colorId,
  },
  {
    id: "size",
    header: "size",
    accessorKey: "id",
    initialWidth: 160,
    minWidth: 160,
    maxWidth: 160,
    render: (variant) => (
      <CellSelector
        initialValue={{
          label: variant.attributes.size,
          value: variant.attributes.size,
        }}
      />
    ),
    filter: {
      type: "checkbox",
      options: [{ label: "One-size", value: "One-size" }],
    },
    className: "px-0",
  },
  {
    id: "price",
    header: "price",
    accessorKey: "price",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    editable: true,
    render: (variant) => variant.price,
  },
  {
    id: "oldPrice",
    header: "oldPrice",
    accessorKey: "oldPrice",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    editable: true,
    render: (variant) => variant.oldPrice,
  },
  {
    id: "stock",
    header: "stock",
    accessorKey: "stock",
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 300,
    editable: true,
    render: (variant) => variant.stock,
  },
];

export const VAIRANTS_DATA: IVariant[] = [
  {
    id: "cms0hvp9e001i3wuai8r976pj",
    sku: "CAP-BS-BLK-One-size",
    price: 7790,
    oldPrice: 9790,
    stock: 1,
    attributes: { colorId: "cms0hvnn4000m3wua4ry2omfg", size: "One-size" },
  },
];
