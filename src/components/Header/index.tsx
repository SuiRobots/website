import Link from "next/link";
import {useCallback, useState} from "react";
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {ethos, EthosConnectStatus} from "ethos-connect";
import {BoxImg, OpenBoxLoadingState, OpenBoxState, SellPop_up_boxState, SellState} from "../../jotai";
import {useAtom} from "jotai";


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
    const contractAddress = '0x0000000000000000000000000000000000000002'
    const [,setOpenLoading] =useAtom(OpenBoxState)
    const [,setOpenBoxLoading] =useAtom(OpenBoxLoadingState)
    const [,setSellState] =useAtom(SellState)
    const [,setSellPop_up_boxState] = useAtom(SellPop_up_boxState)
    const [,setBoxImg] = useAtom(BoxImg)
    const mint = useCallback(async () => {
        setOpenLoading(true)
        setOpenBoxLoading(false)
        setBoxImg("")
        if (!wallet) return
        try {
            const signableTransaction = {
                kind: 'moveCall' as const,
                data: {
                    packageObjectId: contractAddress,
                    module: 'devnet_nft',
                    function: 'mint',
                    typeArguments: [],
                    arguments: [
                        'Example NFT Name',
                        'This is a description',
                        'https://ethoswallet.xyz/assets/images/ethos-email-logo.png',
                    ],
                    gasBudget: 10000,
                },
            }
            const result =   await wallet.signAndExecuteTransaction(signableTransaction)
            const tx_status = result.effects.status.status;
            if(tx_status == "success"){
                setOpenBoxLoading(true)
                setTimeout(
                    ()=>{
                        setBoxImg("/team/小丑.svg")
                        setSellState({state:true,type:"Mint",hash: result.certificate.transactionDigest})
                        setSellPop_up_boxState(true)
                    }, 3500)
            }
        } catch (error) {
            setSellState({state:false,type:"Mint",hash: ""})
            setSellPop_up_boxState(true)
            await setOpenLoading(false)
            // console.log(error)
        }

    }, [wallet])
    return(
        <>
            <div className=" items-center">
                <div className=" flex justify-center  " >
                    <div className="flex justify-center">
                        {status === EthosConnectStatus.Loading ? (
                            <div className="text-white">Loading...</div>
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
        {name:"ROADMAP", href:"#roadmap"},
        {name:"TEAM", href:"#team"},
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
