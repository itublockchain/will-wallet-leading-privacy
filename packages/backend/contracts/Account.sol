// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@matterlabs/zksync-contracts/l2/system-contracts/openzeppelin/token/ERC20/IERC20.sol";
import "@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IAccount.sol";
import "@matterlabs/zksync-contracts/l2/system-contracts/libraries/TransactionHelper.sol";

import "@openzeppelin/contracts/interfaces/IERC1271.sol";


contract Account is IAccount, IERC1271 {
    using TransactionHelper for Transaction;
    address public owner;
    uint256 public lastActiveTimestamp;
    uint256 public lockPeriod;
    address[] public inheritors;

    event InheritanceClaimed(
        address indexed inheritor,
        address token,
        uint256 amount
         );

    constructor(
        address _owner,
        uint256 _lockPeriod,
        address[] memory _inheritors
    ) {
        owner = _owner;
        lastActiveTimestamp = block.timestamp;
        lockPeriod = _lockPeriod;
        inheritors = _inheritors;
    }

    modifier onlyBootloader() {
        require(
        msg.sender == BOOTLOADER_FORMAL_ADDRESS;
        "Only bootloader can call this function"
        );
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyInheritor() {
        bool isInheritor = false;
        for (uint256 i = 0; i < inheritors.length; i++) {
            if (msg.sender == inheritors[i]) {
                isInheritor = true;
                break;
            }
        }
        require(isInheritor, "Only inheritor can call this function");
        _;
    }

    function _validateTransaction(
        bytes32,
        bytes32 _suggestedSignedHash,
        Transaction calldata _transaction
    ) internal override returns (bytes4 magic) {
    bytes32 txHash = _suggestedSignedHash == bytes32(0)
        ? _transaction.encodeHash()
        : _suggestedSignedHash;
}