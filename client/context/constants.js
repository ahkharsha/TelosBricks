import realEstate from "./RealEstate.json";
require("dotenv").config();

export const REAL_ESTATE_ADDRESS = "0x667e64FDf36fB1512DEfFca951dDFc3f56461bd5";
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "6913532cb8a350b6dbb3";
export const PINATA_SECRET_KEY = "0c93e6871fd49b760c5aa1461e5fb4c86e6bd3e6bdf61c3220efdc0aee4020b4";

// NETWORK
const networks = {
  telos_mainnet: {
    chainId: `0x${Number(40).toString(16)}`,
    chainName: "Telos EVM Mainnet",
    nativeCurrency: {
      name: "TLOS",
      symbol: "TLOS",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.telos.net"],
    blockExplorerUrls: ["https://www.teloscan.io/"],
  },
  telos_testnet: {
    chainId: `0x${Number(41).toString(16)}`,
    chainName: "Telos EVM Testnet",
    nativeCurrency: {
      name: "TLOS",
      symbol: "TLOS",
      decimals: 18,
    },
    rpcUrls: ["https://testnet.telos.net/evm"],
    blockExplorerUrls: ["https://testnet.teloscan.io/"],
  },
  localhost: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "TLOS",
      symbol: "TLOS",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://testnet.teloscan.io/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "telos_testnet";

export const handleNetworkSwitch = async () => {
  const networkName = "telos_testnet";
  const network = await changeNetwork({ networkName });
  return networkName;
};
