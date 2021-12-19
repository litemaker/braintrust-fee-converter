/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BrainTrustFeeConverterContract,
  BrainTrustFeeConverterContractInterface,
} from "../BrainTrustFeeConverterContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasuryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_btrst",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_poolFee",
        type: "uint24",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BTRST",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TreasuryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USDC",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61012060405234801561001157600080fd5b5060405161081938038061081983398101604081905261003091610071565b606094851b6001600160601b031990811660e05293851b841660805291841b831660a05290921b1660c05260e81b6001600160e81b03191661010052610104565b600080600080600060a08688031215610088578081fd5b8551610093816100ec565b60208701519095506100a4816100ec565b60408701519094506100b5816100ec565b60608701519093506100c6816100ec565b608087015190925062ffffff811681146100de578182fd5b809150509295509295909350565b6001600160a01b038116811461010157600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160e81c61068d61018c60003960008181606c015261025d015260008181610139015281816101d0015261031d01526000818160eb015261022f01526000818161011201528181610183015281816101af015261020a01526000818160ac0152610286015261068d6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063089fe6aa146100675780635b5c251f146100a757806386ed23e2146100e657806389a302711461010d578063c31c9c0714610134578063f16b68f71461015b575b600080fd5b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b60405162ffffff90911681526020015b60405180910390f35b6100ce7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161009e565b6100ce7f000000000000000000000000000000000000000000000000000000000000000081565b6100ce7f000000000000000000000000000000000000000000000000000000000000000081565b6100ce7f000000000000000000000000000000000000000000000000000000000000000081565b61016e6101693660046105f3565b61017c565b60405190815260200161009e565b60006101aa7f00000000000000000000000000000000000000000000000000000000000000003330876103a5565b6101f57f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000866104b4565b60408051610100810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f000000000000000000000000000000000000000000000000000000000000000081166020830190815262ffffff7f000000000000000000000000000000000000000000000000000000000000000081168486019081527f00000000000000000000000000000000000000000000000000000000000000008416606086019081526080860189815260a087018c815260c088018c8152600060e08a01908152995163414bf38960e01b815289518916600482015296518816602488015293519094166044860152905185166064850152516084840152905160a48301525160c48201529251811660e484015290917f00000000000000000000000000000000000000000000000000000000000000009091169063414bf3899061010401602060405180830381600087803b15801561036457600080fd5b505af1158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c91906105db565b95945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839290881691610409919061061e565b6000604051808303816000865af19150503d8060008114610446576040519150601f19603f3d011682016040523d82523d6000602084013e61044b565b606091505b509150915081801561047557508051158061047557508080602001905181019061047591906105b4565b6104ac5760405162461bcd60e51b815260206004820152600360248201526229aa2360e91b60448201526064015b60405180910390fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b1790529151600092839290871691610510919061061e565b6000604051808303816000865af19150503d806000811461054d576040519150601f19603f3d011682016040523d82523d6000602084013e610552565b606091505b509150915081801561057c57508051158061057c57508080602001905181019061057c91906105b4565b6105ad5760405162461bcd60e51b8152602060048201526002602482015261534160f01b60448201526064016104a3565b5050505050565b6000602082840312156105c5578081fd5b815180151581146105d4578182fd5b9392505050565b6000602082840312156105ec578081fd5b5051919050565b600080600060608486031215610607578182fd5b505081359360208301359350604090920135919050565b60008251815b8181101561063e5760208186018101518583015201610624565b8181111561064c5782828501525b50919091019291505056fea26469706673582212205273a286b770dfd4ca8101383791905244910ca9101b7a075b7e3ef9915a7e7b64736f6c63430008040033";

type BrainTrustFeeConverterContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrainTrustFeeConverterContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrainTrustFeeConverterContract__factory extends ContractFactory {
  constructor(...args: BrainTrustFeeConverterContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _swapRouter: string,
    _treasuryAddress: string,
    _usdc: string,
    _btrst: string,
    _poolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BrainTrustFeeConverterContract> {
    return super.deploy(
      _swapRouter,
      _treasuryAddress,
      _usdc,
      _btrst,
      _poolFee,
      overrides || {}
    ) as Promise<BrainTrustFeeConverterContract>;
  }
  getDeployTransaction(
    _swapRouter: string,
    _treasuryAddress: string,
    _usdc: string,
    _btrst: string,
    _poolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _swapRouter,
      _treasuryAddress,
      _usdc,
      _btrst,
      _poolFee,
      overrides || {}
    );
  }
  attach(address: string): BrainTrustFeeConverterContract {
    return super.attach(address) as BrainTrustFeeConverterContract;
  }
  connect(signer: Signer): BrainTrustFeeConverterContract__factory {
    return super.connect(signer) as BrainTrustFeeConverterContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrainTrustFeeConverterContractInterface {
    return new utils.Interface(_abi) as BrainTrustFeeConverterContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrainTrustFeeConverterContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BrainTrustFeeConverterContract;
  }
}