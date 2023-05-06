import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
// import {Chain, EthosConnectProvider} from "ethos-connect";
import "@suiet/wallet-kit/style.css";
import './suiet-wallet-kit-custom.css';
import "../css/font-awesome.css"
import React from 'react';
import {
    WalletProvider,
    Chain,
    SuiDevnetChain,
    SuiTestnetChain,
    SuiMainnetChain,
    DefaultChains,
} from "@suiet/wallet-kit";


function MyApp({ Component, pageProps }: AppProps) {
    //  const NETWORK = process.env.NETWORK || process.env.NEXT_PUBLIC_NETWORK
    //  const ethosConfiguration = {
    //     apiKey: process.env.NEXT_PUBLIC_ETHOS_API_KEY,
    //     preferredWallets: ['Ethos Wallet'],
    //     network: NETWORK,
    //     chain: Chain.SUI_DEVNET
    // };
    const customChain: Chain = {
        id: "4",
        name: "devnet",
        rpcUrl: "https://wallet-rpc.devnet.sui.io/",
    };
    const SupportedChains: Chain[] = [
        // ...DefaultChains,
        SuiDevnetChain,
        SuiTestnetChain,
        SuiMainnetChain,
        customChain,
    ];

  return (
    //   <EthosConnectProvider
    //       ethosConfiguration={ethosConfiguration}
    //   >
    //
    //   <Component {...pageProps} />
    // </EthosConnectProvider>
          <WalletProvider chains={SupportedChains}>
              <Component {...pageProps} />
          </WalletProvider>
  )
}

export default  MyApp
