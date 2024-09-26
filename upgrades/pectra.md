# Pectra 升级
Pectra 硬分叉包含 Prague 执行层升级和 Electra 协议层升级，预计在 2025 年第一季度。

Pectra 升级并没有一个主要目标，而像几个 EIP 的修修补补。不像 Dencun 升级（大大降低L2费用）、Shepella 升级（质押可取回）。？

主要内容：EOF

## EOF：

以太坊对象格式，引入了多个操作码


## 已包含的 EIPs
- [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537): BLS12-381 曲线操作的预编译
- [EIP-2935](https://eips.ethereum.org/EIPS/eip-2935): 在状态中保存历史区块哈希
- [EIP-6110](https://eips.ethereum.org/EIPS/eip-6110): 在链上提供验证者存款
- [EIP-7002](https://eips.ethereum.org/EIPS/eip-7002): 可触发的执行层退出
- [EIP-7251](https://eips.ethereum.org/EIPS/eip-7251): 增加最大有效余额
- [EIP-7549](https://eips.ethereum.org/EIPS/eip-7549): 将委员会索引移出证明
- [EIP-7594](https://eips.ethereum.org/EIPS/eip-7594): PeerDAS - 对等数据可用性采样
- [EIP-7685](https://eips.ethereum.org/EIPS/eip-7685): 通用执行层请求
- [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702): 为一个交易设置 EOA 账户代码

EOF EIP 列在 [EIP-7692](https://eips.ethereum.org/EIPS/eip-7692) 中，包括: 
- [EIP-663](https://eips.ethereum.org/EIPS/eip-663): SWAPN, DUPN 和 EXCHANGE 指令
- [EIP-3540](https://eips.ethereum.org/EIPS/eip-3540): EOF - EVM 对象格式 v1
- [EIP-3670](https://eips.ethereum.org/EIPS/eip-3670): EOF - 代码验证
- [EIP-4200](https://eips.ethereum.org/EIPS/eip-4200): EOF - 静态相对跳转
- [EIP-4750](https://eips.ethereum.org/EIPS/eip-4750): EOF - 函数
- [EIP-5450](https://eips.ethereum.org/EIPS/eip-5450): EOF - 栈验证
- [EIP-6206](https://eips.ethereum.org/EIPS/eip-6206): EOF - JUMPF 和不返回的函数
- [EIP-7069](https://eips.ethereum.org/EIPS/eip-7069): 改进的 CALL 指令
- [EIP-7480](https://eips.ethereum.org/EIPS/eip-7480): EOF - 数据段访问指令
- [EIP-7620](https://eips.ethereum.org/EIPS/eip-7620): EOF 合约创建
- [EIP-7698](https://eips.ethereum.org/EIPS/eip-7698): EOF - 创建交易



## 考虑中的 EIPs
- RIP-7212: 支持 secp256r1 曲线的预编译
- [EIP-7547](https://eips.ethereum.org/EIPS/eip-7547): 包含列表
- [EIP-7623](https://eips.ethereum.org/EIPS/eip-7623): 增加 calldata 成本


共识层：EIP-6110, EIP-7002 EIP-7251, EIP-7549 和 EIP-7594

执行层：All EOF EIPs listed in EIP-7692,  EIP-2537, EIP-2935, EIP-6110, EIP-7685 和 EIP-7002 


## 参考
- [EIP-7600: Pectra 硬分叉元数据](https://eips.ethereum.org/EIPS/eip-7600)

