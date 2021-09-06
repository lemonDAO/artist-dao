import { keyStores, Near, WalletConnection } from "near-api-js";

export const CONTRACT_ID = "hundred.testnet";

// use new NEAR here to avoid needing async/await
export const near = new Near({
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
});

// can now create a new WalletConnection with the created Near object
export const wallet = new WalletConnection(near, "hundred");