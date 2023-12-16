import TrendChart from "./TrendChart";
import UserChart from "./UserChart";







export default function AllCharts() {
    return (
        <div className=" w-full ">
            <TrendChart />
            <UserChart />
        </div>
    )
}