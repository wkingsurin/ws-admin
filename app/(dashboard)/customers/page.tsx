import { getUsers } from "@/features/customers/get-users";
import CustomersClient from "./client";
import { mapUser } from "@/features/customers/map-user";

export default async function CustomerPage() {
  const users = await getUsers();
  const mappedUsers = users.map(mapUser);

  return <CustomersClient data={mappedUsers} />;
}
