const NoResult=(prop)=>{
    return(
        <div className="container no_result">
            <img src={prop.image} className="img-fluid" alt="No Result"/>
        </div>
    )
}

export default NoResult;