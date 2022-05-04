const StatsItem = (props) =>{
    const {count, text} = props
    
    return (
        <div className='col-md-4'>

            <div className='card bg-light text-green' >
                <div className='card-header'> <h2> { count } </h2> </div>
                <div className='card-body text-success' >
                    <div className='card-title'> <h4> { text } </h4> </div>
                </div>
            </div>

        </div>
    )
}

export default StatsItem