import normalizeDate from "@/lib/normalize-date";
import { FavoriteWithRelations } from "./types/prisma-types";
import { IFavorite } from "./types/types";

export default function mapFavorite(
  favorite: FavoriteWithRelations,
): IFavorite {
  return {
    id: favorite.id,
    userId: favorite.userId,
    productId: favorite.productId,
    createdAt: normalizeDate(favorite.createdAt.toISOString()),
  };
}
