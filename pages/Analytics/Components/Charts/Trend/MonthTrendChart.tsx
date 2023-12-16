import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { DaysTrend, MonthsTrend } from "../../../../../lib/mockData";




export default function MonthTrendCharts(){
    return(
        <LineChart
        width={1100}

        height={300}
        data={MonthsTrend}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >

        <CartesianGrid strokeDasharray="3 0" vertical={false} />
        <XAxis dataKey="name" />



        <Line type="monotone" dataKey="pv" stroke="#39248C" />
        <Line type="monotone" dataKey="uv" stroke="#5E3BE8" />
        <Line type="monotone" dataKey="amt" stroke="#9980FF" />
    </LineChart>
    )
}