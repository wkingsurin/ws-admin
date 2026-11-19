type FormData = Record<string, string>;

export type OrderDetailsData =
  | {
      customerName?: string;
      customerEmail?: string;
    }
  | {
      shippingAddress?: string;
      shippingCity?: string;
      shippingCountry?: string;
      shippingPostalCode?: string;
    };

interface MapDataProps {
  data: FormData;
  type: "customer" | "shipping";
}

export default function mapData({
  data,
  type,
}: MapDataProps): OrderDetailsData {
  if (type === "customer") {
    return {
      customerName: data.name,
      customerEmail: data.email,
    };
  }

  return {
    shippingAddress: data.address,
    shippingCity: data.city,
    shippingCountry: data.country,
    shippingPostalCode: data.postalCode,
  };
}
