export const DashboardTransaction = () => {
    return <section className="flex-col flex px-3 sm:px-1 gap-6">
        <p className="text-black font-semibold text-2xl">Transactions | This Month</p>
        <div className="flex gap-3">
            <button className="rounded-full px-4 py-1 bg-[#E6E6E6] text-[#808080] text-lg">Payouts (22)</button>
            <button className="rounded-full px-4 py-1 bg-[#146EB4] text-white text-lg ">Refund (6)</button>
        </div>
    </section>
}