import Link from "next/link"
import { AllVendorList } from "../../../../lib/mockData"
import Image from "next/image"








export default function VendorList() {



    return (
        <div >
            <div className="flex flex-row justify-between ">
                <div>
                    <div className="text-bold text-xl font-mono">
                        Top 5 Vendors

                    </div>
                    <div className="font-normal text-base ">This Week</div>
                </div>

                <Link
                    href={"/Analytics/TopVendors"}
                    className="hover:cursor-pointer"
                >
                    <a>
                        View All
                    </a>
                </Link>





            </div>


            <div className="mx-2 mt-2">

                {AllVendorList.slice(0,5).map((info, index) => (
                    <div
                        key={index}
                    >

                        <div className="flex flex-row mb-5 ">
                            <div className="bg-black rounded-full h-14 w-14">
                                <Image
                                src={require("../../../../public/shop_logo.svg")}

                                height={90}  
                                width={90}
                                style={{alignItems: "center"}}
                                />
                            </div>

                            <div className=" my-auto mx-3">
                               {info.name}

                                <div className="text-[#48505E]">
                                   {info.orders} orders
                                    <span className="text-primary px-2">
                                      {info.amount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}