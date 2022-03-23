
import { Navbar, Footer, Hero, WalletBar, EthRates, Breadcrumbs, Order, CourseList } from '@components/index'
import { getAllCourses } from '@content/fetcher'
import { useWeb3, Web3Provider } from '@components/providers'

// import styles from '../styles/Home.module.css'

export default function Home({courses}) {

  const data = useWeb3()

  return (

    <Web3Provider>
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
    </Web3Provider>
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
