import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegBell } from 'react-icons/fa';


export default function Notification() {


    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };



    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="max-w-xs bg-transparent flex items-center text-sm ">
                    <span className="sr-only">Open user menu</span>
                    <FaRegBell className=" w-7 h-7  my-auto mx-auto text-black" />
                </Menu.Button>
            </div>


            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

                <Menu.Items className="bg-white border-2 rounded-xl origin-top-right absolute px-5 right-10 pt-4 mt-1 pb-10 space-y-5   w-96 ">

                    <Menu.Item>
                        {({ active }) => (
                            <div
                                className={`${active && 'hover:cursor-pointer'} flex flex-row  gap-x-2 `}
                            // href="/account-settings"
                            >
                                <div className='bg-green-600 h-10 w-10 text-center text-white rounded-full my-auto'>
                                    V
                                </div>

                                <div className=' text-sm'>
                                    Verification
                                    <div className='text-gray-600'> You have 4 pending verification <span>1hr ago</span></div>
                                    <div className='text-primary'> View details</div>
                                </div>
                            </div>
                        )}
                    </Menu.Item>

                    <div className='border-t-2 w-full' />

                    <Menu.Item>
                        {({ active }) => (
                            <div
                                className={`${active && 'hover:cursor-pointer'} flex flex-row  gap-x-2 `}
                            // href="/account-settings"
                            >
                                <div className='bg-primary h-10 w-10 text-center text-white rounded-full my-auto'>
                                    0
                                </div>

                                <div className=' text-sm'>
                                    Order
                                    <div className='text-gray-600'> You have 6 unassigned orders <span>1hr ago</span></div>
                                    <div className='text-primary'> View details</div>
                                </div>
                            </div>
                        )}
                    </Menu.Item>

                    <div className='border-t-2 w-full' />

                    <Menu.Item>
                        {({ active }) => (
                            <div
                                className={`${active && 'hover:cursor-pointer'} flex flex-row  gap-x-2 `}
                            // href="/account-settings"
                            >
                                <div className='bg-[#E66455] h-10 w-10 text-center text-white rounded-full my-auto'>
                                    S
                                </div>

                                <div className=' text-sm'>
                                    Support
                                    <div className='text-gray-600'> You just receive a ticket from 3 persons <span>1hr ago</span></div>
                                    <div className='text-primary'> View details</div>
                                </div>
                            </div>
                        )}
                    </Menu.Item>







                </Menu.Items>
            </Transition>






        </Menu>
    )
}