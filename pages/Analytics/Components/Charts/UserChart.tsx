
import React, { PureComponent, useState } from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MonthsUsersChart from './Users/MonthUsersChart';
import DayUsersChart from './Users/DaysUsersChart';
import YearsUsersChart from './Users/YearUsersChart';







export default function UserChart() {

    const [selectedMonts, setSelectedMonths] = useState("12")
    return (
        <div className='pt-10'>

            <div className='rounded-xl border-2 w-[100%] py-5'>

                <div className='flex flex-row justify-between mx-5'>
                    <div>
                        Transaction Trends
                    </div>

                    <div className="my-auto  ">
                        <div className="text-center flex gap-x-4 my-auto mx-auto text-sm border-2 rounded-full  py-2 px-4 ">
                            <IoCloudDownloadOutline className="my-auto text-lg" />
                            Export as PDF
                        </div>

                    </div>
                </div>


                <div className='flex flex-row justify-between mx-5 mb-5'>
                    <div className='flex flex-row gap-x-4'>

                        <div
                            onClick={() => setSelectedMonths("12")}
                            className='hover:cursor-pointer'
                        >
                            12 Months

                            {selectedMonts === "12" && <div className='bg-secondary h-2 rounded-t-full' />}


                        </div>
                        <div
                            onClick={() => setSelectedMonths("30")}
                            className='hover:cursor-pointer'
                        >
                            30 days
                            {selectedMonts === "30" && <div className='bg-secondary h-2 rounded-t-full' />}

                        </div>
                        <div
                            onClick={() => setSelectedMonths("7")}
                            className='hover:cursor-pointer'
                        >
                            7 days
                            {selectedMonts === "7" && <div className='bg-secondary h-2 rounded-t-full' />}

                        </div>

                    </div>

                    <div className=' flex flex-row justify-between gap-x-5'>
                        <div className='flex'>
                            <div className='h-3 w-3 mx-2 rounded-sm bg-[#39248C] my-auto' /> Vendors
                        </div>
                        <div className='flex'>
                            <div className='h-3 w-3 mx-2 rounded-sm bg-[#5E3BE8] my-auto' />  Swoopers
                        </div>
                        <div className='flex'>
                            <div className='h-3 w-3 mx-2 rounded-sm bg-[#9980FF] my-auto' />  Customers
                        </div>
                    </div>
                </div>






                {selectedMonts === "7" && <DayUsersChart />}
                {selectedMonts === "12" && <YearsUsersChart />}
                {selectedMonts === "30" && <MonthsUsersChart />}

            </div>






        </div>
    )
}





