import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// wNat
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const wNatAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_governance', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_blockNumber',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CreatedTotalSupplyCache',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'selector',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: false,
      },
      {
        name: 'allowedAfterTimestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'encodedCall',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'GovernanceCallTimelocked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initialGovernance',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GovernanceInitialised',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'governanceSettings',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GovernedProductionModeEntered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'selector',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TimelockedGovernanceCallCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'selector',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TimelockedGovernanceCallExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_contractType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_oldContractAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_newContractAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'VotePowerContractChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_count', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceHistoryCleanup',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOfAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_delegatees', internalType: 'address[]', type: 'address[]' },
      { name: '_bips', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'batchDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owners', internalType: 'address[]', type: 'address[]' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'batchVotePowerOfAt',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_selector', internalType: 'bytes4', type: 'bytes4' }],
    name: 'cancelGovernanceCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cleanerContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cleanupBlockNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cleanupBlockNumberManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_bips', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'delegateExplicit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'delegatesOf',
    outputs: [
      {
        name: '_delegateAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
      { name: '_bips', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_count', internalType: 'uint256', type: 'uint256' },
      { name: '_delegationMode', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'delegatesOfAt',
    outputs: [
      {
        name: '_delegateAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
      { name: '_bips', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_count', internalType: 'uint256', type: 'uint256' },
      { name: '_delegationMode', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_who', internalType: 'address', type: 'address' }],
    name: 'delegationModeOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'depositTo',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_selector', internalType: 'bytes4', type: 'bytes4' }],
    name: 'executeGovernanceCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'governance',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'governanceSettings',
    outputs: [
      {
        name: '',
        internalType: 'contract IGovernanceSettings',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'governanceVotePower',
    outputs: [
      {
        name: '',
        internalType: 'contract IGovernanceVotePower',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_initialGovernance', internalType: 'address', type: 'address' },
    ],
    name: 'initialise',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'productionMode',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'readVotePowerContract',
    outputs: [
      { name: '', internalType: 'contract IVPContractEvents', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_who', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'revokeDelegationAt',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_cleanerContract', internalType: 'address', type: 'address' },
    ],
    name: 'setCleanerContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setCleanupBlockNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_cleanupBlockNumberManager',
        internalType: 'address',
        type: 'address',
      },
    ],
    name: 'setCleanupBlockNumberManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_governanceVotePower',
        internalType: 'contract IIGovernanceVotePower',
        type: 'address',
      },
    ],
    name: 'setGovernanceVotePower',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_vpContract',
        internalType: 'contract IIVPContract',
        type: 'address',
      },
    ],
    name: 'setReadVpContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_vpContract',
        internalType: 'contract IIVPContract',
        type: 'address',
      },
    ],
    name: 'setWriteVpContract',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'switchToProductionMode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    name: 'timelockedCalls',
    outputs: [
      {
        name: 'allowedAfterTimestamp',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'encodedCall', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'totalSupplyAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'totalSupplyCacheCleanup',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_count', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupplyHistoryCleanup',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalVotePower',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'totalVotePowerAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'totalVotePowerAtCached',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'undelegateAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_delegateAddresses',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: 'undelegateAllExplicit',
    outputs: [
      {
        name: '_remainingDelegation',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'undelegatedVotePowerOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'undelegatedVotePowerOfAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'votePowerFromTo',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'votePowerFromToAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'votePowerOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'votePowerOfAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'votePowerOfAtCached',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'votePowerOfAtIgnoringRevocation',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'vpContractInitialized',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'writeVotePowerContract',
    outputs: [
      { name: '', internalType: 'contract IVPContractEvents', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const wNatAddress = {
  114: '0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273',
} as const

/**
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const wNatConfig = { address: wNatAddress, abi: wNatAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNat = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatAllowance = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"balanceOfAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatBalanceOfAt = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'balanceOfAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"batchVotePowerOfAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatBatchVotePowerOfAt =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'batchVotePowerOfAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"cleanerContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatCleanerContract = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'cleanerContract',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"cleanupBlockNumber"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatCleanupBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'cleanupBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"cleanupBlockNumberManager"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatCleanupBlockNumberManager =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'cleanupBlockNumberManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatDecimals = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegatesOf"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatDelegatesOf = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'delegatesOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegatesOfAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatDelegatesOfAt = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'delegatesOfAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegationModeOf"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatDelegationModeOf = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'delegationModeOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"governance"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatGovernance = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'governance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"governanceSettings"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatGovernanceSettings =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'governanceSettings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"governanceVotePower"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatGovernanceVotePower =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'governanceVotePower',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatName = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"productionMode"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatProductionMode = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'productionMode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"readVotePowerContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatReadVotePowerContract =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'readVotePowerContract',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatSymbol = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"timelockedCalls"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatTimelockedCalls = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'timelockedCalls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupplyAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatTotalSupplyAt = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'totalSupplyAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalVotePower"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatTotalVotePower = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'totalVotePower',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalVotePowerAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatTotalVotePowerAt = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'totalVotePowerAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"undelegatedVotePowerOf"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatUndelegatedVotePowerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'undelegatedVotePowerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"undelegatedVotePowerOfAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatUndelegatedVotePowerOfAt =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'undelegatedVotePowerOfAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerFromTo"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatVotePowerFromTo = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'votePowerFromTo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerFromToAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatVotePowerFromToAt = /*#__PURE__*/ createUseReadContract(
  { abi: wNatAbi, address: wNatAddress, functionName: 'votePowerFromToAt' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerOf"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatVotePowerOf = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'votePowerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerOfAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatVotePowerOfAt = /*#__PURE__*/ createUseReadContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'votePowerOfAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerOfAtIgnoringRevocation"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatVotePowerOfAtIgnoringRevocation =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'votePowerOfAtIgnoringRevocation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"vpContractInitialized"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatVpContractInitialized =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'vpContractInitialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"writeVotePowerContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useReadWNatWriteVotePowerContract =
  /*#__PURE__*/ createUseReadContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'writeVotePowerContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNat = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatApprove = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"balanceHistoryCleanup"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatBalanceHistoryCleanup =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'balanceHistoryCleanup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"batchDelegate"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatBatchDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'batchDelegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"cancelGovernanceCall"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatCancelGovernanceCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'cancelGovernanceCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegate"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegateExplicit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatDelegateExplicit =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'delegateExplicit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"depositTo"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatDepositTo = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'depositTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"executeGovernanceCall"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatExecuteGovernanceCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'executeGovernanceCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"initialise"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatInitialise = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'initialise',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"revokeDelegationAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatRevokeDelegationAt =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'revokeDelegationAt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setCleanerContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSetCleanerContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setCleanerContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setCleanupBlockNumber"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSetCleanupBlockNumber =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setCleanupBlockNumber',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setCleanupBlockNumberManager"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSetCleanupBlockNumberManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setCleanupBlockNumberManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setGovernanceVotePower"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSetGovernanceVotePower =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setGovernanceVotePower',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setReadVpContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSetReadVpContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setReadVpContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setWriteVpContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSetWriteVpContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setWriteVpContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"switchToProductionMode"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatSwitchToProductionMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'switchToProductionMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupplyCacheCleanup"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatTotalSupplyCacheCleanup =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'totalSupplyCacheCleanup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupplyHistoryCleanup"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatTotalSupplyHistoryCleanup =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'totalSupplyHistoryCleanup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalVotePowerAtCached"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatTotalVotePowerAtCached =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'totalVotePowerAtCached',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"undelegateAll"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatUndelegateAll = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'undelegateAll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"undelegateAllExplicit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatUndelegateAllExplicit =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'undelegateAllExplicit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerOfAtCached"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatVotePowerOfAtCached =
  /*#__PURE__*/ createUseWriteContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'votePowerOfAtCached',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdrawFrom"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWriteWNatWithdrawFrom = /*#__PURE__*/ createUseWriteContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'withdrawFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNat = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"balanceHistoryCleanup"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatBalanceHistoryCleanup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'balanceHistoryCleanup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"batchDelegate"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatBatchDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'batchDelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"cancelGovernanceCall"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatCancelGovernanceCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'cancelGovernanceCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegate"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatDelegate = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"delegateExplicit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatDelegateExplicit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'delegateExplicit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"depositTo"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatDepositTo = /*#__PURE__*/ createUseSimulateContract(
  { abi: wNatAbi, address: wNatAddress, functionName: 'depositTo' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"executeGovernanceCall"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatExecuteGovernanceCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'executeGovernanceCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"initialise"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatInitialise =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'initialise',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"revokeDelegationAt"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatRevokeDelegationAt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'revokeDelegationAt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setCleanerContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSetCleanerContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setCleanerContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setCleanupBlockNumber"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSetCleanupBlockNumber =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setCleanupBlockNumber',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setCleanupBlockNumberManager"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSetCleanupBlockNumberManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setCleanupBlockNumberManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setGovernanceVotePower"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSetGovernanceVotePower =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setGovernanceVotePower',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setReadVpContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSetReadVpContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setReadVpContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"setWriteVpContract"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSetWriteVpContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'setWriteVpContract',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"switchToProductionMode"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatSwitchToProductionMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'switchToProductionMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupplyCacheCleanup"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatTotalSupplyCacheCleanup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'totalSupplyCacheCleanup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalSupplyHistoryCleanup"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatTotalSupplyHistoryCleanup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'totalSupplyHistoryCleanup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"totalVotePowerAtCached"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatTotalVotePowerAtCached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'totalVotePowerAtCached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"undelegateAll"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatUndelegateAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'undelegateAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"undelegateAllExplicit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatUndelegateAllExplicit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'undelegateAllExplicit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"votePowerOfAtCached"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatVotePowerOfAtCached =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'votePowerOfAtCached',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatWithdraw = /*#__PURE__*/ createUseSimulateContract({
  abi: wNatAbi,
  address: wNatAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link wNatAbi}__ and `functionName` set to `"withdrawFrom"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useSimulateWNatWithdrawFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: wNatAbi,
    address: wNatAddress,
    functionName: 'withdrawFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: wNatAbi,
  address: wNatAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"CreatedTotalSupplyCache"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatCreatedTotalSupplyCacheEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'CreatedTotalSupplyCache',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Deposit"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"GovernanceCallTimelocked"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatGovernanceCallTimelockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'GovernanceCallTimelocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"GovernanceInitialised"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatGovernanceInitialisedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'GovernanceInitialised',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"GovernedProductionModeEntered"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatGovernedProductionModeEnteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'GovernedProductionModeEntered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"TimelockedGovernanceCallCanceled"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatTimelockedGovernanceCallCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'TimelockedGovernanceCallCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"TimelockedGovernanceCallExecuted"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatTimelockedGovernanceCallExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'TimelockedGovernanceCallExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"VotePowerContractChanged"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatVotePowerContractChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'VotePowerContractChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link wNatAbi}__ and `eventName` set to `"Withdrawal"`
 *
 * [__View Contract on Coston2 Coston2 Explorer__](https://coston2-explorer.flare.network/address/0xC67DCE33D7A8efA5FfEB961899C73fe01bCe9273)
 */
export const useWatchWNatWithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: wNatAbi,
    address: wNatAddress,
    eventName: 'Withdrawal',
  })
