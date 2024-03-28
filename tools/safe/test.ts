import { encodeErc20Transfer, encodeErc721SafeTransferFrom, encodeErc1155SafeTransferFrom } from './tools'


function main() {
    let result;

    const owner = '0xD22543c44fb3F33681315E36983338D65B803bA4';
    const receiver = '0xD22543c44fb3F33681315E36983338D65B803bA4';
    const amount = 1;
    const tokenId = 1;
    // result = encodeErc20Transfer(receiver, 1);

    // result = encodeErc721SafeTransferFrom(owner, receiver, 1);

    // result = encodeErc1155SafeTransferFrom(owner, receiver, tokenId, amount);


    console.log('==result==', result);
}

main();