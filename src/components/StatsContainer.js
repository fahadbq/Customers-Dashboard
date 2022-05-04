
import StatsItem from './StatsItem'
import uniqueCustomers from './../helperFunc/uniqueCustomers'
import orderTotal from './../helperFunc/orderTotal'

const StatsContainer = (props) =>{
    const {customers } = props
    const orderCount = customers.length 



    return (
        <div className="row mb-3 mt-3" >
            <StatsItem count={orderCount} text='Orders' />
            <StatsItem  count={orderTotal(customers)} text='Amount' />
            <StatsItem count={uniqueCustomers(customers).length} text='Customers'/>
        </div>
    )
}

export default StatsContainer