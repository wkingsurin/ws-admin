export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  address: {
    recipient: string | null;
    country: string | null;
    city: string | null;
    street: string | null;
    postalCode: string | null;
    phone?: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface IFavorite {
  id: string;
  userId: string;
  productId: string;
  createdAt: Date;
}

export interface IFavoriteRow extends IFavorite {
  title: string;
  image: { id: string; src: string };
}

export interface ICartItem {
  id: string;
  cartItemId: string;

  title: string;
  slug: string;

  variantId: string;
  sku: string;

  price: number;
  oldPrice: number | null;

  image: string;

  selectedColor: { id: string; value: string };
  selectedSize: string;

  quantity: number;
  maxStock: number;

  brandName: string;
  categoryName: string;

  currency: string;

  createdAt: Date;
}

export interface ICart {
  items: ICartItem[];

  totalItems: number;
  subtotal: number;
  total: number;
}
