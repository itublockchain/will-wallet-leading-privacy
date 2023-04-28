// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/* 
Inheritence Account Abstraction
 */
contract Inheritance {


    address public owner;
    address[] public beneficiaries;
    uint256 public lockDuration;
    uint256 public totalShares;
    uint256 public lastActive;
    mapping(address => uint256) public beneficiaryShares;


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


    function setBeneficiaries (
        address[] memory _beneficiaries,
        uint256[] memory _sharesPercent
    ) external onlyAccount {
        require(
            _beneficiaries.length == _sharesPercent.length,
            "Beneficiaries and shares arrays must have the same length"
        );

        for (uint256 i = 0; i < _beneficiaries.length; i++) {
            beneficiaries.push(_beneficiaries[i]);
            beneficiaryShares[_beneficiaries[i]] = _sharesPercent[i];
            totalShares += _sharesPercent[i];
            require(
                _sharesPercent[i] > 0,
                "Share percentage must be greater than 0"
            );
            require(
                _sharesPercent[i] <= 100,
                "Share percentage must be less than or equal to 100"
            );
            require(
                totalShares <= 100,
                "Total shares must be less than or equal to 100"
            );
        }
    }


    function removeBeneficiary(address _beneficiary) external onlyAccount {
        require(
            beneficiaryShares[_beneficiary] > 0,
            "Beneficiary does not exist"
        );
        totalShares -= beneficiaryShares[_beneficiary];
        beneficiaryShares[_beneficiary] = 0;
    }


    function changeBeneficiaryShares(
        address[] memory _beneficiaries,
        uint256[] memory _sharesPercent
    ) external onlyAccount {
        require(
            _beneficiaries.length == _sharesPercent.length,
            "Beneficiaries and shares arrays must have the same length"
        );

        for (uint256 i = 0; i < _beneficiaries.length; i++) {
            totalShares -= beneficiaryShares[_beneficiaries[i]];
            beneficiaryShares[_beneficiaries[i]] = _sharesPercent[i];
            totalShares += _sharesPercent[i];
            require(
                _sharesPercent[i] > 0,
                "Share percentage must be greater than 0"
            );
            require(
                _sharesPercent[i] <= 100,
                "Share percentage must be less than or equal to 100"
            );
            require(
                totalShares <= 100,
                "Total shares must be less than or equal to 100"
            );
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


    function changeBeneficiaryShares(
        address[] memory _beneficiaries,
        uint256[] memory _shares
    ) external {
        require(msg.sender == owner, "Only the owner can change beneficiaries");
        require(
            _beneficiaries.length == _shares.length,
            "Beneficiaries and shares arrays must have the same length"
        );

        for (uint256 i = 0; i < _beneficiaries.length; i++) {
            beneficiaryShares[_beneficiaries[i]] = _shares[i];
        }
    }
}
