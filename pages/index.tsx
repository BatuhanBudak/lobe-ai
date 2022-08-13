import type { NextPage } from 'next'
import Description from '../components/Description';
import Header from '../components/Header';
import InfoCards from '../components/InfoCards';
import Introduction from '../components/Introduction';
import Plants from '../components/Plants';
import Ship from '../components/Ship';
import Examples from '../components/Examples';
import Download from '../components/Download'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Description />
      <InfoCards />
      <Plants />
      <Ship />
      <Examples />
      <Download />
    </>
  )
}

export default Home
