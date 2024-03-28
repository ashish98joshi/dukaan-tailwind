import { DashboardTable } from "./DashboardTable"

export const DashboardTransaction = () => {
    return <>
        <section className="flex-col flex px-3 sm:px-1 gap-6">
            <p className="text-black font-semibold text-2xl">Transactions | This Month</p>
            <div className="flex gap-3">
                <button className="rounded-full px-4 py-1 bg-[#E6E6E6] text-[#808080] text-lg">Payouts (22)</button>
                <button className="rounded-full px-4 py-1 bg-[#146EB4] text-white text-lg ">Refund (6)</button>
            </div>
        </section>
        
        <div className="flex flex-col gap-2 bg-white p-2 rounded-md">
            <div className="flex justify-between items-center p-2 gap-2 rounded-md">
                <div className="flex  gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-gray-500 mt-1">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                    </svg>

                    <input type="text" className="w-full focus:outline-none caret-slate-400 text-[#808080] " placeholder="Order ID or Transaction ID"></input>
                </div>

                <div className="flex gap-2 items-center">
                    <button className="flex rounded-md bg-white w-20 h-10 px-2.5 border border-[#D9D9D9] items-center gap-2 text-[#4D4D4D]">
                    <p>Sort</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                    </button>
                    
                    <button className="rounded-md bg-white w-10 h-10 p-2 border border-[#D9D9D9] text-[#4D4D4D]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    </button>
                </div>
            </div>
            <DashboardTable/>
        </div>
    </>
}