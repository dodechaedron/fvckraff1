import { utils } from '@project-serum/anchor';
import { TESTING } from './misc';
import { DISPENSER_PROGRAM_ID, DISPENSER_REGISTRY_ADDRESS } from './programIds';

export const ADMIN_ACCOUNTS = TESTING
  ? ['2hb6gCdjdMLVdiuzA5s7o831PdJjpu2UYGGotTtmtghw']
  : ['3vtEpVsQYEC2yLpeCFSLCVuVJN6eBqffLcuZFjMuHDqA'];

export const [VAULT_TOKEN_IN] = utils.publicKey.findProgramAddressSync(
  [Buffer.from('vault_token_in'), DISPENSER_REGISTRY_ADDRESS.toBytes()],
  DISPENSER_PROGRAM_ID
);
console.log(`VAULT_TOKEN_IN: ${VAULT_TOKEN_IN.toBase58()}`);

export const [VAULT_TOKEN_OUT] = utils.publicKey.findProgramAddressSync(
  [Buffer.from('vault_token_out'), DISPENSER_REGISTRY_ADDRESS.toBytes()],
  DISPENSER_PROGRAM_ID
);
console.log(`VAULT_TOKEN_OUT = ${VAULT_TOKEN_OUT.toBase58()}`);
