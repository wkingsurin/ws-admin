import CustomersClient from "./client";
import { getUsers } from "./get-users";
import { mapUser } from "./map-user";

export default async function CustomerPage() {
  const users = await getUsers();
  const mappedUsers = users.map(mapUser);

  return <CustomersClient data={mappedUsers} />;
}
