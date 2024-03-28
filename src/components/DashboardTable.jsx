import { TableData } from "../utils/TableData";


export const DashboardTable = () => {
    return <div className="overflow-x">
        <TableHeader/>
        <TableBody tableData={TableData}/>
    </div>
}

const TableHeader = () => {
    const tableHeader = ['Order ID', 'Status', 'Transaction ID', 'Refund Date', 'Order Amount'];

    return <div className="bg-gray-100 rounded-md grid grid-cols-5 gap-2 sm-gap-4 ml-1 mr-1">
        {tableHeader.map((header, index) => {
            return <div key={index} className={`px-3 py-2 items-center overflow-hidden ${index == tableHeader.length - 1 ? 'text-right' : index < 3 ? 'text-center sm:text-left' : 'text-center'}`}>
                {header}
            </div> 
        })}
    </div>
}

const TableBody = ({tableData}) => {
    return <div>
        {tableData.map((data, idx) => {
            if (idx == tableData.length - 1) {
                return <TableBodyContent data={data} idx={idx} lastIndex/>
            } else {
                return <TableBodyContent data={data} idx={idx}/>
            }
        })}

    </div>
}

const TableBodyContent = ({data, idx, lastIndex}) => {
    return <div className={`grid grid-cols-5 gap-3 sm-gap-4 ml-1 mr-1 p-2 text-sm text-[#4D4D4D] ${lastIndex ? '' : 'border-b-2'}`}>
        <div className="text-left pl-2 text-[#5685d1] font-semibold">{data.orderId}</div>
        <div className="text-left pl-2 flex gap-2 items-center">
            <span className={`w-[10px] h-[10px] rounded-full ${data.status == 'Successful' ? ' bg-green-500' : 'bg-gray-400'}`}> </span>
            <p className="">{data.status}</p>
        </div>
        <div className="text-left pl-4">{data.transactionId}</div>
        <div className="text-center pl-2">{data.refundDate}</div>
        <div className="text-right pr-2">{data.orderAmount}</div>
    </div>
}