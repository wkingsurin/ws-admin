import { DataTableColumn } from "@/components/data-table/types";
import { IProduct } from "./types/types";
import ProductAvailability from "./components/product-availability";
import ProductCondition from "./components/product-condition";
import { IVariantRow } from "./components/variants/types";
import CellImage from "@/components/data-table/cell-image";

export const ProductColumns: DataTableColumn<IProduct>[] = [
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
    id: "brand",
    header: "brand",
    accessor: (product) => product.brand.name,
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => product.brand.name,
    searchable: true,
  },
  {
    id: "category",
    header: "category",
    accessor: (product) => product.category.name,
    initialWidth: 160,
    minWidth: 100,
    maxWidth: 300,
    render: (product) => product.category.name,
    searchable: true,
  },
  {
    id: "title",
    header: "title",
    accessorKey: "title",
    initialWidth: 220,
    minWidth: 160,
    maxWidth: 300,
    editable: true,
    searchable: true,
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
    searchable: true,
  },
  {
    id: "currency",
    header: "currency",
    accessorKey: "currency",
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 120,
    render: (product) => product.currency,
    searchable: true,
  },
  {
    id: "isAvailable",
    header: "isAvailable",
    accessorKey: "isAvailable",
    initialWidth: 140,
    minWidth: 120,
    maxWidth: 300,
    render: (product, { onSave } = { onSave: () => {} }) => (
      <ProductAvailability
        isAvailable={product.isAvailable}
        onChange={(value) => onSave(String(value))}
      />
    ),
    filter: {
      type: "checkbox",
      options: [
        { label: "Available", value: "true" },
        { label: "Not availbl", value: "false" },
      ],
    },
    editor: "custom",
    className: "px-2",
    searchable: true,
  },
  {
    id: "isNew",
    header: "isNew",
    accessorKey: "isNew",
    initialWidth: 130,
    minWidth: 120,
    maxWidth: 300,
    render: (product, { onSave } = { onSave: () => {} }) => (
      <ProductCondition
        isNew={product.isNew ?? false}
        onChange={(value) => onSave(String(value))}
      />
    ),
    filter: {
      type: "checkbox",
      options: [
        { label: "New", value: "true" },
        { label: "Not new", value: "false" },
      ],
    },
    editor: "custom",
    className: "px-2",
    searchable: true,
  },
];

export const VARIANT_COLUMNS: DataTableColumn<IVariantRow>[] = [
  {
    id: "image",
    header: "image",
    accessor: (variant) => variant.images.length,
    render: (variant) => (
      <CellImage src={variant.images[0].src} alt={variant.color?.name ?? ""} />
    ),
    initialWidth: 100,
    minWidth: 100,
    maxWidth: 100,
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
    id: "sku",
    header: "sku",
    accessorKey: "sku",
    initialWidth: 150,
    minWidth: 100,
    maxWidth: 300,
    searchable: true,
  },
  {
    id: "color",
    header: "color",
    accessor: (variant: IVariantRow) => variant.color?.name,
    initialWidth: 130,
    minWidth: 100,
    maxWidth: 300,
    render: (variant) => variant.color?.name,
    filter: {
      type: "checkbox",
      options: (data: IVariantRow[]) => {
        return [
          ...new Set(
            data
              .map((variant) => variant.color?.name)
              .filter((name): name is string => Boolean(name)),
          ),
        ].map((name) => ({ label: name, value: name }));
      },
    },
    searchable: true,
  },
  {
    id: "size",
    header: "size",
    accessor: (variant) => variant.attributes.size,
    initialWidth: 160,
    minWidth: 160,
    maxWidth: 160,
    render: (variant) => variant.attributes.size,
    filter: {
      type: "checkbox",
      options: (data: IVariantRow[]) => {
        const sizes = [
          ...new Set(data.flatMap((variant) => variant.availableSizes)),
        ].sort();

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
    initialWidth: 120,
    minWidth: 120,
    maxWidth: 300,
    editable: true,
    render: (variant) => variant.price,
    searchable: true,
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
    searchable: true,
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
    searchable: true,
  },
];
