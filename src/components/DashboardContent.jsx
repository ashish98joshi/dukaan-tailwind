import { IoIosArrowDown } from "react-icons/io";


export const DashboardContent = () => {
    return <div className="p-3 sm:py-9 w-full gap-8 flex flex-col bg-gray-100">
        <div className="flex justify-between">
            <span className="font-medium text-lg">Overview</span>
            <button className="flex gap-2 px-2 py-2 bg-white rounded justify-end text-[#4D4D4D] items-center border mx-6">
                This Month <IoIosArrowDown/>
            </button>
        </div>
    </div>
}