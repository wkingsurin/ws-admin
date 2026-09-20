import { DataTableColumn } from "@/components/data-table/types";
import { IProduct, IVariant } from "./types";

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
    id: "title",
    header: "title",
    accessorKey: "title",
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
  },
  {
    id: "description",
    header: "description",
    accessorKey: "id",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    render: (product) => product.description,
  },
  {
    id: "brand",
    header: "brand",
    accessorKey: "id",
    initialWidth: 150,
    minWidth: 100,
    render: (product) => product.brand.name,
  },
  {
    id: "category",
    header: "category",
    accessorKey: "id",
    initialWidth: 160,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => product.category.name,
  },
  {
    id: "isAvailable",
    header: "isAvailable",
    accessorKey: "id",
    initialWidth: 130,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => product.isAvailable,
  },
  {
    id: "isNew",
    header: "isNew",
    accessorKey: "id",
    initialWidth: 160,
    minWidth: 120,
    render: (product) => product.isNew,
  },
  {
    id: "currency",
    header: "currency",
    accessorKey: "id",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 120,
    render: (product) => product.currency,
  },
  {
    id: "price",
    header: "price",
    accessorKey: "id",
    initialWidth: 120,
    minWidth: 90,
    maxWidth: 300,
    render: (product) => product.variants[0].price,
  },
];

export const Products: IProduct[] = [
  {
    id: "cms0ifi5c0007m4ua5fuim1hz",
    title: "Under Armour Hoodie",
    slug: "under-armour-hoodie",
    description: "Under Armour Hoodie",
    currency: "USD",

    brand: { name: "Under Armour", slug: "unuder-armour" },

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
    editable: true,
    render: (variant) => variant.attributes.size,
  },
  {
    id: "stock",
    header: "stock",
    accessorKey: "stock",
    initialWidth: 160,
    minWidth: 100,
    maxWidth: 300,
    editable: true,
    render: (variant) => variant.stock,
  },
  {
    id: "price",
    header: "price",
    accessorKey: "price",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    editable: true,
    render: (variant) => variant.price,
  },
  {
    id: "oldPrice",
    header: "oldPrice",
    accessorKey: "oldPrice",
    initialWidth: 150,
    minWidth: 100,
    editable: true,
    render: (variant) => variant.oldPrice,
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
