import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import Charts from "react-apexcharts";
import "../dashboard/Dashboard.css";
import { Button } from "@mui/material";

const MonthlyEarnings = () => {
  const [earnedVal, setEarnedVal] = useState([]);
  const [dataVal, setDataVal] = useState([]);
  const earnData = [
    {
      name: "Jan",
      data: 500,
    },
    {
      name: "Feb",
      data: 300,
    },
    {
      name: "Mar",
      data: 700,
    },
    {
      name: "Apr",
      data: 350,
    },
    {
      name: "May",
      data: 753,
    },
    {
      name: "Jun",
      data: 790,
    },
    {
      name: "Jul",
      data: 900,
    },
    {
      name: "Aug",
      data: 1000,
    },
    {
      name: "Sep",
      data: 950,
    },
    {
      name: "Oct",
      data: 530,
    },
    {
      name: "Jul",
      data: 400,
    },
    {
      name: "Nov",
      data: 600,
    },
    {
      name: "Dec",
      data: 654,
    },
  ];

  useEffect(() => {
    const val = earnData.map((month) => {
      return month.name;
    });
    const data = earnData.map((month) => {
      return month.data;
    });
    setEarnedVal(val);
    setDataVal(data);
  }, []);

  console.log("valName", earnedVal);
  console.log("dataVal", dataVal);
  return (
    <Card>
      <Charts
        type="bar"
        width={"100%"}
        height={200}
        series={[
          {
            name: "Earnings",
            data: dataVal,
          },
        ]}
        options={{
          title: {
            text: "Overview",
            style: {
              fontSize: "10px",
            },
          },
          subtitle: {
            text: "Monthly Earning",
            style: {
              fontSize: "8px",
            },
          },
          
          chart: {
           toolbar:{
            show:false
           }
          },
          colors: ["#D7D7FE"],
          theme: { mode: "light" },
          tooltip: {
            enabled: true,
            onDatasetHover: {
              highlightDataSeries: false,
            },
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              hover: {
                color: "#0C10ED",
              },
            },
            dataLabels: {
              orientation: "vertical",
            },
          },

          xaxis: {
            categories: earnedVal,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
            labels: {
              show: true,
            },
          },
          dataLabels: {
            enabled: false,
            orientation: "vertical",
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          marker: {
            show: false,
          },
        }}
      ></Charts>
    </Card>
  );
};
export default MonthlyEarnings;
