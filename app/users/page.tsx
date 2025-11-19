import Link from "next/link";
// 1. กำหนดหน้าตาข้อมูล (TypeScript Interface)
interface User {
    id: number;
    name: string;
    email: string;
    website: string;
}

export default async function UserPage() {
    // 2. ดึงข้อมูลตรงๆ ใน Component ได้เลย (ทำงานฝั่ง Server)
    // ใส่ { cache: 'no-store' } เพื่อให้ดึงใหม่ทุกครั้งที่รีเฟรช (เหมือน Real-time)
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: "no-store",});
    
    const users: User[] = await res.json();

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">รายชื่อผู้ใช้งาน จากAPI</h1>
                    <Link href={"/"} className="text-blue-600 hover:underline">กลับหน้าหลัก</Link>
                </div>
                {/* 3. แสดงข้อมูลด้วย Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map((user) => (
                        // เปลี่ยน div เป็น Link และใส่ href แบบเจาะจง id
                        <Link href={`/users/${user.id}`} key={user.id} className="block"// ใส่ block ให้ link คลุมทั้งก้อน
                        >
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 cursor-pointer h-full">
                                <h2 className="test-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                                <p className="text-gray-500 text-sm mb-1">{user.email}</p>
                                <p className="text-blue-500 text-sm">{user.website}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}