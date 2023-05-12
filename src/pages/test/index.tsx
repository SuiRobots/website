import * as React from 'react'
import {Title} from "../../components/Title";
import {useCallback, useState} from "react";
import {animated, useSpring} from '@react-spring/web';

import {ConnectButton, useWallet} from '@suiet/wallet-kit'

import axios from "axios";
import {
    Ed25519Keypair,
    JsonRpcProvider,
    RawSigner,
    TransactionBlock,
} from '@mysten/sui.js';

const PAGE_TITLES = ["Don't", 'you', 'just', 'hate', 'popups?']


const  App = () => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 10000 } })
    const wallet = useWallet();
    const keypair = new Ed25519Keypair();
    const provider = new JsonRpcProvider();
    const signer = new RawSigner(keypair, provider);

    const mint = useCallback(async () => {

       {
            if (!wallet) return

           const txb = new TransactionBlock();
           const packageObjectId = "0xXXX";
           txb.moveCall({
               target: `${packageObjectId}::nft::mint`,
               arguments: [txb.pure("Example NFT")],
           });
            try {
                const [coin] = txb.splitCoins(txb.gas, [txb.pure(100)]);
                txb.transferObjects([coin], txb.pure("0x3c124742768eeb292cc6e41c3039bcd0103b02ce53fa85071f139391b8ecbc17"));
               const result = await signer.signAndExecuteTransactionBlock({ transactionBlock: txb });
                console.log({ result });

            } catch (error) {


                console.log(error)
            }
        }
    }, [wallet])
    return (
        <>
            <ConnectButton/>
            <button onClick={mint}>
                mint
            </button>
        </>





    )
}


export default App
