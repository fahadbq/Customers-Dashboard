const CustomersTable = (props) =>{
    const {customers, showDetails} = props

    return(
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust)=>{
                        return (
                            <tr key={cust.Phone}>
                                <td>{cust.Name}</td>
                                <td>{cust.Phone}</td>
                                <td> <button onClick={() =>{
                                    showDetails(cust)
                                }} className='btn btn-primary'>show </button> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CustomersTable