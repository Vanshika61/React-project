const Shimmer = ()=>{
    return(
        <>
        <div className="shimmer-searchbar"></div>
        <div className="restaurant-list">
            {Array(20).fill("").map((e, index)=> <div className="shimmer-card" key={index}></div> )}
        </div>
        </>
    );
};

export default Shimmer;