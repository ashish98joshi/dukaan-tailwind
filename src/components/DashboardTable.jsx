import { TableData } from "../utils/TableData";


export const DashboardTable = () => {
    return <>
        <TableHeader/>
        <TableBody tableData={TableData}/>
    </>
}

const TableHeader = () => {
    const tableHeader = ['Order ID', 'Status', 'Transaction ID', 'Refund Date', 'Order Amount'];

    return <div className="bg-gray-100 rounded-md grid grid-cols-5 gap-2 sm-gap-4 ml-1 mr-1 overflow-x">
        {tableHeader.map((header, index) => {
            return <div key={index} className={`px-3 py-2 items-center overflow-hidden  ${index == tableHeader.length - 1 ? 'text-right' : index < 3 ? 'text-center sm:text-left' : 'text-center'}`}>
                {header}
            </div> 
        })}
    </div>
}

const TableBody = ({tableData}) => {
    return <div className="h-fit">
        {tableData.map((data, idx) => {
            return <div>{data.orderId}</div>
        })}

    </div>
}