import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV3R2, WalletContractV4, WalletContractV5R1 } from "@ton/ton";

async function main() {
  // open wallet v4 (notice the correct wallet version here)
  const mnemonic = "pet carpet happy .."; // your 24 secret words (replace ... with the rest of the words)
  const key = await mnemonicToWalletKey(mnemonic.split(" "));
  const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

  // print wallet address
  console.log(wallet.address.toString({ testOnly: false }));

  // print wallet workchain
  console.log("workchain:", wallet.address.workChain);
}

main();
