import { ethers } from "ethers"
import { EIP712Signer, Provider, Wallet, types, utils } from "zksync-web3"

import { Account } from "~config"

export const sendIAmAlive = async (account: any, wallet: any) => {
  const provider = new Provider("https://testnet.era.zksync.dev")
  const owner = new Wallet(account.privateKey, provider)
  console.log(owner, wallet)
  const accountContract = new ethers.Contract(
    wallet.address,
    Account.abi,
    owner
  )
  console.log(await provider.getBalance(accountContract.address))

  let setCustomTx = await accountContract.populateTransaction.updateLastActive()

  setCustomTx = {
    ...setCustomTx,
    from: accountContract.address,
    to: accountContract.address,
    chainId: (await provider.getNetwork()).chainId,
    nonce: await provider.getTransactionCount(accountContract.address),
    type: 113,
    customData: {
      gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT
    } as types.Eip712Meta,
    value: ethers.BigNumber.from(0)
  }
  setCustomTx.gasPrice = await provider.getGasPrice()
  setCustomTx.gasLimit = await provider.estimateGas(setCustomTx)

  const signedTxHash = EIP712Signer.getSignedDigest(setCustomTx)
  const signature = ethers.utils.arrayify(
    ethers.utils.joinSignature(owner._signingKey().signDigest(signedTxHash))
  )

  setCustomTx.customData = {
    ...setCustomTx.customData,
    customSignature: signature
  }

  const sentTx = await provider.sendTransaction(utils.serialize(setCustomTx))
  await sentTx.wait()
}
