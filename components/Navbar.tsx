import { Avatar } from '@chakra-ui/react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const address = useAddress();
  return (
    // <Box backgroundColor="gray.900" color="gray.50" m={'auto'} py={'10px'} px={'40px'}>
    //   <Flex justifyContent={'space-between'} alignItems={'center'}>
    //     <Link href="/">
    //       <Heading>Marvel Avatar </Heading>
    //     </Link>
    //     <Flex direction={'row'}>
    //       <Link href="/buy" style={{ marginRight: '20px' }}>
    //         <Text borderRadius="10" py={1} pl={3} pr={3} backgroundColor="#c11119" fontSize="2xl">
    //           Buy
    //         </Text>
    //       </Link>
    //       <Link href="/sell" style={{ marginRight: '20px' }}>
    //         <Text fontSize="2xl">Sell</Text>
    //       </Link>
    //     </Flex>
    //     <Flex dir={'row'} alignItems={'center'}>
    //       <ConnectWallet />
    //       {address && (
    //         <Link href={`/profile/${address}`}>
    //           <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
    //         </Link>
    //       )}
    //     </Flex>
    //   </Flex>
    // </Box>

    <nav className=" bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="data:image/png;base64,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"
            className="h-10 "
            alt="Logo"
            width={100}
            height={100}
          />
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
            Avatar
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ConnectWallet />
          {address && (
            <Link href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-slate-50 rounded md:bg-transparent md:p-2 text-xl hover:md:bg-red-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/buy"
                className="block py-2 px-3 text-slate-50 rounded md:bg-transparent md:p-2 text-xl hover:md:bg-red-700"
              >
                Buy
              </Link>
            </li>
            <li>
              <Link
                href="/sell"
                className="block py-2 px-3 text-slate-50 rounded md:bg-transparent md:p-2 text-xl hover:md:bg-red-700"
              >
                Sell
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-slate-50 rounded md:bg-transparent md:p-2 text-xl hover:md:bg-red-700"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
