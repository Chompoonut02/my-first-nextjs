"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home(){
  const [count, setCount] = useState(0);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white gap-6">
      <h1 className="text-5xl font-bold text-blue-500">Hello Next.js 15!</h1>

      <div className="text-center p-6 border border-gray-700 rounded-xl">
        <p className="text-xl mb-2">กดปุ่มเพื่อนับเลข</p>
        <span className="text-6xl font-bold text-green-400">{count}</span>

        <div className="mt-4 flex gap-4">
          <button onClick={()=> setCount(count-1)}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
            ลด (-1)
          </button>
          <button onClick={()=> setCount(count+1)} 
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
            เพิ่ม (+1)
          </button>
        </div>
      </div>
      <Link href={"/about"} className="text-gray-400 hover:text-white underline">ไปดูหน้า About</Link>
    </div>
  );
}