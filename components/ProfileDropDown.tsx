import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";


export default function ProfileDrop() {


    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };


   
    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="max-w-xs bg-transparent flex items-center text-sm ">
                    <span className="sr-only">Open user menu</span>
                    <IoPersonCircleSharp className="w-7 h-7  text-black" />
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

                <Menu.Items className="bg-white border-2 rounded-xl origin-top-right absolute right-10 pt-4 mt-1 pb-10 space-y-5   w-80 ">

                    <Menu.Item>
                        {({ active }) => (
                            <div
                                className={`${active && 'bg-primary'} flex flex-row  gap-x-2 px-5`}
                            // href="/account-settings"
                            >
                                <CgProfile />

                                <div className='text-primary text-sm'>
                                    Gideon Ogunkola
                                    <div className='text-gray-600'> Super Admin</div>
                                </div>
                            </div>
                        )}
                    </Menu.Item>

                    <div className='border-t-2 w-full' />

                    <Menu.Item>
                        {({ active }) => (
                            <div
                                className={`${active && 'bg-primary'} flex flex-row  gap-x-2 px-5`}
                            // href="/account-settings"
                            >
                                <CgProfile />

                                <div className='text-gray-600 text-sm my-auto'>
                                    Profile

                                </div>
                            </div>
                        )}
                    </Menu.Item>

                    <Menu.Item>
                        {({ active }) => (
                            <div
                                onClick={toggleModal}

                                className={`${active && ' bg-primary'} flex flex-row  gap-x-2 text-red-500 px-5`}
                            // href="/account-settings"
                            >
                                <RiLogoutCircleRLine />

                                <div className=' text-sm my-auto'>
                                    Logout

                                </div>
                            </div>
                        )}
                    </Menu.Item>


                </Menu.Items>
            </Transition>



            {isModalOpen && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 px-10 rounded-xl w-[30%] shadow-md z-10">


                    <div className='flex flex-row justify-between pb-3'>

                        <RiLogoutCircleRLine className='text-red-500' />

                        <button

                            onClick={toggleModal}
                            className='text-2xl'>
                            X
                        </button>

                    </div>

                    <div> Logout</div>

                    <div className='text-sm'>
                        Are you sure you want to logout of the system
                    </div>


                    <div className='flex flex-row  pb-3 space-x-8 pt-10'>


                        <button

                            onClick={toggleModal}
                            className='text-xl border-2  w-full rounded-full px-5 py-1'>
                            Cancel
                        </button>
                        <button

                            onClick={toggleModal}
                            className='text-xl rounded-full px-5 py-1  w-full bg-red-500  text-white'>
                            Logout
                        </button>

                    </div>

                </div>
            )}


        </Menu>
    )
}