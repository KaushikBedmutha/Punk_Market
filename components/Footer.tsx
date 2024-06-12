// import {
//   Stack,
//   HStack,
//   Link,
//   Image,
//   IconButton,
//   LinkProps,
//   Text,
//   Flex,
//   Divider,
//   Box,
// } from '@chakra-ui/react';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';

import Link from 'next/link';

// const links = ['About', 'Careers', 'Connect', 'Terms & condition', 'Privacy policy'];

// const links = [
//   {
//     url: '/about',
//     label: 'About',
//   },
//   {
//     url: '/#',
//     label: 'Careers',
//   },
//   {
//     url: '/#',
//     label: 'Connect',
//   },
//   {
//     url: '/termCondition',
//     label: 'Terms & condition',
//   },
//   {
//     url: '/privacyPolicy',
//     label: 'Privacy Policy',
//   },
// ];
// const accounts = [
//   {
//     url: '/',
//     label: 'Github Account',
//     type: 'gray',
//     icon: <FaGithub />,
//   },
//   {
//     url: '/',
//     label: 'Twitter Account',
//     type: 'twitter',
//     icon: <FaTwitter />,
//   },
//   {
//     url: '/',
//     label: 'Instagram',
//     type: 'red',
//     icon: <FaInstagram />,
//   },
//   {
//     url: '/',
//     label: 'LinkedIn Account',
//     type: 'linkedin',
//     icon: <FaLinkedin />,
//   },
// ];

// export function Footer() {
//   return (
//     <Box className="bg-gray-900" color={'white'}>
//       <Stack
//         maxW="100%"
//         marginInline="auto"
//         p={8}
//         spacing={{ base: 8, md: 0 }}
//         justifyContent="space-between"
//         alignItems="center"
//         direction={{ base: 'column', md: 'row' }}
//       >
//         <Link href="/" isExternal>
//           <Flex>
//             <Image
//               w="100px"
//               src="data:image/png;base64,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"
//               alt="Logo"
//             />
//             <Text ml={'2.5'} fontSize={'3xl'} style={{ textDecoration: 'none !important' }}>
//               Avatar
//             </Text>
//           </Flex>
//         </Link>

//         {/* Desktop Screen */}
//         <HStack spacing={4} alignItems="center" d={{ base: 'none', md: 'flex' }}>
//           {links.map((link, index) => (
//             <CustomLink key={index} fontSize={'md'}>
//               [{link.label}, {link.url}]
//             </CustomLink>
//           ))}
//         </HStack>

//         {/* Mobile and Tablet Screens */}
//         {/* <Stack d={{ base: 'flex', md: 'none' }} alignItems="center">
//         <HStack alignItems="center">
//           <CustomLink>Sign up</CustomLink>
//           <Divider h="1rem" orientation="vertical" />
//           <CustomLink>Blog</CustomLink>
//           <Divider h="1rem" orientation="vertical" />
//           <CustomLink>Career</CustomLink>
//         </HStack>
//         <HStack alignItems="center">
//           <CustomLink>Documentation</CustomLink>
//           <Divider h="1rem" orientation="vertical" />
//           <CustomLink>Terms of use</CustomLink>
//         </HStack>
//         <CustomLink>Privacy policy</CustomLink>
//       </Stack> */}

//         <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
//           {accounts.map((sc, index) => (
//             <IconButton
//               key={index}
//               as={Link}
//               isExternal
//               href={sc.url}
//               aria-label={sc.label}
//               colorScheme={sc.type}
//               icon={sc.icon}
//               rounded="md"
//             />
//           ))}
//         </Stack>
//       </Stack>
//       <Divider width={'95%'} mt={'0'} mb={'0'} ml={'auto'} mr={'auto'} />
//       <Text p={'5'} textAlign={'center'}>
//         &copy; {new Date().getFullYear()} {''}
//         <Link href="/">MarvelAvatar&trade;</Link> . All Rights Reserved.
//       </Text>
//     </Box>
//   );
// }

// const CustomLink = ({ children, ...props }: LinkProps) => {
//   console.log('Hello', children);
//   return (
//     <Link href={children[3]} fontSize="sm" _hover={{ color: 'red.600' }} {...props}>
//       {children[1]}
//     </Link>
//   );
// };

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white  w-full shadow ">
      <div className=" max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src="data:image/png;base64,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"
              className="h-8"
              alt="Marvel Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Avatar</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <Link href="/about" className="hover:text-white me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacyPolicy" className="hover:text-white me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/termCondition" className="hover:text-white me-4 md:me-6">
                Term & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Career
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            &copy; {new Date().getFullYear()}{' '}
            <Link href="https://flowbite.com/" className="hover:underline">
              MarvelAvatar™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white ">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white  ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white  ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white  ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
