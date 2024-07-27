
export default function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
   <main className=" bg-white flex justify-center">
    <div className="w-full ">
    {children}
    </div>
   </main>
  );
}