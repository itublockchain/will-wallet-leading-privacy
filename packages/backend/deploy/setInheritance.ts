import { utils, Wallet, Provider, Contract, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ETH_ADDRESS } from "zksync-web3/build/src/utils";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ACCOUNT_ADDRESS = "0x6De0f81f009C13D3e5E77DC7aa3E7B0772F12d83";
console.log(PRIVATE_KEY)
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  const wallet = new Wallet(WALLET_PRIVATE_KEY || "", provider);
  const owner = new Wallet(PRIVATE_KEY || "", provider);
  
  
  const ETH_ADDRESS = "0xbFA7639367a4947dA1936e56317e483DeB621D96"
  const accountArtifact = await hre.artifacts.readArtifact("Account");
  const account = new Contract(ACCOUNT_ADDRESS, accountArtifact.abi, wallet);

  console.log(account.address)
  let setLimitTx = await account.populateTransaction.addOrUpdateBeneficiary(
    ETH_ADDRESS, 
    10
    );

  setLimitTx = {
    ...setLimitTx,
    from: account.address,
    to: account.address,
    chainId: (await provider.getNetwork()).chainId,
    nonce: await provider.getTransactionCount(wallet.address),
    type: 113,
    gasLimit: ethers.BigNumber.from("100000000"), // constant 20M since estimateGas() causes an error, and this tx consumes more than 15M at most
    customData: {
      gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
    } as types.Eip712Meta,
    value: ethers.BigNumber.from(0),
  };
  setLimitTx.gasPrice = await provider.getGasPrice();
  
   console.log("setLimitTx: ", setLimitTx)
   
  setLimitTx.gasLimit = await provider.estimateGas(setLimitTx);

  const signedTxHash = EIP712Signer.getSignedDigest(setLimitTx);
  const signature = ethers.utils.arrayify(ethers.utils.joinSignature(owner._signingKey().signDigest(signedTxHash)));
  
  setLimitTx.customData = {
    ...setLimitTx.customData,
    customSignature: signature,
  }; 

  const sentTx = await provider.sendTransaction(utils.serialize(setLimitTx));
  await sentTx.wait(); 
  
}
