export const DashboardTable = () => {
    return <div className="flex flex-col gap-3 bg-white rounded-md">
        <div className="flex justify-between items-center p-2">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-gray-500">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                </svg>
                <input type="text" className="w-full focus:outline-none caret-slate-400 text-[#808080] " placeholder="Order ID or Transaction ID"></input>
            </div>
            <div className="flex gap-2 mx-5 mt-1.5 sm:flex-grow justify-end mr-5 sm:pr-2">
                <button className="rounded-md bg-white w-20 h-10 px-2.5 border border-[#D9D9D9] ">
                <p>Sort</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-700" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
                </button>
                <button className="rounded-md bg-white w-20 h-10 px-2.5 border border-[#D9D9D9] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
                </button>
            </div>
        </div>
    </div>
}