const Search=(props)=>{
    return(
        <div className='search' style={{width:"100%"}}>
          <div className='mb-3'>
            <input type="text" className="form-control" style={{display:"block", margin:"auto"}} id="title" placeholder='Enter Movie Name and Press Enter' value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} required={true}/>
          </div>
        </div>
    );
}
export default Search;