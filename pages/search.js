import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import InfoCards from '../data/InfoCards.js'
// import Map from '../components/Map';

const Search = () => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = startDate && format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className='h-screen'>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {InfoCards.map(item => (
                            <InfoCard key={item.img} img={item.img} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total} />
                        ))}
                    </div>
                </section>
                {/* <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map InfoCards={InfoCards} />
                </section> */}
            </main>
            <Footer />
        </div>
    )
}

export default Search;