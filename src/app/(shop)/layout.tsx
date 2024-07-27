import {FooterPage, SideBar, TopMenu} from "@/components"


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
   <main className="px-1 bg-white max-h-screen pb-4 md:px-5">
    <TopMenu/>
    <SideBar/>
    {children}
    <FooterPage/>
   </main>
  );
}