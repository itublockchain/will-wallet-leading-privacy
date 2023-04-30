import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

dotenv.config();

export const PRIVATE_KEY =
  "7e198860a4a1cb91a16c7084f44c6466c8c32d19f372bd8d026743be72014e13";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const GOERLI_URL = process.env.GOERLI_URL;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;

const config: HardhatUserConfig = {
  zksolc: {
    version: "1.3.8",
    compilerSource: "binary",
    settings: {
      isSystem: true,
    },
  },
  defaultNetwork: "zkSyncTestnet",
  networks: {
    hardhat: {
      zksync: true,
    },
    zkSyncTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      accounts: [PRIVATE_KEY || ""],
      ethNetwork: "goerli",
      zksync: true,
      verifyURL:
        "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
  },
  solidity: {
    version: "0.8.13",
  },
};

export default config;
