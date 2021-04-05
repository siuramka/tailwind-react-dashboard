const ParcelCard = (parcelList) => {

    let ParcelTest = {
        ID : 0,
        customerName : 'Vlad Galbad',
        customerID : '32514125125',
        companyName : 'Pigu.lt',
        companyOrderID: '#1441234123',
        deliveryType : 'Plane',
        deliveryInfo : 'SpaceX',
        orderStatus : 3,
        statusStatus : 2,
        lastUpdate : '1617321112',
        deliveryStatus : 3,
        hasProblems : 0
    };
    const {ID, customerName, customerID, companyName, companyOrderID, deliveryType, deliveryInfo,orderStatus,statusStatus,
    lastUpdate,deliveryStatus,hasProblems} = ParcelTest;

    return (
        <div class="p-6" key={ID}>
            <div class="w-full max-w-full">
                <div class="bg-white shadow-md rounded-md flex p-6 space-x-7">
                        <div className=" w-11 flex items-center justify-center">
                            <input type="checkbox" class="h-5 w-5 text-gray-600"/>
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
                            <div className="font-semibold">
                                (3 days ago)
                            </div>
                        </div>
                        <div className="w-1/6 flex items-center justify-center">
                            <div className="font-semibold bg-red-600 rounded-md text-white p-1 px-3">
                                Canceled
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
        
    )
}
export default ParcelCard;