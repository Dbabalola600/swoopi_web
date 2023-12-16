import { BarChart, CartesianGrid, XAxis, Bar } from "recharts";
import { DaysUsers } from "../../../../../lib/mockData";





export default function DayUsersChart() {
    return (
        <BarChart
            width={1100}
            height={300}
            data={DaysUsers}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 0" vertical={false} />
            <XAxis dataKey="name" />


            <Bar dataKey="pv" stackId="a" fill="#39248C" />
            <Bar dataKey="amt" stackId="a" fill="#5E3BE8" />
            <Bar dataKey="uv" stackId="a" fill="#9980FF" />
        </BarChart>
    )
}
