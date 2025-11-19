export default function TopNav() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm">
      {/* ฝั่งซ้าย: ชื่อหน้า หรือ Breadcrumbs */}
      <h1 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* ฝั่งขวา: เมนู Profile หรือ Notification */}
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-gray-200">
          🔔
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
           <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
             A
           </div>
           <span className="text-sm font-medium text-gray-700 hidden md:block">Admin User</span>
        </div>
      </div>
    </header>
  );
}