// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

library ContractMetadataStorage {
    bytes32 public constant CONTRACT_METADATA_STORAGE_POSITION =
        0x4B95e9B2D75Ed1A569c8FBB05394a54b46bDac2A;
}


const contract = await sdk.getContract("0x4B95e9B2D75Ed1A569c8FBB05394a54b46bDac2A");

await contract.metadata.set({
  name: "My Contract",
  description: "My contract description"
})

// The listing ID of the direct listing you want to approve buyer for
const listingId = "0";

await contract.directListings.approveBuyerForReservedListing(listingId, "0x095677f753f961D09f29dA75114301686e488025");

await contract.directListings.approveCurrencyForListing(listingId, currencyContractAddress, pricePerTokenInCurrency);

function purchaseItem(uint _itemId) external payable nonReentrant {
        uint _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(msg.value >= _totalPrice, "not enough ether to cover item price and market fee");
        require(!item.sold, "Not for sale");
        // pay seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        // update item to sold
        item.sold = true;
        // transfer nft to buyer
        item.nft.transferFrom(address(this), msg.sender, item.tokenId);
        // emit Bought event
        emit Bought(
            _itemId,
            address(item.nft),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    }