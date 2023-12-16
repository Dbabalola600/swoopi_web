

type MyProps = {
    title: any
    amount: any
    percent: any
}

export default function DashCards(props: MyProps) {
    return (
        <>
            <div className='border border-[#F0F1F3] rounded-xl py-5 w-[100%] pb-5'>
                <div className="mx-4">
                    {props.title}
                </div>

                <div className='flex flex-row justify-between mx-4 pb-10'>
                    <div className='font-bold text-lg'>
                        {props.amount}
                    </div>


                    {props.title === "Today’s refund" ?
                        <>
                            <div className='text-[#EE2024] border-[#F7989A]  bg-[#FEF3F2]  rounded-full px-5 border-2'>
                                ↓{props.percent}
                            </div>
                        </> :
                        <>
                            <div className='text-[#006559] border-[#8AB8B3]  bg-[#ECFDF3]  rounded-full px-5 border-2'>
                                ↑{props.percent}
                            </div>
                        </>
                    }

                </div>

                <div
                    className='w-full border'
                />

                <div className='text-primary text-right mx-4 pt-5'>
                    View report
                </div>
            </div>

        </>
    )
}