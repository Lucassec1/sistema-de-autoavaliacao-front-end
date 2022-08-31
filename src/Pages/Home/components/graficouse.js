import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
function Graficouse() {
    const data = [
        {
          name: "Page A",
      
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
         
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
        
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
      
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          
          pv: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          
          pv: 4300,
          amt: 2100
        }
      ];
      
        return (
          <LineChart
            width={700}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 33,
              left: -2,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#163A6F"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        );
}

export default Graficouse;