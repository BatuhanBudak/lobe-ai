import type { NextPage } from 'next'
import Header from '../components/Header';
import Introduction from '../components/Introduction';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Introduction />
    </>
  )
}

export default Home
