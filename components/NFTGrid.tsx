import type { NFT as NFTType } from '@thirdweb-dev/sdk';
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';
import NFT from './NFT';
import Link from 'next/link';
import { NFT_COLLECTION_ADDRESS } from '../const/addresses';

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTGrid({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = 'No NFTs found',
}: Props) {
  return (
    <SimpleGrid columns={4} spacing={6} w={'100%'} padding={2.5} my={5}>
      {isLoading ? (
        [...Array(10)].map((_, index) => <Skeleton key={index} height={'312px'} width={'100%'} />)
      ) : data && data.length > 0 ? (
        data.map((nft) =>
          !overrideOnclickBehavior ? (
            <Link
              href={`/token/${NFT_COLLECTION_ADDRESS}/${nft.metadata.id}`}
              key={nft.metadata.id}
            >
              <NFT nft={nft} />
            </Link>
          ) : (
            <div key={nft.metadata.id} onClick={() => overrideOnclickBehavior(nft)}>
              <NFT nft={nft} />
            </div>
          )
        )
      ) : (
        <>
          <Text color={'gray.100'} fontSize={'20px'}>
            {emptyText}
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 mt-10">
              <Link
                href="/buy"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 "
              >
                Shop Now
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
            </div>
          </Text>
        </>
      )}
    </SimpleGrid>
  );
}
