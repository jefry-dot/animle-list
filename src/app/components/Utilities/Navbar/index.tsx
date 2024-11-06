import Link from "next/link"
import InputSearch from "./InputSearch"


const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-4">
                <Link href="/" className="font-bol text-white text-3xl">AnimleList</Link>

                <InputSearch/>
            </div>
        </header>
    )
}
export default Navbar