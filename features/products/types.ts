export interface IColorOption {
    id: string;
    name: string;
    slug: string;

    images: {
        id: string;
        src: string;
    }[];
}
export interface IVariant {
    id: string;
    sku: string;
    price: number;
    oldPrice: number | null;
    stock: number;
    attributes: { colorId: string; size: string };
}
export interface IProduct {
    id: string;
    title: string;
    slug: string;
    description: string;
    currency: string;

    brand: {
        name: string;
        slug: string;
    };

    category: {
        name: string;
        slug: string;
    };

    isAvailable: boolean;
    isNew?: boolean;

    options: {
        color: IColorOption[];
        size: { value: string }[];
    };

    variants: IVariant[];
}