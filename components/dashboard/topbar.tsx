import AddOrderButton from "../../features/orders/components/add-order-button";
import Navigation from "./navigation";

export default function TopBar() {
  return (
    <div className="flex gap-3">
      <Navigation />
      <AddOrderButton />
    </div>
  );
}
