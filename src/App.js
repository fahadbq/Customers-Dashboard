
import React from "react";
import data from "./data.json";
import StatsContainer from "./components/StatsContainer";
import CustomersContainer from "./components/CustomersContainer";
import OrdersContainer from "./components/OrdersContainer";

const App = (props) => {
   const customers = data;
   // console.log(customers)

   return (
    <div className='container'>

    <h1 className='display-4'>Customers Dashboard</h1>
    <StatsContainer customers={customers} />
    <CustomersContainer customers={customers}/>
    <OrdersContainer customers={customers}/>
</div>
   );
};

export default App;