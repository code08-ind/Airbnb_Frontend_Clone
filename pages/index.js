import Head from 'next/head'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import SmallCard from '../components/SmallCard.js'
import MediumCard from '../components/MediumCard.js'
import LargeCard from '../components/LargeCard.js'
import Banner from '../components/Banner.js'
import Cards from '../data/Cards.js'
import BigCards from '../data/BigCards.js'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* pull something from a server - an API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 ls:grid-cols-3 xl:grid-cols-4'>
            {Cards?.map((item) => {
              return (
                <>
                  <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
                </>
              );
            })}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {BigCards?.map((item) => {
              return (
                <>
                  <MediumCard key={item.img} img={item.img} title={item.title} />
                </>
              );
            })}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Got Inspired"
        />
      </main>
      <Footer/>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://links.papareact.com/zp1')
//   const exploreData = await res.json();

//   return {
//     props: {
//       exploreData,
//     },
//   };
// }
