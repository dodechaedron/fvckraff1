import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
//  ['2tyFcRqu4dThVJnCsHELjLmaHXvyGmghVtRdT9Bs7Drw', { name: 'TheSuperSOL 3 wl' }],

  [
    '6cD9x7CRgszxwTzHARofp6vwVxCHG2GtLYQmsNPJWjuJ',
    {
      name: '1000 BULG',
      overviewImageUri: 'https://raw.githubusercontent.com/dodechaedron/Labsbulg/main/bulgae-reward-1000.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
    //  ],
    },
  ],
  [
    'jDVbJiwvGfNvnRZ2x1QBBxFSgkC9Wr2D9eMWJHYrAuF',
    {
      name: '9 SOL',
      overviewImageUri: 'https://raw.githubusercontent.com/dodechaedron/Labsbulg/main/sol-9-reward.png',
//      alternatePurchaseMints: [
//        new PublicKey('So11111111111111111111111111111111111111112'),
    //  ],
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
