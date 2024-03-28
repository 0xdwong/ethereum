import { ethers, Interface } from 'ethers'

const erc20ABI = [
    "function allowance(address,address) view returns (uint256)",
    "function approve(address,uint256) returns (bool)",
    "function balanceOf(address) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function transfer(address,uint256) returns (bool)",
    "function transferFrom(address,address,uint256) returns (bool)"
];

const erc721ABI = [
    "function approve(address,uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function getApproved(uint256) view returns (address)",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function mint(address,uint256)",
    "function name() view returns (string)",
    "function ownerOf(uint256) view returns (address)",
    "function safeTransferFrom(address,address,uint256)",
    "function safeTransferFrom(address,address,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function symbol() view returns (string)",
    "function tokenURI(uint256) view returns (string)",
    "function transferFrom(address,address,uint256)"
];

const erc1155ABI = [
    "function balanceOf(address,uint256) view returns (uint256)",
    "function balanceOfBatch(address[],uint256[]) view returns (uint256[])",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    "function safeTransferFrom(address,address,uint256,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function supportsInterface(bytes4) view returns (bool)",
    "function uri(uint256) view returns (string)"
];


const erc20Iface = new Interface(erc20ABI);
const erc721Iface = new Interface(erc721ABI);
const erc1155Iface = new Interface(erc1155ABI);

export function encodeErc20Transfer(receiver: string, amount: number | string, decimal: number = 18) {
    const amountToSend = ethers.parseUnits(String(amount), decimal);
    const encodedData = erc20Iface.encodeFunctionData("transfer", [receiver, amountToSend]);
    return encodedData;
}

export function encodeErc721SafeTransferFrom(owner: string, receiver: string, tokenId: number | string, data = '0x') {
    const encodedData = erc721Iface.encodeFunctionData("safeTransferFrom", [owner, receiver, tokenId, data]);
    return encodedData;
}

export function encodeErc1155SafeTransferFrom(owner: string, receiver: string, tokenId: number | string, amount: number | string, data = '0x') {
    const encodedData = erc1155Iface.encodeFunctionData("safeTransferFrom", [owner, receiver, tokenId, amount, data]);
    return encodedData;
}

export function buildNativeTransfer(receiver: string, amount: number | string) {
    return {
        'to': receiver,
        'data': '0x',
        'value': ethers.parseUnits(String(amount), 'ether').toString()
    }
}

export function buildERC20Transfer(contract: string, receiver: string, amount: number | string, decimal: number = 18) {
    const callData = encodeErc20Transfer(receiver, amount, decimal);

    return {
        'to': contract,
        'data': callData,
        'value': '0',
    }
}

export function buildERC1155Transfer(contract: string, owner: string, receiver: string, tokenId: number | string, amount: number, data = '0x') {
    const callData = encodeErc1155SafeTransferFrom(owner, receiver, tokenId, amount, data);

    return {
        'to': contract,
        'data': callData,
        'value': '0',
    }
}