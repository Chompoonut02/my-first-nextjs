import Link from "next/link";

export default function AboutPage(){
    return(
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
            <p className="mb-8 text-gray-400">ชื่อคน</p>

            <Link href="/" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >กลับหน้าหลัก</Link>
        </div>
    );
}