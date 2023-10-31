import React from "react";
import Charts from "react-apexcharts";
import "../dashboard/Dashboard.css";

const CustomersGraph = () => {
  return (
    <Charts
      type="donut"
      width={210}
      height={210}
      series={[60, 49, 20]}      
      options={{
        labels:["New Customers","Buyers","Non-buyers"],
        title:{
          text:'Customers',
          style:{
            fontSize:'10px'
          }
         },
         subtitle:{
           text:'Customers that buy products',
           style:{
            fontSize:'8px'
          }
         },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            customScale: 0.8,
            startAngle: -180,
            endAngle: 180,
            donut: {
              size: "60%",
              labels: {
                show: true,
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 200,
                fontSize: "10px",
                total: {
                  show: true,
                  showAlways: true,
                  fontSize: "10px",
                  label: "Total New Customers",
                },
                value: {
                  show: true,
                  fontSize: "30px",
                  offsetY: 0,
                },
              },
            },
          },
        },
        fill: {
          colors: ["#E15AC9", "#F2F1F2", "#0B2BCA"],
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 1,
            gradientToColors: "#3F54BF",
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 200, 0],
            colorStops: [],
          },
        },
        dataLabels: {
          enabled: false,
        },
      }}
    />
  );
};

export default CustomersGraph;
