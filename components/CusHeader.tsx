
import { useRouter } from "next/router";
import { FaRegBell } from "react-icons/fa";

import { IoPersonCircleSharp, IoArrowBackCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import ProfileDrop from "./ProfileDropDown";
import Notification from "./NotificationDropDown";
type MyProps = {
    title?: any
    isStack?: boolean
}



export default function CusHeader(props: MyProps) {

    const router = useRouter()


    return (
        <div className="w-full bg-white h-15 border-b-2 flex flex-row justify-between px-2 py-5">



            <div className="flex mx- text-xl font-mono">
                {props.isStack === true &&
                    <div 
                    onClick={router.back}
                    className=" my-auto hover:cursor-pointer  ">

                        <IoMdArrowRoundBack />
                    </div>
                }
                <div>{props.title}</div>
            </div>

            <div className="flex flex-row text-3xl  space-x-5">
                {/* <div>
                    <FaRegBell />
                </div> */}
                {/* <div>
                    <IoPersonCircleSharp />
                </div> */}

                <Notification/>

                <ProfileDrop/>

            </div>

        </div>
    )
}