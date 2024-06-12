import { Button, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Testimonial } from '../components/Testimonial';
import Faq from '../components/Faq';

const Home: NextPage = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('../public/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            "Where Ideas Meet Value: Explore the Ethereum Marketplace Today!"
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/buy"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 "
            >
              Shop NFTs
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <div style={{ maxWidth: '1200px' }} className="m-auto mt-10 mb-6 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-slate-300 font-bold text-5xl mb-6">Why Marketing With Us?</h2>
          <p className="text-slate-50 text-lg text-justify mr-4">
            Welcome to Marvel Avatar, your gateway to owning iconic Marvel characters in the form of
            unique NFTs (Non-Fungible Tokens). Dive into the immersive world of Marvel like never
            before as you explore our curated collection of digital avatars, each representing
            beloved superheroes and villains from the Marvel Universe. From the mighty Thor to the
            cunning Loki, our NFTs capture the essence and power of these legendary characters in
            stunning detail. With blockchain technology, each Marvel Avatar is one-of-a-kind,
            allowing you to truly own a piece of Marvel history. Join our community of collectors
            and enthusiasts, and embark on a journey through the Marvel multiverse with Marvel
            Avatar NFTs. Assemble your collection today and let the adventure begin!
          </p>
        </div>
        <img src="/marvel.webp" alt="Picture of Marvel" className="h-auto  rounded-lg mt-10" />
      </div>
      <Testimonial />
      <Faq />

      {/* <Container maxW={'1200px'}>
        <Flex h={'50vh'} alignItems={'center'} justifyContent={'center'}>
          <Stack spacing={4} align={'center'}>
            <Heading>Marketplace</Heading>
            <Button as={NextLink} href="/buy">
              Shop NFTs
            </Button>
          </Stack>
        </Flex>
      </Container> */}
    </>
  );
};

export default Home;
