import Link from "next/link"


export const FooterPage = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
        <Link href='/'>
        <span>PetShop </span>
        <span> | La Santa</span>
        <span> © {new Date().getFullYear()}</span>
        </Link>
    </div>
  )
}
