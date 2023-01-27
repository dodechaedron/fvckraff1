import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
//  ['2tyFcRqu4dThVJnCsHELjLmaHXvyGmghVtRdT9Bs7Drw', { name: 'TheSuperSOL 3 wl' }],

  [
    '4JZfysFwAMseh3xTykzzdexdb3LGBxVBu79kkDSZbwuA',
    {
      name: '100 $Bulg',
      overviewImageUri: 'https://raw.githubusercontent.com/dodechaedron/Labsbulg/main/bulgae.jpeg',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
  [
    'HNscf22XXDPt82omw8sYSHAoiqPovm6ZSziD7MGwwv4j',
    {
      name: 'Primate #960',
      overviewImageUri: 'https://bafybeigm2dtupeo4aytbpg5w2zk2fd4x6hvd6bpqc74ono5ud3nfbf24by.ipfs.nftstorage.link/959.png?ext=png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
  [
    'D4K3ToJ7pcPaFfxAP1PqrWa9JpoaoyGijC26P4pShQ3J',
    {
      name: '3-NFT Rakkudos',
      overviewImageUri: 'https://raw.githubusercontent.com/ogadwintara/SOSTOKEN/main/RAKUDOS-RAFFLE-PRIZE-3-NFT.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],

  [
    'dZ1V9awzQNVRAxDURkivGX98D49nnoV3BcC16aiRCHV',
    {
      name: 'DeGod #9560',
      overviewImageUri: 'https://metadata.degods.com/g/9559-dead.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
//      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3',
    {
      name: 'The 97 Universe #91',
      overviewImageUri: 'https://tn72w7g3egypmkcfhdf3qbbuvo4yhhnznx5wc3vlhn4remod57va.arweave.net/m3-rfNshsPYoRTjLuAQ0q7mDnblt-2Fuqzt5EjHD7-o?ext=png',
    },
  ],
  [
    '2QjkshNu3mrcCnriekTpppa3PFwnAR9Yf7v5vc54m2Yh',
    {
      name: 'First SOL raffle',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    '8aEm1MoDqkYT5vCB21jC6aMMcMbdQJgmHpyBbtHDfUjU',
    {
      name: 'Anti Artist Club',
      overviewImageUri: '/resources/aartist-raffle-overview.gif',
    },
  ],
  [
    '2ziwAj4awgvNyn8ywwjkBRkBsmv259u9vVyEdrGYTb54',
    {
      name: 'More SOL',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    'EgHys3WPcM5WRpKqVHs1REfK6Npzq9sJ7dZPFPzQy2xG',
    {
      name: 'Triple SOL',
      overviewImageUri: '/resources/solana-logo-x3.gif',
    },
  ],
  [
    'CjzFZfrMW4D1jZVm5upCobRi96UYnQTk5cescSt12rhV',
    {
      name: 'SAMO raffle',
      overviewImageUri: '/resources/samo-x3.gif',
    },
  ],
  [
    'EZtBKgWq66KT4jRKtd4VT3LWh3mVC4pwcCsqLzKas63G',
    {
      name: 'BitBoat raffle',
      overviewImageUri: '/resources/bitboat-raffle.gif',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
