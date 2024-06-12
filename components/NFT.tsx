import React from 'react';
import { NFT } from '@thirdweb-dev/sdk';
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from '../const/addresses';
import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useValidEnglishAuctions,
} from '@thirdweb-dev/react';
import { Box, Button, Container, Flex, Skeleton, Spacer, Text } from '@chakra-ui/react';

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingMarketplace } = useContract(
    MARKETPLACE_ADDRESS,
    'marketplace-v3'
  );

  const { data: directListing, isLoading: loadingDirectListing } = useValidDirectListings(
    marketplace,
    {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    }
  );

  //Add for auciton section
  const { data: auctionListing, isLoading: loadingAuction } = useValidEnglishAuctions(marketplace, {
    tokenContract: NFT_COLLECTION_ADDRESS,
    tokenId: nft.metadata.id,
  });

  return (
    <Flex
      direction={'column'}
      backgroundColor={'#EEE'}
      justifyContent={'center'}
      borderRadius={'6px'}
      borderColor={'lightgray'}
      borderWidth={1}
      boxShadow="md"
      bg="white"
    >
      <Box borderRadius={'4px'} overflow={'hidden'}>
        <ThirdwebNftMedia metadata={nft.metadata} height={'100%'} width={'100%'} />
      </Box>
      <Container p={'2.5'}>
        <Text fontSize={'small'} color={'darkgray'}>
          Token ID #{nft.metadata.id}
        </Text>
        <Text fontWeight={'bold'} fontSize={'xl'} color={'gray.900'}>
          {nft.metadata.name}
        </Text>
        <Text color={'gray.700'} fontSize={'16px'}>
          {nft.metadata.description?.length == 0
            ? `Marvel finction character ${nft.metadata.name} of MCU i.e Marvel Comic Universe`
            : `${nft.metadata.description?.substring(0, 70)}...`}
        </Text>
        {/* <Text>{`${nft.metadata.description?.substring(0, 70)}...`} </Text> */}

        <Box>
          {loadingMarketplace || loadingDirectListing || loadingAuction ? (
            <Skeleton></Skeleton>
          ) : directListing && directListing[0] ? (
            <Box mt={'2'}>
              <Flex alignItems={'center'}>
                <Text fontSize={'md'} color="blackAlpha.800" fontWeight={'bold'}>
                  Price:{' '}
                  {`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}
                </Text>
                <Spacer />
                <Button
                  _hover={{ bg: 'red.900' }}
                  color="gray.50"
                  bg="red.700"
                  size="sm"
                  mt={'2'}
                  style={{ alignContent: 'right' }}
                >
                  Buy Now
                </Button>
              </Flex>
            </Box>
          ) : auctionListing && auctionListing[0] ? (
            <Box mt={'2'}>
              <Flex direction={'column'}>
                <Text fontSize={'md'} color="blackAlpha.800" fontWeight={'bold'}>
                  Minimum Bid
                </Text>
                <Text
                  fontSize={'md'}
                >{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</Text>
                <Spacer />
                <Button
                  _hover={{ bg: 'red.900' }}
                  color="gray.50"
                  bg="red.700"
                  size="sm"
                  mt={'2'}
                  style={{ alignContent: 'right' }}
                >
                  Buy Now
                </Button>
              </Flex>
            </Box>
          ) : (
            <Box mt={'2'}>
              <Flex alignItems="center">
                <Text fontSize={'md'} color="blackAlpha.800" fontWeight={'bold'}>
                  Price: Not Listed
                </Text>
                <Spacer />
                <Button
                  _hover={{ bg: 'red.900' }}
                  color="gray.50"
                  bg="red.700"
                  size="sm"
                  mt={'2'}
                  isDisabled
                  style={{ alignContent: 'right' }}
                >
                  Buy Now
                </Button>
              </Flex>
            </Box>
          )}
        </Box>
      </Container>
    </Flex>
  );
}
