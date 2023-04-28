// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/* 
Inheritence Account Abstraction
 */
contract Inheritance {


    address public owner;
    uint256 public lockDuration;
    uint256 public totalShares;
    uint256 public lastActive;

    struct Beneficiary {
        address beneficiary;
        uint256 sharesPercent;
    }

    Beneficiary[] public beneficiaries;

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
        address _owner
    ) {
        owner = _owner;
        lastActive = block.timestamp;
    }


    function addBeneficiary(
        address _beneficiary,
        uint256 _sharesPercent
    ) external onlyAccount {
        require(
            _sharesPercent > 0,
            "Share percentage must be greater than 0"
        );
        require(
            _sharesPercent <= 100,
            "Share percentage must be less than or equal to 100"
        );
        require(
            totalShares + _sharesPercent <= 100,
            "Total shares must be less than or equal to 100"
        );

        beneficiaries.push(Beneficiary(_beneficiary, _sharesPercent));
        totalShares += _sharesPercent;
    }


    function removeBeneficiary(
        address _beneficiary
    ) external onlyAccount {
        for (uint256 i = 0; i < beneficiaries.length; i++) {
            if (beneficiaries[i].beneficiary == _beneficiary) {
                totalShares -= beneficiaries[i].sharesPercent;
                delete beneficiaries[i];
            }
        }
    }


    function updateBeneficiary(
        address _beneficiary,
        uint256 _sharesPercent
    ) external onlyAccount {
        for (uint256 i = 0; i < beneficiaries.length; i++) {
            if (beneficiaries[i].beneficiary == _beneficiary) {
                totalShares -= beneficiaries[i].sharesPercent;
                beneficiaries[i].sharesPercent = _sharesPercent;
                totalShares += _sharesPercent;
            }
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


    function changeLockDuration(uint256 _newLockDuration) external {
        require(msg.sender == owner, "Only the owner can change lock duration");
        lockDuration = _newLockDuration;
    }

}
