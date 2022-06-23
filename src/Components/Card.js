const Card = ({prop}) => {
  if(prop.Poster==="N/A")
    prop.Poster="../../movie_star_312306.webp";
    return (
    <div className="card my-3 mx-3" style={{width: "18rem"}} key={prop.key}>
      <img src={prop.Poster} className="card-img-top" alt={prop.Title} />
      <div className="card-body">
        <h5 className="card-title">{prop.Title}</h5>
        <p className="card-text" id="year">{prop.Year}</p>
        <p className="card-text" id="type">{prop.Type}</p>
      </div>
    </div>
    )
}

export default Card;