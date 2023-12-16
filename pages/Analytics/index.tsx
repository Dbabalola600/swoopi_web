import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CusHeader from '../../components/CusHeader'
import DashCards from '../../components/DashCards'
import DefaultLayout from '../../components/DefaultLayout'
import AllCharts from './Components/Charts'
import AllList from './Components/Lists'


const Analytics = () => {




  const cardDetails = [
    { name: "Today’s orders", amount: "600", percent: "12" },
    { name: "Today’s revenue", amount: "₦240k", percent: "10" },
    { name: "Today’s commission", amount: "₦120k", percent: "10" },
    { name: "Today’s refund", amount: "₦40k", percent: "90" },
  ]
  return (
    <DefaultLayout>
      <>

        <CusHeader
          title="Analytics"
        />
        <div className='mx-4 my-10'>
          <div className='font-bold text-2xl '>
            Welcome back, Gideon
            <div className='font-normal text-lg'>
              See current sales summary and activity below.
            </div>
          </div>


          <div className=' flex  flex-row  justify-between w-full gap-x-16 pt-10'>

            {cardDetails.map((items, index) => (
              <div key={index} className='w-full'>

                <DashCards
                  amount={items.amount}
                  percent={items.percent}
                  title={items.name}
                />
              </div>
            ))}


          </div>




          <div className='flex flex-row justify-between w-[100%] h-full mt-10'>

            <div className='w-[80%]'>
              <AllCharts />
            </div>

            <div className=' w-[20%] ml-4'>
              <AllList />
            </div>



          </div>
        </div>


      </>
    </DefaultLayout>
  )
}

export default Analytics
