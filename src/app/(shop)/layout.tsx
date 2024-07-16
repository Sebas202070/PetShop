import {SideBar, TopMenu} from "@/components"


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
   <main className="bg-white min-h-screen">
    <TopMenu/>
    <SideBar/>
    {children}
   </main>
  );
}