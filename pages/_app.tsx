import type { AppProps } from 'next/app';
import { ThirdwebProvider, useChainId } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Sepolia } from '@thirdweb-dev/chains';

const activeChain = 'ethereum';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} activeChain={Sepolia}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
