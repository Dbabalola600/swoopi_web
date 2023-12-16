import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from '../components/DefaultLayout'
import CusHeader from '../components/CusHeader'
import DashCards from '../components/DashCards'
import AllCharts from './Analytics/Components/Charts'
import AllList from './Analytics/Components/Lists'
import Analytics from './Analytics'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {

  const router = useRouter()


  useEffect(()=>{
router.push("/Analytics")
  }, [])


  return (
    <>
    </>
  )
}

export default Home
