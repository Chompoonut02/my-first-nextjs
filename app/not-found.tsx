import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <h2 className="text-2xl font-bold mt-4">อ้าว... หาหน้านี้ไม่เจอครับ</h2>
      <p className="text-gray-500 mt-2 mb-6">คุณอาจจะพิมพ์ URL ผิด หรือหน้านี้ถูกลบไปแล้ว</p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
      >
        กลับหน้าแรกดีกว่า
      </Link>
    </div>
  );
}