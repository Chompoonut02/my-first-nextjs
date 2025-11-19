"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 2. import hook

export default function Sidebar() {
    const pathname = usePathname(); // 3. รับค่า URL ปัจจุบัน
    // ฟังก์ชันเช็คว่าลิงก์นี้ Active อยู่ไหม?
    const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col sticky top-0">
      {/* ส่วน Logo */}
      <div className="p-4 text-2xl font-bold text-blue-400 border-b border-slate-800">
        MyApp 🚀
      </div>

      {/* ส่วนเมนู */}
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/" 
          // 4. ใช้ Conditional Logic ใน className
          className={`block px-4 py-3 rounded transition ${
            isActive("/") ? "bg-blue-600 text-white" : "hover:bg-slate-800 text-gray-300"
          }`}
        >
          🏠 หน้าแรก
        </Link>
        <Link 
          href="/users" 
          className={`block px-4 py-3 rounded transition ${
            isActive("/users") || pathname.startsWith("/users/") // เช็คเผื่อหน้าย่อยด้วย
              ? "bg-blue-600 text-white" 
              : "hover:bg-slate-800 text-gray-300"
          }`}
        >
          👥 ผู้ใช้งาน
        </Link>
        <Link 
          href="/about" 
          className={`block px-4 py-3 rounded transition ${
            isActive("/about") || pathname.startsWith("/about/") // เช็คเผื่อหน้าย่อยด้วย
              ? "bg-blue-600 text-white" 
              : "hover:bg-slate-800 text-gray-300"
          }`}
        >
          ℹ️ เกี่ยวกับเรา
        </Link>
      </nav>

      {/* ส่วนล่างสุด (เช่น Logout) */}
      <div className="p-4 border-t border-slate-800">
        <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-slate-800 rounded">
          🚪 ออกจากระบบ
        </button>
      </div>
    </aside>
  );
}