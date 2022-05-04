
import React from "react";
import Chart from "react-google-charts";

const OrdersChart = (props) => {
   const { data } = props;

   const chartData = [["No. of orders", "Count of customers"]];

   for (const key in data) {
      chartData.push([key, data[key]]);
   }

   const chartOption = {
      title: "Orders Count",
      pieHole: 0.5,
      is3D: true,
   };

   return (
      <div>
         <Chart
            width={"600px"}
            height={"320px"}
            chartType="PieChart"
            data={chartData}
            options={chartOption}
            rootProps={{ "data-testid": "3" }}
         />
      </div>
   );
};

export default OrdersChart;