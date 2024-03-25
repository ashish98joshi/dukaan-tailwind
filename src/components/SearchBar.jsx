export const SearchBar = () => {
    return <div className="flex items-center h-4/6 w-4/12 sm:w-[140px] bg-gray-100 rounded sm:flex-grow">
        <div className="flex items-center gap-2 p-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-gray-500">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
            </svg>
            <input type="text" className="w-full bg-gray-100 focus:outline-none caret-slate-400 text-[#808080] " placeholder="Search features, tutorials, etc."></input>
        </div>
    </div>
}

