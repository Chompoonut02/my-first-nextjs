export default function Loading(){
    return (
        <div className="flex min-h-screen items-centerr justify-center bg-gary-100">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 className="tetx-xl text-gray-600 animate-pulse">กำลังดึงข้อมูล</h2>
            </div>
        </div>
    )
}