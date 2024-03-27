import Safe, { EthersAdapter } from '@safe-global/protocol-kit'
import { MetaTransactionData } from '@safe-global/safe-core-sdk-types'
import SafeApiKit from '@safe-global/api-kit'
import { ethers, Wallet, JsonRpcProvider } from 'ethers'
let dotenv = require('dotenv')
dotenv.config()


async function main() {
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

  // build transactions
  const transactions: MetaTransactionData[] = [
    // send ETH
    {
      'to': '0x6eAfc7eC94fccd183FADAdB2989394A3369D3f68',
      'data': '0x',
      'value': ethers.parseUnits('0.002', 'ether').toString()
    },
    {
      'to': '0xe267d1A89Df28b78aF04A2E5190194DEBBeA4beE',
      'data': '0x',
      'value': ethers.parseUnits('0.002', 'ether').toString()
    },
  ]

  const safeTransaction = await safeSdk.createTransaction({ transactions });
  const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
  const senderSignature = await safeSdk.signHash(safeTxHash);

  // use for calling safe api
  const apiKit = new SafeApiKit({
    chainId: 11155111n
  })

  await apiKit.proposeTransaction({
    safeAddress,
    safeTransactionData: safeTransaction.data,
    safeTxHash,
    senderAddress: await safeOwner1.getAddress(),
    senderSignature: senderSignature.data,
  })

  console.log('propose transaction to safe wallet');
}

main()
