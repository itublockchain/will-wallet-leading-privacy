import { utils, Wallet, Provider, Contract, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { values } from "./arguments";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ACCOUNT_ADDRESS = "0xBdc2DfdF0f92574d6909Ce4d2D67f08B23dC428e";

const ETH_ADDRESS = "0x000000000000000000000000000000000000800A";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  const wallet = new Wallet(WALLET_PRIVATE_KEY || "", provider);
  const owner = new Wallet(PRIVATE_KEY || "", provider);

  let ethTransferTx = {
    from: ACCOUNT_ADDRESS,
    to: wallet.address,
    chainId: (await provider.getNetwork()).chainId,
    nonce: await provider.getTransactionCount(ACCOUNT_ADDRESS),
    type: 113,
    customData: {
      gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
    } as types.Eip712Meta,
    value: ethers.BigNumber.from("0"),
    gasPrice: (await provider.getGasPrice()).toString(),
    gasLimit: ethers.BigNumber.from("20000000"), // constant 20M since estimateGas() causes an error, and this tx consumes more than 15M at most
    data: "0x",
  };
  const signedTxHash = EIP712Signer.getSignedDigest(ethTransferTx);
  const signature = ethers.utils.arrayify(ethers.utils.joinSignature(owner._signingKey().signDigest(signedTxHash)));

  ethTransferTx.customData = {
    ...ethTransferTx.customData,
    customSignature: signature,
  };

  const accountArtifact = await hre.artifacts.readArtifact("Account");
  const account = new Contract(ACCOUNT_ADDRESS, accountArtifact.abi, wallet);

  // L1 timestamp tends to be undefined in the latest blocks. So should find the latest L1 Batch first.
  let l1BatchRange = await provider.getL1BatchBlockRange(await provider.getL1BatchNumber());
  let l1TimeStamp = (await provider.getBlock(l1BatchRange[1])).l1BatchTimestamp;

  console.log("l1TimeStamp: ", l1TimeStamp);

}
