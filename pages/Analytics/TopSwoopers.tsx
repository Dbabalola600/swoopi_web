import CusHeader from "../../components/CusHeader";
import DefaultLayout from "../../components/DefaultLayout";
import SearchBox from "../../components/SearchBox";

import { IoCloudDownloadOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { AllSwoopersList, AllVendorList } from "../../lib/mockData";
import { FiEye } from "react-icons/fi";
import { ChangeEvent, useEffect, useState } from "react";
import ReactStars from 'react-stars'
import Image from "next/image"

export default function TopSwoopers() {
    const total = AllSwoopersList.length

    const [currentPage, setCurrentPage] = useState(0);

    const [isRows, setRows] = useState<any>(10)

    const handleSelectChange = (e: any) => {
        setRows(Number(e.target.value));
        setCurrentPage(0); // Reset to the first page when changing the number of rows
    };

    const nextSet = () => {
        const maxPage = Math.ceil(total / isRows) - 1;
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };


    const preSet = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    // console.log(total)

    useEffect(() => {
        setCurrentPage(0);
    }, [AllVendorList]);


    return (
        <DefaultLayout>

            <div>
                <CusHeader
                    title="Top Vendors"
                    isStack
                />
                <div
                    className=" mx-5 my-4 border border-[#F0F1F3]  py-10 rounded-xl"
                >

                    <div className="flex flex-row justify-between px-5">
                        <div className="my-auto font-bold text-xl">
                            Top 20 Swoopers
                        </div>


                        <div className="flex flex-row justify-between gap-x-10">
                            <div>
                                <SearchBox />
                            </div>


                            <div className=" rounded-xl flex  my-auto border-2 py-4 px-5">
                                <CiCalendar className="my-auto text-xl mx-2" />

                                Jan 6, 2022 – Jan 13, 2022
                            </div>

                            <div className="my-auto  ">
                                <div className="text-center flex gap-x-4 my-auto mx-auto text-sm border-2 rounded-full  py-2 px-4 ">
                                    <IoCloudDownloadOutline className="my-auto text-lg" />
                                    Export as CSV
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* table */}
                    <table
                        className="table-auto text-xs lg:text-sm w-full "
                    >


                        <thead className="bg-[#F0F1F3]  w-full   h-16 sticky top-0 z-50">
                            <tr>

                                <th className="">Position</th>
                                <th className="">Swooper</th>
                                <th className=""> Delivery</th>
                                <th className="">
                                    Earnings
                                </th>
                                <th className="">Hours Worked</th>
                                <th className="">Kilometer</th>
                                <th className=" "></th>


                            </tr>
                        </thead>

                        <tbody className="border-b-2" >

                            {AllSwoopersList
                                .slice(currentPage * isRows, (currentPage + 1) * isRows)
                                .map((info, index) => (
                                    <tr
                                        key={index}
                                        className="border-t-2 mb-10"
                                    >
                                        <td className="  mx-auto text-center">
                                            {info.num}
                                        </td>

                                        <td className=" mb-5 mx-auto flex justify-center">
                                            <div className=" flex flex-row  gap-x-4  justify-between">
                                                <div className="bg-black rounded-full w-10 h-10">
                                                    <Image
                                                        src={require("../../public/person_pic.svg")}

                                                        height={90}
                                                        width={90}
                                                        style={{ alignItems: "center" }}
                                                    />
                                                </div>
                                                <div>
                                                    {info.name}
                                                    <div> {info.tel}</div>

                                                </div>

                                            </div>

                                        </td>
                                        <td className="  mx-auto text-center">
                                            {info.deliveries}
                                        </td>
                                        <td className=" mx-auto text-center">
                                            {info.amount}
                                        </td>

                                        <td className=" mx-auto text-center">
                                            {info.hours} hrs
                                        </td>

                                        <td className=" mx-auto text-center">
                                            {info.range}
                                        </td>



                                        <td className=" mx-auto text-center">
                                            <FiEye />
                                        </td>
                                    </tr>

                                ))}

                        </tbody>

                    </table>


                    <div className="flex flex-row justify-between mx-5 mt-5">
                        <div>
                            Rows
                            <select value={isRows} onChange={handleSelectChange} className="border-2 py-1 mx-2 ">
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>

                        </div>

                        <div className="border-2 rounded-full flex flex-row gap-x-3 py- px-2">
                            <button

                                className={`py-2 px-2 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={preSet}
                                disabled={currentPage === 0}

                            >
                                ← Previous
                            </button>

                            <div className="border-l-2 border-gray-400 h-full my-auto mx-3"></div>

                            <button
                                className={`py-2 px-2 ${currentPage === Math.ceil(total / isRows) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={nextSet}
                                disabled={currentPage === Math.ceil(total / isRows) - 1}
                            >
                                Next   →
                            </button>
                        </div>
                    </div>




                </div>
            </div>

        </DefaultLayout>

    )

}