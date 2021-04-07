
import useFetch from './useFetch';
import ParcelList from  './ParcelList'
const Shipments = () => {
    const { data, fetching, error } = useFetch('http://localhost:9000/apitest');
    return(
        <main>
            {error && <div className="m-auto bg-red-400 p-6 rounded-lg">Error while fetching.</div>}
            {fetching &&             
            <div className="pl-6 pr-6 pt-6">
                <div className="w-full max-w-full">
                    <div className="animate-pulse bg-gray-200  shadow-md rounded-md flex p-6 space-x-7">
                    </div>
                </div>
            </div>}
            {data &&
                <ParcelList data={data} />}
        </main>
    )
}
export default Shipments;