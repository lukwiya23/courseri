import Head from 'next/head'
import Image from 'next/image'
import { Navbar, Footer, Hero, WalletBar, EthRates, Breadcrumbs, Order, CourseList } from '@components/index'
import { getAllCourses } from '@content/fetcher'

// import styles from '../styles/Home.module.css'

export default function Home({courses}) {
  return (

    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">


          <Navbar />

          <div className="fit">

            <Hero />
            
            <CourseList courses={courses}/>
            <Footer />


          </div>
        </div>
      </div>
    </div>
  )
}

export function getStaticProps(){
  const {data} = getAllCourses()
  return{
props: {
  courses:data
}
  }
}
