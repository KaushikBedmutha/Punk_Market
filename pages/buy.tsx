import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import NFTGrid from '../components/NFTGrid';
import { NFT_COLLECTION_ADDRESS } from '../const/addresses';
import { useContract, useNFTs } from '@thirdweb-dev/react';

export default function Buy() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxW={'1200px'} p={5}>
      <Heading mt={20} pt={5} color={'gray.100'}>
        Buy NFTs
      </Heading>
      <Text mt={2} fontSize={'2xl'} color={'gray.100'}>
        Browse and buy NFTs from this collection.
      </Text>
      <NFTGrid isLoading={isLoading} data={data} emptyText={'No NFTs found'} />
    </Container>
  );
}
