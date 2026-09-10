import { DataTableColumn } from "@/components/data-table/types";
import { IProduct } from "./types";

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
    id: "slug",
    header: "slug",
    accessorKey: "id",
    initialWidth: 180,
    minWidth: 120,
    maxWidth: 300,
    render: (product) => product.slug,
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
    id: "currency",
    header: "currency",
    accessorKey: "id",
    initialWidth: 250,
    minWidth: 180,
    maxWidth: 300,
    render: (product) => product.currency,
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
    id: "color",
    header: "color",
    accessorKey: "id",
    initialWidth: 160,
    minWidth: 120,
    maxWidth: 300,
    // render: (product) => product.options.color,
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
  {
    id: "isPaid",
    header: "isPaid",
    accessorKey: "id",
    initialWidth: 100,
    minWidth: 80,
    maxWidth: 300,
    render: (product) => String(product),
  },
  {
    id: "createdAt",
    header: "createdAt",
    accessorKey: "id",
    initialWidth: 180,
    minWidth: 140,
    maxWidth: 300,
  },
  {
    id: "updatedAt",
    header: "updatedAt",
    accessorKey: "id",
    initialWidth: 180,
    minWidth: 140,
    maxWidth: 300,
  },
];

export const Products: IProduct[] = [
  {
    id: "cms0ifi2r0006m4ualesgoszd",
    title: "ORD-1784992471870",
    slug: "2026-07-25 15:14:31.875",
    description: "2026-07-25 15:14:58.496",
    currency: "",

    brand: { name: "", slug: "" },

    category: { name: "", slug: "" },

    isAvailable: true,
    isNew: false,

    options: {
      color: [{ id: "", name: "", slug: "", images: [{ id: "", src: "" }] }],
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
