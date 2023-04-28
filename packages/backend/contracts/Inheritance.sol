// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/* 
Inheritence Account Abstraction
 */
contract Inheritance {


    address public owner;
    uint256 public lockDuration;
    address[] public beneficiaries;
    mapping(address => uint256) public beneficiaryShares;
    uint256 public totalShares;
    uint256 public lastActive;


    event FundsClaimed(
        address indexed beneficiary,
        uint256 amount
        );


    modifier onlyAccount() {
        require(
            msg.sender == address(this),
            "Only the account that inherits this contract can call this method."
        );
        _;
    }

    constructor(
        address _owner,
        uint256 _lockDuration,
        address[] memory _beneficiaries,
        uint256[] memory _shares
    ) {
        require(
            _beneficiaries.length == _shares.length,
            "Beneficiaries and shares arrays must have the same length"
        );

        owner = _owner;
        lockDuration = _lockDuration;
        lastActive = block.timestamp;

        for (uint256 i = 0; i < _beneficiaries.length; i++) {
            beneficiaries.push(_beneficiaries[i]);
            beneficiaryShares[_beneficiaries[i]] = _shares[i];
            totalShares += _shares[i];
        }
    }

    function updateLastActive() external {
        require(msg.sender == owner, "Only the owner can update activity");
        lastActive = block.timestamp;
    }

    function claimFunds(address _token) external {
        require(
            block.timestamp >= lastActive + lockDuration,
            "Account is still active"
        );
        require(
            beneficiaryShares[msg.sender] > 0,
            "Sender is not a beneficiary"
        );

        uint256 tokenBalance = IERC20(_token).balanceOf(address(this));
        uint256 shareAmount = (tokenBalance * beneficiaryShares[msg.sender]) /
            totalShares;

        IERC20(_token).transfer(msg.sender, shareAmount);
        emit FundsClaimed(msg.sender, shareAmount);
    }
}
