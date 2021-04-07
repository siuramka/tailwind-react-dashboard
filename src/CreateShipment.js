import {useState} from 'react'

const CreateShipment = () => {
    return(
        <div className="create-shipment-content grid sm:grid-cols-1 md:grid-cols-4 "> 
            <div class="mt-10 col-span-2 md:col-start-2 ">
                <form>
                    <div className="rounded-md shadow-sm space-y-6">
                        <div className="bg-white">
                            <div className="font-medium border-b border-gray-200 pb-5">
                                Personal information
                            </div>
                            <div className="grid grid-cols-4 border-b border-gray-200 pb-5 pt-5">
                                <div className="col-span-2">
                                    <label className="text-gray-800  block text-sm font-medium">First name</label>
                                    <input className="mt-4 w-full p-2 bg-white col-span-2 sm:col-span-1 rounded-md border border-gray-200"></input>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 border-b border-gray-200 pb-5 pt-5">
                                <div className="col-span-2">
                                    <label className="text-gray-800 block text-sm font-medium">Last name</label>
                                    <input className="mt-4 w-full p-2 bg-white col-span-2 sm:col-span-1 rounded-md border border-gray-200"></input>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 pb-5 pt-5">
                                <div className="col-span-2">
                                    <label className="text-gray-800 block text-sm font-medium">E-mail adress</label>
                                    <input className="mt-4 w-full p-2 bg-white col-span-2 sm:col-span-1 rounded-md border border-gray-200 focus:outline-none"></input>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bg-gray-100">
                        <div className="px-4 py-3 text-right">
                            <button className="bg-green-300 focus:outline-none hover:bg-green-500 shadow-sm px-4 py-2 rounded-md font-semibold text-black">
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateShipment;