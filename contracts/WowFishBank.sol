// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract WowFishBank is Ownable{

    uint256 _birthTime;
    uint256  public  _totalAmount = 430000000000000000;
    uint256 public immutable _dayWithdrawAmount = 39269406000000;
    uint256 _withdrawedAmount;

    IERC20 wowToken;
    constructor(IERC20 token){
        _birthTime = block.timestamp;
        _withdrawedAmount = 0;
        wowToken = token;
    }

    function withdraw( address to )onlyOwner external  {
        //conver to day
        uint256 dayDelta = (( block.timestamp - _birthTime) / 1 days) + 1;

        uint256 availableAmount = dayDelta * _dayWithdrawAmount;

        uint256 transferAmount = availableAmount - _withdrawedAmount;

        require (transferAmount > 0, "today has withdraw");
        bool sucess = wowToken.transfer(to, transferAmount);
        require(sucess, "transfer token error");
        _withdrawedAmount += transferAmount;
        _totalAmount -= transferAmount;
    }
}