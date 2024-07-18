import {SideBar, TopMenu} from "@/components"


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
   <main className="px-1 bg-white min-h-screen md:px-5">
    <TopMenu/>
    <SideBar/>
    {children}
   </main>
  );
}