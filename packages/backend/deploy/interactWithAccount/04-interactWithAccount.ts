import {
  utils,
  Contract,
  Wallet,
  Provider,
  EIP712Signer,
  types,
} from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import dotenv from "dotenv";
import * as ethers from "ethers";
import { getBalance } from "../zksyn-general/general-interaction-tips";
dotenv.config();

//// global variables :
const provider = new Provider("https://zksync2-testnet.zksync.dev");
const addressAccount = "0x7D32384e1f0E750FA08419e3CE7834A7352ee443"; // a deployed account in testnet.
const owner = new Wallet(process.env.account_private_key!, provider); // the owner of the account.

export default async function (hre: HardhatRuntimeEnvironment) {
  // create a contract object and connect it to the owner :
  const contractInterface = await hre.artifacts.readArtifact("WillAccount");
  const contract = new Contract(addressAccount, contractInterface.abi, owner);
  // send some eth to this account  if needed: (from another wallet ).
  const wallet = new Wallet(process.env.private_key!, provider);
  if (
    (await getBalance(addressAccount, provider, utils.ETH_ADDRESS)) <
    ethers.utils.parseEther("0.001")
  ) {
    console.log(`sending eth to the account .......`);
    const sendEth = await wallet.transfer({
      to: addressAccount,
      amount: ethers.utils.parseEther("0.001"),
    });
    await sendEth.wait();
  }

  console.log(
    `balance of the account is : ${await getBalance(
      addressAccount,
      provider,
      utils.ETH_ADDRESS
    )}`
  );
  const isWillMode: boolean = await contract.isWillMode();
  if (!isWillMode) {
    console.log(`will mode not active \n activating ........`);
    // call the function with the owner :
    const setWill = await contract.setWillMode(10, 1, wallet.address);
    await setWill.wait();
  }
  console.log(`isWillMode  : ${isWillMode}`);
  /////////////////////////////////////////////////////////////////////////////////
  //////////// reset will mode with account itSelf as the caller //////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  //uncomment the next two lines if you wanna reset the willMode👇👇👇 :
  //   const resetWillMode = await restWillModeWithAccount(contract, hre); uncomment this if you wanna reset the willMode
  //   console.log(`reset will mode : ${resetWillMode}`);

  ///////////////////////////////////////////////////////////
  /////////////////// add inheritor ////////////////////////
  /////////////////////////////////////////////////////////
  await addInheritor(addressAccount, hre, isWillMode);
}
//make a call with the account address msg.sender.
async function restWillModeWithAccount(
  contract: Contract,
  hre: HardhatRuntimeEnvironment
) {
  // populateTransaction:
  let resetWillTx = await contract.populateTransaction.resetWillMode();
  // create the transaction body and set from as the account itself:
  resetWillTx = {
    ...resetWillTx,
    from: addressAccount, //set the from to the account itSelf .
    chainId: (await provider.getNetwork()).chainId, // set the chainId to network running
    nonce: await provider.getTransactionCount(addressAccount), //get the valid nonce from NonceHolder system contract
    type: 113, // set the type of transaction to 113,which is 712eip ;
    customData: {
      gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT, // get the gas per 1 bytes of data.
    } as types.Eip712Meta, // set the customData to the Eip712Meta type.
    value: ethers.BigNumber.from(0), // get the bignumber hex for value to send with tx (eth value);
  };

  resetWillTx.gasPrice = await provider.getGasPrice(); // get the gas price.
  resetWillTx.gasLimit = await provider.estimateGas(resetWillTx); //get the gasLimit needed for your transaction
  const singedDigest = EIP712Signer.getSignedDigest(resetWillTx); // get the siged digest for the tx (eip712);
  const signature = ethers.utils.arrayify(
    ethers.utils.joinSignature(owner._signingKey().signDigest(singedDigest)) //sign the digest with owner private key.
  );
  resetWillTx.customData = {
    ...resetWillTx.customData,
    customSignature: signature, //fill the customSignature field with the signature.
  };
  //send tx :
  const sentTx = await provider.sendTransaction(utils.serialize(resetWillTx));
  await sentTx.wait();

  console.log(`the digest : ${singedDigest} \n \n \n ............... `);
  console.log(`the signature : ${signature} \n \n \n ............. `);
  console.log(`the seralize of tx : ${utils.serialize(resetWillTx)}`);
  return await contract.isWillMode(); // should be false .
}
//add inheritor with owner call, (only when willMode is set);
async function addInheritor(
  addressAccount: string,
  hre: HardhatRuntimeEnvironment,
  willMode: boolean
) {
  // get the interface for account with will functions :
  const willArtifact = await hre.artifacts.readArtifact("will");
  const contract = new Contract(addressAccount, willArtifact.abi, owner);

  if (!willMode) {
    // set the contract to willMode:
    console.log("contract not in will mode.");
    return;
  } else {
    //add inhritor when the contract in activate mood : (can be called by the owner ,or the account);
    const addInheritor = await contract.addInheritor(
      "inheritor 1",
      "0x1234912Ac7C626F737884720584e1E92C34778A2",
      12
    );
    // now check the available percentage :
    console.log(
      `the available precentage is  ${await contract.getAvailablePercentage()}`
    );
    // check the iheritor :
    console.log(
      `inheritor at address : "0x1234912Ac7C626F737884720584e1E92C34778A2" is \n ${await contract.getInheritor(
        "0x1234912Ac7C626F737884720584e1E92C34778A2"
      )}`
    );
  }
}
//and so on,, keep going for all functions.....😎👉 👉 👉 👉 👉 👉
