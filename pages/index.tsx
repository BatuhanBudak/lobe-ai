import type { NextPage } from 'next'
import Description from '../components/Description';
import Header from '../components/Header';
import InfoCards from '../components/InfoCards';
import Introduction from '../components/Introduction';
import Plants from '../components/Plants';
import Ship from '../components/Ship';
import Testimonials from '../components/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Description />
      <InfoCards />
      <Plants />
      <Ship />
      <Testimonials />
    </>
  )
}

export default Home
