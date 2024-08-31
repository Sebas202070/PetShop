import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth()
  console.log({session})
  if (session?.user) {
    redirect("/")
  }
  return (
   <main className=" bg-white flex justify-center">
    <div className="w-full ">
    {children}
    </div>
   </main>
  );
}