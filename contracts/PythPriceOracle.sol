// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract PythPriceOracle {
    IPyth internal pyth;
    bytes32 ethUsdPriceId;

    constructor(address _pyth) {
        pyth = IPyth(_pyth);
    }

    function getPrice() external view returns (uint256) {
        bytes32 priceID = 0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b;
        PythStructs.Price memory price = pyth.getPrice(priceID);
        int256 intPrice = int256(price.price); // Convert int64 to int256
        return uint256(intPrice); // Convert int256 to uint256
    }

}
 
