import Link from "next/link";
import { AllSwoopersList } from "../../../../lib/mockData";
import Image from "next/image"






export default function SwooperList(){
    return(
        <div >
            <div className="flex flex-row justify-between ">
                <div>
                    <div className="text-bold text-xl font-mono">
                        Top 4 Swoopers

                    </div>
                    <div className="font-normal text-base ">This Week</div>
                </div>

                <Link
                    href={"/Analytics/TopSwoopers"}
                    className="hover:cursor-pointer"
                >
                    <a>
                        View All
                    </a>
                </Link>




            </div>


            <div className="mx-2 mt-2">

                {AllSwoopersList.slice(0,4).map((info, index) => (
                    <div
                        key={index}
                    >

                        <div className="flex flex-row mb-5 ">
                        <div className="bg-black rounded-full h-14 w-14">
                                <Image
                                src={require("../../../../public/person_pic.svg")}

                                height={90}  
                                width={90}
                                style={{alignItems: "center"}}
                                />
                            </div>

                            <div className=" my-auto mx-3">
                               {info.name}

                                <div className="text-[#48505E]">
                                   {info.deliveries} deliveries
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