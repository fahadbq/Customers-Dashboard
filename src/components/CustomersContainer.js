import { useState } from 'react'

import SearchComponent from './SearchComponent'
import CustomersTable from './CustomersTable'
import uniqueCustomers from './../helperFunc/uniqueCustomers'
import orderTotal from './../helperFunc/orderTotal'

const CustomersContainer = (props) =>{
    const {customers} = props
    const [ term, setTerm ] = useState('')
    const onlyUniqueCustomers = uniqueCustomers(customers)
    console.log(onlyUniqueCustomers)
    
    const showDetails = (cust) =>{
        const customerOrder = customers.filter(c => c.Phone === cust.Phone)
        const customerTotal = orderTotal(customerOrder)

        alert(`
            Name - ${cust.Name}
            Order Count - ${customerOrder.length}
            Order Total - ${customerTotal}
        `)
    }

    const handleChange = (e) =>{
        const read = e.target.value
        setTerm(read)
    }

    const filteredUniqueCustomers = () => {
        const result = onlyUniqueCustomers.filter((c) =>{
            return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
        })
        return result
    }

    return (
        <div className='row mb-3'>
                <div className='col-md-8'>
                    <h2>Listing Customers - {filteredUniqueCustomers().length} </h2>
                </div>

                
                <div className='col-md-4'>
                    <SearchComponent term={term} handleChange={handleChange}/>
                </div>

            
                <div class='col-md-12'>
                    <CustomersTable customers={filteredUniqueCustomers()} showDetails={showDetails}/>
                </div>
            
        </div>
    )
}

export default CustomersContainer