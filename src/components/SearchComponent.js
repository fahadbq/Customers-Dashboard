const SearchComponent = (props) =>{
    const { term, handleChange } = props

    return (
        <div>
            <input className='form-control' type="text" value={term} onChange={handleChange} placeholder='search by name or mobile' />
        </div>
    )
}

export default SearchComponent