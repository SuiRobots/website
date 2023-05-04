import Link from "next/link";
import {useCallback, useState} from "react";
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {ethos, EthosConnectStatus, TransactionBlock} from "ethos-connect";
import {BoxImg, ComingState, OpenBoxLoadingState, OpenBoxState, SellPop_up_boxState, SellState} from "../../jotai";
import {useAtom} from "jotai";
import {JsonRpcProvider} from "@mysten/sui.js";
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MenuIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 6h14M5 18h14M5 12h14"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronUpIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M17 14l-5-5-5 5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const Mint = () =>{
    const { wallet,status } = ethos.useWallet()
    const contractAddress = '0x93b4b0700c46fc5f800769ef064bf5308bae556278146a9ddb81ef76dc047004'
    const objectId = "0x1260b06e1a0df020f84d24d06572ba08288091e0f1fc8c285fd074259d75735e"
    const [,setOpenLoading] =useAtom(OpenBoxState)
    const [,setOpenBoxLoading] =useAtom(OpenBoxLoadingState)
    const [,setSellState] =useAtom(SellState)
    const [,setSellPop_up_boxState] = useAtom(SellPop_up_boxState)
    const [,setBoxImg] = useAtom(BoxImg)
    const provider = new JsonRpcProvider();
    const [comingState,setComingState] = useAtom(ComingState)
    const mint = useCallback(async () => {
        // setComingState(true)

        setOpenLoading(true)
        setOpenBoxLoading(false)
        setBoxImg("")
        const proofData =  await axios.post("http://127.0.0.1:3000/api/get_proof",{
            leafAddress:wallet.address
        })
        console.log("",(new Uint8Array(Buffer.from(proofData.data.data[2].slice(2), 'hex'))))
        if (!wallet) return
        try {
            const transactionBlock = new TransactionBlock();
            transactionBlock.setGasBudget(200000000)
            const input_price = transactionBlock.splitCoins(
                transactionBlock.gas,
                [transactionBlock.pure(100000000)]
            )
            transactionBlock.moveCall({
                target: `${contractAddress}::robots_nft::whitelist_mint`,
                arguments: [
                    transactionBlock.pure(objectId),
                    input_price[0],
                    transactionBlock.pure(
                        proofData.data.data.map(data=> Array.from(new Uint8Array(Buffer.from(data.slice(2), 'hex')))))
                ],
            })

            const response = await wallet.signAndExecuteTransactionBlock({
                transactionBlock,
                options: {
                    showObjectChanges: true,
                }
            });
            console.log(response)
            // const tx_status = response.effects.status.status;

            if(response.confirmedLocalExecution){
                setTimeout(
                    async () => {
                        const txn = await provider.getObject({
                            // @ts-ignore
                            id: response.objectChanges[2].objectId,
                            options: {
                                showContent: true,
                                showDisplay: true,
                            },
                        });
                        console.log(txn,"sss")
                        // @ts-ignore
                        const img_url = txn.data.content.fields.url
                        setOpenBoxLoading(true)
                        setTimeout(
                            async () => {
                                setBoxImg(img_url)
                                setSellState({state: true, type: "Mint", hash: response.digest})
                                setSellPop_up_boxState(true)
                            }, 3500)
                    }, 2000)


            }
        } catch (error) {
            setSellState({state:false,type:"Mint",hash: ""})
            setSellPop_up_boxState(true)
            await setOpenLoading(false)

            console.log(error)
        }


    }, [wallet])
    return(
        <>
            <div className=" items-center">
                <div className=" flex justify-center  " >
                    <div className="flex justify-center">
                        {status === EthosConnectStatus.Loading ? (
                            <div className="text-white"></div>
                        ) : status === EthosConnectStatus.NoConnection ? (
                            <div>

                            </div>
                            // <button onClick={ethos.showSignInModal}>
                            //     <img className="w-24 z-20 relative" src="connect.png" alt=""/></button>
                        ) : (
                            // status is EthosConnectStatus.Connected
                            <button onClick={mint}>
                                <img className="w-24 z-20 relative" src="mint.png" alt=""/>
                            </button>

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

const  Header = () =>{
    const [scroll,setScroll]=useState(false)
    const navigation = [
        {name:"STORY", href:"#story"},
        {name:"WORK", href:"#work"},
        // {name:"ROADMAP", href:"#roadmap"},
        // {name:"TEAM", href:"#team"},
    ]

    if(typeof window !== "undefined"){
        window.onscroll = function() {myFunction()};
    }

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };
    const to = (toEl)=>{
       let  bridge=document.querySelector(toEl);
       let body =document.body;
       let height =0;
       do{
           height+=bridge.offsetTop;
           bridge=bridge.offsetParent;
       }while(bridge!==body)

       window.scrollTo({
           top:height,
           behavior:'smooth'
       })

   }
    return (
        <div className={classNames(scroll?'p-3 backdrop-blur-sm bg-[#2E2E2E]/80':"py-4","flex  fixed z-40 inset-x-0 p-2 px-5 w-full justify-between xl:px-20 transition-all duration-700 ease-in-out mx-auto items-center items-center")}>
            <div className={"relative z-10 items-center flex"}>
                <Link href="/" legacyBehavior>
                <a>
                    <img
                        className="md:w-56 h-12 rounded-full flex lg:mr-5"
                        src="/LOGO.svg"
                        alt=""
                    />
                </a>
                </Link>
                <div className="hidden lg:flex lg:gap-10">
                    {navigation.map((item) => (
                        <button key={item.name}   onClick={()=>{to(item.href)}}
                           className="text-sm lg:text-base font-medium text-white transition duration-700 ">
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-6">
                <Popover className="lg:hidden">

                    {({ open }) => (
                        <>
                            <Popover.Button
                                className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-500 p-2 outline-none"
                                aria-label="Toggle site navigation"
                            >

                                {({ open }) =>
                                    open ? (
                                        <ChevronUpIcon className="h-10 w-10" />
                                    ) : (
                                        <MenuIcon className="h-10 w-10" />
                                    )
                                }
                            </Popover.Button>
                            <AnimatePresence initial={false}>
                                {open && (
                                    <>
                                        <Popover.Overlay
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                                        />
                                        <Popover.Panel
                                            static
                                            as={motion.div}
                                            initial={{ opacity: 0, y: -32 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{
                                                opacity: 0,
                                                y: -32,
                                                transition: { duration: 0.2 },
                                            }}
                                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl  bg-[#2E2E2E] px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20"
                                        >

                                            <div className="space-y-4 ">
                                                {navigation.map((item) => (
                                                    <button key={item.name}  onClick={()=>to(item.href)}
                                                          className="block text-base leading-7 tracking-tight text-white">
                                                        {item.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </Popover.Panel>
                                    </>
                                )}
                            </AnimatePresence>
                        </>
                    )}
                </Popover>

                <div className="hidden lg:flex gap-4 items-center">
                  <Mint/>
                    <ethos.components.AddressWidget/>

                    <Link href="https://discord.gg/ceETxS2eTa" legacyBehavior>
                        <a target="_blank">
                        <img className="w-6 " src="discord 1.svg" alt=""/>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/suirobots" legacyBehavior>
                        <a target="_blank">
                        <img className="w-6" src="Twitter1.svg" alt=""/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Header
