import ParcelCard from "./ParcelCard"


const ParcelList = ({data}) => {
    return (
        <div className="parcel-thumb-list">
            {data.map((parcel) => (
                <ParcelCard data={parcel}/>
            ))}
        </div>
    )
}

export default ParcelList;