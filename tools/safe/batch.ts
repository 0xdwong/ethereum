
import { MetaTransactionData } from '@safe-global/safe-core-sdk-types';
import { buildNativeTransfer, buildERC20Transfer, buildERC1155Transfer } from './tools'
import { createTxs } from './safeTx'


async function batchSendERC20() {
    console.log('==batch==');

    const receiver = '0x6eAfc7eC94fccd183FADAdB2989394A3369D3f68';
    const amount = '0.01';
    const erc20Contract = '0xD22543c44fb3F33681315E36983338D65B803bA4';

    let receivers = new Array(800).fill(receiver); // simulation
    let amounts = new Array(800).fill(amount); // simulation
    let transactions: MetaTransactionData[] = [];

    // build transactions
    for (let i = 0; i < receivers.length; i++) {
        const receiver = receivers[i];
        const amount = amounts[i];
        const transaction = buildERC20Transfer(erc20Contract, receiver, amount);
        transactions.push(transaction);
    }
    const proposeTx = true; //是否同步到 safe 服务器
    await createTxs(transactions, proposeTx);

    console.log('==batch== end');
}

batchSendERC20();