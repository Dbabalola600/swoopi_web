


import Link from "next/link";
import { useState } from "react";
import { MdInsertChartOutlined, MdDeliveryDining } from "react-icons/md"
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { useRouter } from "next/router";
import { GoVerified } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { BiStore, BiError } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import Logo from "../public/logo.svg"
import Image from "next/image";

const Content = [
    { title: "Analytics", link: "/Analytics", icon: "MdInsertChartOutlined" },
    { title: "Verification", link: "/Verification", icon: "GoVerified", amount: "07" },
    { title: "Orders", link: "/Orders", icon: "BsFillJournalBookmarkFill", amount: "04" },
    { title: "Transactions", link: "/Transactions", icon: "LiaMoneyBillSolid", amount: "02" },
    { title: `Customers`, link: "/Customers", icon: "BsPeople" },
    { title: `Vendors`, link: "/Vendors", icon: "BiStore" },
    { title: `Swoopers`, link: "/Swoopers", icon: "MdDeliveryDining" },
    { title: `Admin Users`, link: "/AdminUsers", icon: "BsPeople" },
    { title: `Campaigns`, link: "/Campaigns", icon: "IoPricetagOutline" },
    { title: `Issues`, link: "/Issues", icon: "BiError", amount: "6" },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export default function UserSideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const firstPortion = router.pathname.split('/')[1];
    console.log(firstPortion);







    return (

        <div className=" hidden lg:block  bg-white border-r-2 ">

            {/* {data?.user?.image === ''  ? (
                <div className="flex justify-center items-center pt-5 ">
                    <div className="avatar">
                        <div className="w-40 h-30 text-center rounded-full flex justify-center items-center">
                            <CgProfile className="w-32 h-32 text-gray-600" />
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="mx-20"
                >
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img
                                src={`${data?.user?.image}`}
                                alt="User Profile Pic"
                            // className="rounded-badge"
                            // style={{ maxWidth: "50%",  }}
                            /> </div>
                    </div>
                </div>
            )} */}


            <div className="flex justify-center items-center pt-5 ">

                    <div className="w-20 h-20 bg-white text-center rounded-full flex justify-center items-center">
                        <Image
                            src={Logo}
                        />
                    </div>

            </div>


            < div
                className="hidden lg:block   py-10 space-y-3  text-gray-500"
            >

                {Content.map((info, index) => (
                    <Link
                        href={info.link}
                        key={index}
                    >
                        <div

                            className={classNames(
                                (`/${router.pathname.split('/')[1]}`) === info.link
                                    ? " "
                                    : "text-gray-500 text-sm font-light hover:bg-gray-500 hover:text-black",
                                "group flex items-center  gap-x-4 text-sm font-medium"
                            )}

                        // className="flex flex-row gap-x-4 hover:bg-red-500 group hover:text-black"

                        >

                            <div
                                className={classNames(
                                    (`/${router.pathname.split('/')[1]}`) === info.link
                                        ? "bg-secondary  font-light h-10  w-1 rounded-r-full "
                                        : "",
                                    "group flex items-center text-sm font-medium"
                                )}
                            />

                            <div
                                className={classNames(
                                    (`/${router.pathname.split('/')[1]}`) === info.link
                                        ? "bg-specpurple  text-primary font-light w-full mr-3 rounded-lg px-2"
                                        : "w-full px-2",
                                    "group flex items-center  py-3 text-sm font-medium"
                                )}
                            >
                                <div
                                    className="items-center py-1 text-xl mx-2 "
                                >
                                    {info.icon === "MdInsertChartOutlined" && <MdInsertChartOutlined />}
                                    {info.icon === "GoVerified" && <GoVerified />}
                                    {info.icon === "LiaMoneyBillSolid" && <LiaMoneyBillSolid />}
                                    {info.icon === "BsPeople" && <BsPeople />}
                                    {info.icon === "BiStore" && <BiStore />}
                                    {info.icon === "MdDeliveryDining" && <MdDeliveryDining />}
                                    {info.icon === "IoPricetagOutline" && <IoPricetagOutline />}
                                    {info.icon === "BiError" && <BiError />}
                                </div>
                                <div
                                    className=" text-lg "
                                >
                                    {info.title}
                                </div>

                                <div
                                    // className="rounded-full  px-2 bg-[#F0F1F3] ml-auto "
                                    className={classNames(
                                        (`/${router.pathname.split('/')[1]}`) === info.link
                                            ? " rounded-full  px-2 text-white bg-primary ml-auto "
                                            : " rounded-full  px-2 bg-[#F0F1F3] ml-auto ",
                                        "group flex items-center   text-sm font-medium"
                                    )}
                                >
                                    {info.amount}
                                </div>
                            </div>


                        </div>
                    </Link>
                ))}




            </div>

        </div >
    );



}




