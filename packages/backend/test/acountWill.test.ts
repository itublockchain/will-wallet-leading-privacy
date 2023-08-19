import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { expect } from "chai";
import dotenv from "dotenv";
import * as ethers from "ethers";
import * as hre from "hardhat";
import { utils, Contract, Provider, Wallet } from "zksync-web3";
import { deployAccount, deployFactory, deployWill } from "./utils /deployement";
import { rich_wallets } from "./utils /richWallets";

// env vars from the .env file.
dotenv.config();

describe("Account Will", async () => {
  // create two wallets :
  const provider = Provider.getDefaultProvider();
  const richWallet = new Wallet(rich_wallets[0].privateKey, provider);
  const owner = new Wallet(rich_wallets[1].privateKey, provider);
  // deploy will contract :
  const will = await deployWill(richWallet);
  console.log(`will address is : ${will.address}`);
  const factory = await deployFactory(richWallet, will.address);
  console.log(`factory address is : ${factory.address}`);
  const account = await deployAccount(richWallet, owner, factory.address);
  console.log(`account address is : ${account.address}`);
  it("Should deploy the will contract", async () => {
    expect(will.address).to.be.a("string");
  });
});

// deploy the will contract ,
// deploy the factory contract , with will address and the bytecodeHash.
// call deploy account with salt and owner, and save the account.
// call the setWillMode function in the account , with the needed data.
// call the function addInheritor() with the needed data.
// check the state ,
// pass the time and try to set a request withdraw.
