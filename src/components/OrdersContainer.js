
import OrdersTable from './OrdersTable'
import uniqueCustomers from './../helperFunc/uniqueCustomers'
import OrdersChart from './OrdersChart'

const OrdersContainer = (props) =>{
    const { customers } = props
    
    const customerFrequency = () => {
        const customersData = uniqueCustomers(customers)
        const frequencyObj = { 1: 0, 2: 0, 3: 0, 4:0, '5+': 0 }
        customersData.forEach((cust) =>{
            const resultOrder = customers.filter((c) =>{
                return c.Phone === cust.Phone
            })

            if(resultOrder.length >= 5){
                frequencyObj['5+'] += resultOrder.length
            } else {
                frequencyObj[resultOrder.length]++
            }
        })
        return frequencyObj
    }

    return (
        <div className='row'>
            <div className='col-md-5'>
                <h2> Orders Distribution </h2>
                <OrdersTable data={customerFrequency()} />
            </div>

            <div className='col-md-5'>
                <OrdersChart data={customerFrequency()} />
            </div>
        </div>
    )
}   

export default OrdersContainer