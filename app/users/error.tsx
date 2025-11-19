"use client";

import { useEffect, useState } from "react";

export default function Error({error,reset,}:{error: Error; reset: ()=>void;}){
    useEffect(() => {
        // เอาไว้ส่ง log ไปเก็บที่ server ได้
        console.error(error);
    }, [error]);

    return(
        <div className="flex flex-col items-center justify-center p-10 bg-red-50 border border-red-200 rounded-xl m-4">
      <h2 className="text-2xl font-bold text-red-600 mb-2">อุ๊ย! มีบางอย่างผิดพลาด</h2>
      <p className="text-red-500 mb-6">ระบบขัดข้องชั่วคราว (Simulation)</p>
      
      <button
        onClick={
          // พยายามโหลดหน้านี้ใหม่ (Re-render)
          () => reset()
        }
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        ลองอีกครั้ง (Try Again)
      </button>
    </div>
    );
}
