// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

struct TransferData {
    address to;
    uint256 amount;
}

contract WowFish is ERC20 , Ownable{
    constructor()ERC20("WOW", "WOW"){
    }

    function mint(address to, uint256 amount) onlyOwner public{
        _mint(to, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    function transferMulti( TransferData[] calldata data) external{
        for( uint8 i = 0; i < data.length; i++){
            transfer(data[i].to, data[i].amount);
        }
    }

    function burn( uint256 amount ) public
    {
        _burn(msg.sender, amount);
    }
}