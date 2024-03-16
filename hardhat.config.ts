import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-tracer";

import '@openzeppelin/hardhat-upgrades';
import  "dotenv/config"

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks:{
    hardhat: {
      forking: {
        url: "https://arb-sepolia.g.alchemy.com/v2/hLhkQSicZ9EKv9qzcMf87knjoAQArLVh",
      }
    },
    sepolia:{
      url: "https://arb-sepolia.g.alchemy.com/v2/hLhkQSicZ9EKv9qzcMf87knjoAQArLVh",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    geoli:{
      url: "https://goerli-rollup.arbitrum.io/rpc",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    localhost:{
      url: "http://192.168.1.124:8545",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    arb:{
      url:"https://arbitrum.blockpi.network/v1/rpc/ca5a9ed3d8ae6312c8e9d88b6097bb1e99e1b70c",
      accounts:[process.env.PRIVATE_KEY as string]
    }
  }
};

export default config;
