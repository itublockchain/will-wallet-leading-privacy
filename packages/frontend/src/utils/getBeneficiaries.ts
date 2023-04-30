import { ethers } from "ethers"
import { Provider } from "zksync-web3"

import { Account } from "~config"

const getBeneficiaries = (wallet: any) => {
  const provider = new Provider("https://testnet.era.zksync.dev")
  const accountContract = new ethers.Contract(
    wallet.address,
    Account.abi,
    provider
  )
  return accountContract.beneficiaryAddresses().then((data) => {
    return data
  })
}
