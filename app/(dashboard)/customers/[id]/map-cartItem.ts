import { CartItemWithRelations } from "./types";

export default function mapCartItem(cartItem: CartItemWithRelations) {
  return {
    id: cartItem.id,
    cartItemId: cartItem.id,
    title: cartItem.variant.product.title,
    slug: cartItem.variant.product.slug,
    variantId: cartItem.variantId,
    sku: cartItem.variant.sku,
    price: cartItem.variant.price,
    oldPrice: cartItem.variant.oldPrice,
    image: cartItem.variant.product.productColors[0].images[0].src,
    selectedColor: {
      id: cartItem.variant.color.id,
      value: cartItem.variant.color.name,
    },
    selectedSize: cartItem.variant.size,
    quantity: cartItem.quantity,
    maxStock: cartItem.variant.stock,
    brandName: cartItem.variant.product.brand.name,
    categoryName: cartItem.variant.product.category.name,

    currency: cartItem.variant.product.currency,

    createdAt: cartItem.createdAt,
  };
}
