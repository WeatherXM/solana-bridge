import WormholeConnect from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
  networks: ['ethereum', 'solana'],
  walletConnectProjectId: '7f190010b21bea4204fc338d8946d9d9',
  routes: ['nttManual'],
  rpcs: {
      solana: 'https://api.mainnet-beta.solana.com',
      ethereum: 'https://cloudflare-eth.com'
    },
  tokens: ['WXMeth', 'WXMsolana'],
  tokensConfig: {
    WXMeth: {
      key: 'WXMeth',
      symbol: 'WXM',
      nativeChain: 'ethereum',
      tokenId: {
        chain: 'ethereum',
        address: '0xde654f497A563dd7A121c176a125dD2F11F13a83',
      },
      icon: "https://bafybeicqkide5bkqq4aqxtdaru2ne2mczye4x2eothuiis5hfoiml4vflm.ipfs.dweb.link/",
      coinGeckoId: 'weatherxm-network',
      color: '#FFFFFF',
      decimals: {
        default: 18,
      },
      foreignAssets: {
        solana: {
          address: 'wxmJYe17a2oGJZJ1wDe6ZyRKUKmrLj2pJsavEdTVhPP',
          decimals: 9,
        },
      },
    },
    WXMsolana: {
      key: 'WXMsolana',
      symbol: 'WXM',
      nativeChain: 'solana',
      tokenId: {
        chain: 'solana',
        address: 'wxmJYe17a2oGJZJ1wDe6ZyRKUKmrLj2pJsavEdTVhPP',
      },
      icon: "https://bafybeicqkide5bkqq4aqxtdaru2ne2mczye4x2eothuiis5hfoiml4vflm.ipfs.dweb.link/",
      coinGeckoId: 'weatherxm-network',
      color: '#FFFFF',
      decimals: {
        default: 9,
      },
    }
  },
  nttGroups: {
    SOLANA_WXM: {
      nttManagers: [
        {
          chainName: 'ethereum',
          address: '0xD24AFd8ECa7b51BCf3C0e6B3ca94c301b121CccE',
          tokenKey: 'WXMeth',
          transceivers: [
            {
              address: '0x8b209672c2120F84Ceb70b22416645F8912AD0f0',
              type: 'wormhole',
            },
          ],
        },
        {
          chainName: 'solana',
          address: 'NttWixqwUHAnpXym3UYUySQZtb4C57EZxpH721JfLyF',
          tokenKey: 'WXMsolana',
          transceivers: [
            {
              address: 'NttWixqwUHAnpXym3UYUySQZtb4C57EZxpH721JfLyF',
              type: 'wormhole',
            },
          ],
        },
      ],
    },
  }
};

const theme: WormholeConnectPartialTheme = {
  background: {
    default: '#00000'
  }
};

function App() {
  return (
    <WormholeConnect config={config} theme={theme} />
  );
}

export default App;
