const orderTotal = (customers) => {
    let sum = 0;
    for (const customer of customers) {
       sum += customer.Amount;
    }
    return sum;
 }; 
 
 export default orderTotal