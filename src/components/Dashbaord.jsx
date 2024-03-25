import { DashboardContent } from "./DashboardContent"
import { DashbaordHeader } from "./DashboardHeader"

export const Dashboard = () => {
    return <>
        <div className="flex justify-between items-center border-b h-16 gap-2 sm:gap-4">
            <DashbaordHeader/>
        </div>
        <DashboardContent/>
    </>
}