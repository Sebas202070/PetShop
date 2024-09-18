export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table

import { getPaginatedOrders } from "@/actions/order/get-paginated-orders";
import { Title } from "@/components";

import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCardOutline } from "react-icons/io5";
import { UsersTable } from "./ui/UsersTable";
import { getPaginatedUsers } from "@/actions";

export default async function OrdersPage() {
  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <>
      <Title title="Mantenimiento de Usuarios" />

      <div className="mb-10">
        <UsersTable  users={users}
        />
      </div>
    </>
  );
}