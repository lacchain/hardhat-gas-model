require("@nomiclabs/hardhat-waffle");
require("./extender");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.lacchain.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      blockGasLimit: 804247552,
      gasPrice: 0,
    },
    lacchain: {
      url: 'http://34.69.22.82',
      nodeAddress: '0xd00e6624a73f88b39f82ab34e8bf2b4d226fd768',
      expiration: 1736394529,
      gasPrice: 0,
      accounts: [
        '0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63',
        '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3',
        '0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f',
      ],
    },
  },
  solidity: "0.8.4",
};
