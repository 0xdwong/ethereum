
import { MetaTransactionData } from '@safe-global/safe-core-sdk-types';
import { buildNativeTransfer, buildERC20Transfer, buildERC1155Transfer } from './tools'
import { createTxs } from './safeTx'

async function main() {
  // build transactions
  const receiver = '0x6eAfc7eC94fccd183FADAdB2989394A3369D3f68';
  const amount = '0.01';

  const erc20Contract = '0xD22543c44fb3F33681315E36983338D65B803bA4';

  const erc1155Contract = '0x59412ec9fb7d3a3a6417185df55e2af875e5f311';
  const tokenId = 1;
  const nftOwner = '0x5c54B983d42Ef08c663CC3bE63A0Bed2dDF81C7E';
  const nftAmount = 2;


  const transactions: MetaTransactionData[] = [
    // send ETH
    buildNativeTransfer(receiver, amount),

    // send erc20 tx
    buildERC20Transfer(erc20Contract, receiver, amount),

    // send erc1155 NFT (owner, receiver, tokenId, amount)
    buildERC1155Transfer(erc1155Contract, nftOwner, receiver, tokenId, nftAmount),
  ]

  const proposeTx = true; //是否同步到 safe 服务器
  await createTxs(transactions, proposeTx);
}

main()
