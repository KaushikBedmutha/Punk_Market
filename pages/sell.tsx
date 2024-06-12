import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import React, { useState } from 'react';
import { NFT_COLLECTION_ADDRESS } from '../const/addresses';
import type { NFT as NFTType } from '@thirdweb-dev/sdk';
import NFTGrid from '../components/NFTGrid';
import SaleInfo from '../components/SaleInfo';

export default function Sell() {
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const { data, isLoading } = useOwnedNFTs(contract, address);

  const [selectedNFT, setSelectedNFT] = useState<NFTType>();

  return (
    <Container maxW={'1200px'} minH={'500px'} p={5}>
      <Heading mt={20} pt={5} color={'gray.100'}>
        Sell NFTs
      </Heading>
      {selectedNFT && (
        <Text color={'gray.100'} mt={'2'}>
          Select which NFT to sell from below.
        </Text>
      )}
      {!selectedNFT ? (
        <NFTGrid
          data={data}
          isLoading={isLoading}
          overrideOnclickBehavior={(nft) => {
            setSelectedNFT(nft);
          }}
          emptyText={"You don't own any NFTs yet from this collection.☹"}
        />
      ) : (
        <Flex justifyContent={'center'} my={10}>
          <Card w={'75%'}>
            <SimpleGrid columns={2} spacing={10} p={5}>
              <ThirdwebNftMedia metadata={selectedNFT.metadata} width="100%" height="100%" />
              <Stack>
                <Flex justifyContent={'right'}>
                  <Button
                    onClick={() => {
                      setSelectedNFT(undefined);
                    }}
                  >
                    X
                  </Button>
                </Flex>
                <Heading>{selectedNFT.metadata.name}</Heading>
                <SaleInfo nft={selectedNFT} />
              </Stack>
            </SimpleGrid>
          </Card>
        </Flex>
      )}
    </Container>
  );
}
