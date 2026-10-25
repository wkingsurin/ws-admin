import normalizeDate from "@/lib/normalize-date";
import { FavoriteWithRelations } from "./types/prisma-types";
import { IFavoriteRow } from "./types/types";

export default function mapFavorite(
  favorite: FavoriteWithRelations,
): IFavoriteRow {
  return {
    id: favorite.id,
    userId: favorite.userId,
    productId: favorite.productId,
    createdAt: normalizeDate(favorite.createdAt.toISOString()),
    image: {
      id: favorite.product.productColors[0].images[0].id,
      src: favorite.product.productColors[0].images[0].src,
    },
    title: favorite.product.title,
  };
}
