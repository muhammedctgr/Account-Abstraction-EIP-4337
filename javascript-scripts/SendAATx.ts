import * as fs from "fs-extra"
import { utils, Wallet, Provider, EIP712Signer, types, Contract, ContractFactory } from "zksync-ethers"
import * as ethers from "ethers"
import "dotenv/config"

// Mainnet
// const ZK_MINIMAL_ADDRESS = ""

// Sepolia
// const ZK_MINIMAL_ADDRESS = ""

// Local
// Update this!
const ZK_MINIMAL_ADDRESS = "0x19a519025994A1F32188dE1F0E11014A791fB358"

// Update this too!
const RANDOM_APPROVER = "0x9EA9b0cc1919def1A3CfAEF4F7A66eE3c36F86fC"