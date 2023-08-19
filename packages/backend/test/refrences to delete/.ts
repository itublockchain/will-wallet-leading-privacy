// import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
// import { expect } from "chai";
// import * as dotenv from "dotenv";
// import * as hre from "hardhat";
// import { Contract, Provider, Wallet } from "zksync-web3";

// // env vars from the .env file.
// dotenv.config();

// describe("Greeter", () => {
//   const deployGreeter = async (): Promise<{
//     greeterContract: Contract;
//     initialGreeting: string;
//   }> => {
//     // tests should run on local testnet with a rich wallet's private key
//     if (hre.network.name !== "zkSyncLocal") {
//       throw new Error(
//         "Tests triggered on non-local testnet network. Use the --network zkSyncLocalTestnet flag for local testing"
//       );
//     }
//     const privateKey = process.env.LOCAL_TESTNET_RICH_WALLET_PRIVATE_KEY;
//     if (!privateKey) {
//       throw new Error(
//         `Please set your LOCAL_TESTNET_RICH_WALLET_PRIVATE_KEY in the '.env' file. Use the '.env.example' file as an example.`
//       );
//     }

//     // artifact loading
//     const provider = Provider.getDefaultProvider();
//     const wallet = new Wallet(privateKey, provider);
//     const deployer = new Deployer(hre, wallet);
//     const artifact = await deployer.loadArtifact("Greeter");

//     // contract deployment
//     const initialGreeting = "Hello there!";
//     const greeterContract = await deployer.deploy(artifact, [initialGreeting]);

//     return { greeterContract, initialGreeting };
//   };

//   describe("constructor", () => {
//     it("should greet with the initial greeting", async () => {
//       const { greeterContract, initialGreeting } = await deployGreeter();

//       expect(await greeterContract.greet()).to.eq(initialGreeting);
//     });
//   });

//   describe("setGreeting", () => {
//     it("should greet with the greeting set by the setGreeting", async () => {
//       const { greeterContract } = await deployGreeter();

//       const setGreetingTx = await greeterContract.setGreeting("Hi there!");
//       await setGreetingTx.wait();

//       expect(await greeterContract.greet()).to.equal("Hi there!");
//     });
//   });
// });
