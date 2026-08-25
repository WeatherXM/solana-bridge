import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import WormholeConnect from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
  networks: ['ethereum', 'solana'],
  walletConnectProjectId: '7f190010b21bea4204fc338d8946d9d9',
  routes: ['nttManual'],
  rpcs: {
      solana: 'https://solana-rpc.publicnode.com',
      ethereum: 'https://rpc.mevblocker.io'
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

function GitHubRepoLink() {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    let containerEl = document.getElementById('custom-github-link-container');
    const updatePosition = () => {
      const poweredBy = document.querySelector('[class*="poweredBy"]');
      if (poweredBy && poweredBy.parentElement) {
        if (!containerEl) {
          containerEl = document.createElement('div');
          containerEl.id = 'custom-github-link-container';
          containerEl.style.width = '100%';
        }
        if (poweredBy.previousElementSibling !== containerEl) {
          poweredBy.parentElement.insertBefore(containerEl, poweredBy);
          setContainer(containerEl);
        }
      }
    };

    updatePosition();
    const interval = setInterval(updatePosition, 250);
    return () => clearInterval(interval);
  }, []);

  if (!container) return null;

  return ReactDOM.createPortal(
    <div className="bridge-github-link">
      <a
        href="https://github.com/WeatherXM/solana-bridge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg height="17" width="17" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: 8 }}>
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        Open source on GitHub: WeatherXM/solana-bridge
      </a>
    </div>,
    container
  );
}

function App() {
  return (
    <>
      <WormholeConnect config={config} theme={theme} />
      <GitHubRepoLink />
    </>
  );
}

export default App;
