require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    },
  sepolia: {
    url: "https://eth-sepolia.g.alchemy.com/v2/y0nfh5uxuFB1L6zgDNj2cHy_C3D9Ntfp",
    accounts: ["0b7c1988948e9b7fa4a52cea2887b09558c53bf675600a54df4b8d7b0033dfc1"]
  }
},
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};
