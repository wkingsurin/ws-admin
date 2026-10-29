import type { UpdateDataParams } from "../customers/update-data";

export function getUpdateMessage(params: UpdateDataParams): string {
  const { entity, data } = params;

  switch (entity) {
    case "USER": {
      if (data.email !== undefined) return "Email пользователя изменён";
      if (data.name !== undefined) return "Имя пользователя изменено";

      if (data.address) {
        if (data.address.phone !== undefined) return "Номер телефона изменён";
        if (data.address.recipient !== undefined) return "Получатель изменён";
        if (data.address.country !== undefined) return "Страна изменена";
        if (data.address.city !== undefined) return "Город изменён";
        if (data.address.street !== undefined) return "Улица изменена";
        if (data.address.postalCode !== undefined) return "Индекс изменён";

        return "Адрес пользователя обновлён";
      }

      return "Данные пользователя обновлены";
    }
    
    case "ORDER": {
      if (data.customerEmail !== undefined) return "Email заказа изменён";
      if (data.shippingAddress !== undefined) return "Адрес доставки изменён";
      if (data.shippingCity !== undefined) return "Город доставки изменён";
      if (data.shippingCountry !== undefined) return "Страна доставки изменена";
      if (data.shippingPostalCode !== undefined)
        return "Индекс доставки изменён";
      if (data.deliveryMethod !== undefined) return "Способ доставки изменён";
      if (data.paymentMethod !== undefined) return "Способ оплаты изменён";
      if (data.isPaid !== undefined) return "Статус оплаты изменён";

      return "Данные заказа обновлены";
    }

    case "PRODUCT": {
      if (data.title !== undefined) return "Название товара изменено";
      if (data.description !== undefined) return "Описание товара изменено";
      if (data.isAvailable !== undefined) return "Доступность товара изменена";
      if (data.isNew !== undefined) return "Статус новинки изменён";

      return "Данные товара обновлены";
    }

    case "VARIANT": {
      if (data.price !== undefined) return "Цена варианта изменена";
      if (data.oldPrice !== undefined) return "Старая цена изменена";
      if (data.stock !== undefined) return "Остаток товара изменён";

      return "Вариант товара обновлён";
    }

    case "CART_ITEM": {
      if (data.quantity !== undefined) return "Количество в корзине изменено";
      if (data.selectedSize !== undefined) return "Размер товара изменён";
      if (data.selectedColor !== undefined) return "Цвет товара изменён";

      return "Корзина обновлена";
    }
  }
}
