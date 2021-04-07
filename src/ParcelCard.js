import {useState} from 'react'
const ParcelCard = ({data}) => {

    const {ID, customerName, customerID, companyName, companyOrderID, deliveryType, deliveryInfo,orderStatus,statusStatus,
    lastUpdate,deliveryStatus,hasProblems} = data;

    return (
        <div className="parcel-thumb" key={ID}>
            <div className="pl-6 pr-6 pt-6">
                <div className="w-full max-w-full">
                    <div className="bg-white shadow-md rounded-md flex p-6 space-x-7">
                            <div className=" w-11 flex items-center justify-center">
                                <input type="checkbox" className="h-5 w-5 text-gray-600"/>
                            </div>
                            <div className="w-1/6 ">
                                <div className="font-semibold">
                                    {customerName}
                                </div>
                                <div>
                                    {customerID}
                                </div>
                            </div>
                            <div className="w-1/6">
                                <div className="font-semibold">
                                    {companyName}
                                </div>
                                <div>
                                    {companyOrderID}
                                </div>
                            </div>
                            <div className="w-1/6" >
                                <div className="font-semibold">
                                    {deliveryType}
                                </div>
                                <div>
                                    {deliveryInfo}
                                </div>
                            </div>
                            <div className="w-1/6">
                                <div className="font-semibold">
                                    Shipped
                                </div>
                                <div className="font-semibold">
                                    Delivered
                                </div>
                            </div>
                            <div className="w-1/6">
                                <div className="font-semibold">
                                    Rejected by customs
                                </div>
                                <div className="">
                                    (3 days ago)
                                </div>
                            </div>
                            <div className="w-1/6 flex items-center justify-center">
                                <div className="font-semibold bg-red-600 rounded-md text-white p-1 px-3">
                                In Transit
                                </div>
                            </div>
                            <div className="w-11 flex items-center justify-center ">
                                <button className="font-semibold bg-red-600 rounded-md text-white p-1 px-3">
                                *
                                </button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
export default ParcelCard;