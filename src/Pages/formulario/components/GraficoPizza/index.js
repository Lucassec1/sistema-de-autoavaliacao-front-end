import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Detratores', value: 400 },
  { name: 'Neutros', value: 300 },
  { name: 'Promotores', value: 300 },
];

const COLORS = ['#FF324B', '#FFD747', '#00DC7D',];


export default function GraficoPizza() {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={90} fill="#82ca9d" label>
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}