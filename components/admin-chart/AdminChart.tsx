"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", uv: 2000, pv: 2400 },
  { name: "Feb", uv: 1150, pv: 2210 },
  { name: "Mar", uv: 1200, pv: 2290 },
  { name: "Apr", uv: 1278, pv: 2000 },
];

export default function AdminChart() {
  return (
    <ResponsiveContainer width="100%" className={"mt-20 "} height={300}>
      <BarChart width={230} className="-z-10" height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#63C7FF" />
        <Bar dataKey="uv" fill="#3B76EF" />
      </BarChart>
    </ResponsiveContainer>
  );
}
