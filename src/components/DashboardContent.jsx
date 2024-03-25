import { IoIosArrowDown } from "react-icons/io";


export const DashboardContent = () => {
    return <div className="px-3 py-3 sm:px-6 sm:py-7 w-full gap-6 flex flex-col bg-gray-100">
        <div className="flex justify-between">
            <span className="font-medium text-lg p-1">Overview</span>
            <button className="flex gap-2 px-3 py-2 bg-white rounded justify-end text-[#4D4D4D] items-center border ">
                This Month <IoIosArrowDown/>
            </button>
        </div>
        <div className="flex gap-4 flex-wrap justify-between">
            <div className="rounded-lg bg-[#146EB4] hover:bg-[#0E4F82] flex flex-col gap-4 flex-grow">
                <span className="text-white flex items-center px-4 py-2 pb-1 gap-2 text-lg">
                    Next Payout
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </span>
                <div className="px-4 flex items-center justify-between text-white ">
                    <p className="text-3xl font-semibold">₹2,312.23</p>
                    <p className="flex underline font-medium gap-x-px">23 Orders 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </p>
                </div>
                <div className="px-5 flex rounded-md bg-[#0E4F82] h-10 w-full justify-between items-center text-slate-100 text-md m-auto py-2">
                    <p className="">Next Payment Date:</p>
                    <p className="jutsify-end">Today, 4:00PM</p> 
                </div>
            </div>  
            <div className="flex-grow rounded-[8px] bg-white p-4 flex flex-col gap-4 shadow-sm h-fit">Amount pending</div>
            <div className="flex-grow rounded-[8px] bg-white p-4 flex flex-col gap-4 shadow-sm h-fit">Amount processed</div>
        </div>
    </div>
}