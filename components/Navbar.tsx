import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-slate-800 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* โลโก้ */}
                <Link href={"/"} className="text-2xl font-bold text-blue-400"> My App</Link>

                {/* เมนูลิ้งก์ */}
                <ul className="flex space-x-6">
                    <li>
                        <Link href={"/"} className="hover:text-blue-300 transition">หน้าแรก</Link>
                    </li>
                    <li>
                        <Link href={"/users"} className="hover:text-blue-300 transition">ผู้ใช้งาน</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="hover:text-blue-300 transition">เกี่ยวกับ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}