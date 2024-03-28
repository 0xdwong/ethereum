import Safe, { EthersAdapter } from '@safe-global/protocol-kit';
import { MetaTransactionData } from '@safe-global/safe-core-sdk-types';
import SafeApiKit from '@safe-global/api-kit';
import { ethers, Wallet, JsonRpcProvider } from 'ethers';
import { encodeErc20Transfer, encodeErc1155SafeTransferFrom } from './tools';

let dotenv = require('dotenv');
dotenv.config();


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

    // send erc20 tx
    {
      'to': '0xD22543c44fb3F33681315E36983338D65B803bA4', // contract address
      'data': encodeErc20Transfer('0x6eAfc7eC94fccd183FADAdB2989394A3369D3f68', 1),
      'value': '0'
    },
    // send erc1155 NFT (owner, receiver, tokenId, amount)
    {
      'to': '0x59412ec9fb7d3a3a6417185df55e2af875e5f311', // NFT contract address
      'data': encodeErc1155SafeTransferFrom('0x5c54B983d42Ef08c663CC3bE63A0Bed2dDF81C7E', '0x6eAfc7eC94fccd183FADAdB2989394A3369D3f68', 1, 2),
      'value': '0'
    },
  ]

  const safeTransaction = await safeSdk.createTransaction({ transactions });
  const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
  const senderSignature = await safeSdk.signHash(safeTxHash);

  // use for calling safe api
  const apiKit = new SafeApiKit({
    chainId: (await provider.getNetwork()).chainId
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
