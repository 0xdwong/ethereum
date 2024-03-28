import Safe, { EthersAdapter } from '@safe-global/protocol-kit'
import { MetaTransactionData } from '@safe-global/safe-core-sdk-types'
import SafeApiKit from '@safe-global/api-kit'
import { ethers, Wallet, JsonRpcProvider } from 'ethers'

let dotenv = require('dotenv')
dotenv.config()


export async function createTxs(transactions: MetaTransactionData[], proposeTx: boolean = false) {
  // params
  const PROVIDER_URL = process.env.PROVIDER_URL;
  const privateKey = String(process.env.PRIVATE_KEY);
  const safeAddress = String(process.env.MULTISIG_ADDR);

  let provider = new JsonRpcProvider(PROVIDER_URL);
  // wallet must be one of the safeWallet owner
  const safeOwner1 = new Wallet(privateKey, provider);

  const ethAdapter = new EthersAdapter({
    ethers,
    signerOrProvider: safeOwner1,
  })

  const safeSdk = await Safe.create({ ethAdapter, safeAddress });

  const safeTransaction = await safeSdk.createTransaction({ transactions });
  const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
  const senderSignature = await safeSdk.signHash(safeTxHash);

  if (proposeTx) {
    // use for calling safe api
    const apiKit = new SafeApiKit({
      chainId: (await provider.getNetwork()).chainId
    })

    // await apiKit.proposeTransaction({
    //   safeAddress,
    //   safeTransactionData: safeTransaction.data,
    //   safeTxHash,
    //   senderAddress: await safeOwner1.getAddress(),
    //   senderSignature: senderSignature.data,
    // })
    console.log('propose transaction to safe wallet', (await provider.getNetwork()).chainId);
  }

  console.log('==create txs succeed==');
}