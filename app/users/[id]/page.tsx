import Link from "next/link";
// 1. กำหนดว่า params จะมีหน้าตาเป็นยังไง
interface Props{
    params: Promise<{ id:string}>;
}
// ต้องใส่ async เพราะเราต้องรอค่า params และ fetch ข้อมูล
export default async function UserDetailPage({params}:Props){
// 2. ใน Next.js 15 เราต้อง await params ก่อนใช้งาน
    const { id } = await params;
// 3. ดึงข้อมูลเฉพาะคนนี้ โดยเอา id ไปต่อท้าย URL API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center  bg-slate-500 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
                {/* ส่วนหัว */}
                <div className="border-b pb-4 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-500">@{user.username}</p>
                </div>
                {/* รายละเอียด */}
                <div className="space-y-3">
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">Address:</span> {user.address.city}, {user.address.street}</p>
                    <p><span className="font-semibold">Company:</span> {user.company.name}</p>
                </div>
                {/* ปุ่มย้อนกลับ */}
                <div className="mt-8">
                    <Link href={"/users"} 
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition "
                    >ย้อนกลับไปหน้ารายชื่อ</Link>
                </div>
            </div>
        </div>
    )
}
