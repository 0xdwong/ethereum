# Pectra 升级
Pectra 硬分叉包含 Prague 执行层升级和 Electra 协议层升级

## 已包含的 EIPs
- EIP-2537: Precompile for BLS12-381 curve operations
- EIP-2935: Save historical block hashes in state
- EIP-6110: Supply validator deposits on chain
- EIP-7002: Execution layer triggerable exits
- EIP-7251: Increase the MAX_EFFECTIVE_BALANCE
- EIP-7549: Move committee index outside Attestatio
- EIP-7594: PeerDAS - Peer Data Availability Sampling
- EIP-7685: General purpose execution layer requests
- EIP-7702: Set EOA account code for one transaction
EOF EIPs listed as part of EIP-7692, namely:
    - EIP-663: SWAPN, DUPN and EXCHANGE instructions
    - EIP-3540: EOF - EVM Object Format v1
    - EIP-3670: EOF - Code Validation
    - EIP-4200: EOF - Static relative jumps
    - EIP-4750: EOF - Functions
    - EIP-5450: EOF - Stack Validation
    - EIP-6206: EOF - JUMPF and non-returning functions
    - EIP-7069: Revamped CALL instructions
    - EIP-7480: EOF - Data section access instructions
    - EIP-7620: EOF Contract Creation
    - EIP-7698: EOF - Creation transaction


## 考虑中的 EIPs
- EIP-7212: Precompile for secp256r1 Curve Support
- EIP-7547: Inclusion lists
- EIP-7623: Increase calldata cost


共识层：EIP-6110, EIP-7002 EIP-7251, EIP-7549 and EIP-7594

执行层：All EOF EIPs listed in EIP-7692,  EIP-2537, EIP-2935, EIP-6110, EIP-7685, and EIP-7002 


## 参考
- [EIP-7600: Hardfork Meta - Pectra](https://eips.ethereum.org/EIPS/eip-7600)

