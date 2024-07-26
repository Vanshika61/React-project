const Shimmer = ()=>{
    return(
        <>
        <div className="shimmer-searchbar"></div>
        <div className="restaurant-list">
        {Array(20).fill("").map(e=> <div className="shimmer-card"></div> )}
        </div>
        </>
    );
};

export default Shimmer;