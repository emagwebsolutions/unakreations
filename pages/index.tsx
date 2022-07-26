import type { NextPage } from 'next'
import { datacontext } from '../context/store'
export { getServerSideProps } from '../context/store'
import Slider from '../components/home/Slider'
import Sectionone from '../components/home/Sectionone'
import Sectiontwo from '../components/home/Sectiontwo'
import Sectionthree from '../components/home/Sectionthree'
import Sectionfour from '../components/home/Sectionfour'

const Home: NextPage = () => {

  const { post } = datacontext()

  return (
    <div className="home">
      <Slider />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
    </div>
  )

}

export default Home
