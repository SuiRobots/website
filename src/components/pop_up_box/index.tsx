import {useAtom} from "jotai";
import {
    BoxImg,
    ComingState,
    OpenBoxLoadingState,
    OpenBoxState,
    SellPop_up_boxState,
    SellState
} from "../../jotai";
import React, {Fragment, useEffect} from "react";
import Link from "next/link";
import {Dialog, Transition} from "@headlessui/react";
import {ExclamationTriangleIcon, XMarkIcon} from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Pop_up_box = () =>{
    const [pop_up_boxState,setSop_up_boxState] = useAtom(SellPop_up_boxState)
    const [pop_up_boxData,] =useAtom(SellState)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(pop_up_boxState){
            time = setTimeout(()=>{
                setSop_up_boxState(false)
            },6000)
        }
        const Pop_up_box = document.getElementById('Pop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setSop_up_boxState(false)

            },3000)
        }
    },[pop_up_boxState])
    return(
        <div
            id="Pop_up_box"
            aria-live="assertive"
            className="pointer-events-none z-50 fixed inset-0 top-12 flex items-end px-4 py-6 sm:items-start sm:p-6 "
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={pop_up_boxState}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={classNames(pop_up_boxData.state?"bg-green-50":"bg-red-50","pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg  ")}>
                        <div className="p-4">
                            <div className="flex items-center">
                                <img className={pop_up_boxData.state?"w-10  mt-1":"hidden"} src="/successful.svg" alt=""/>
                                <img className={pop_up_boxData.state?"hidden":"w-10  mt-1"} src="/fail.svg" alt=""/>
                                <div className="ml-3 w-0 flex-1 pt-0.5 text-white text-sm">
                                    <p className={classNames(pop_up_boxData.state?
                                            "text-green-800"
                                            :
                                            "text-red-800",
                                        "text-sm font-medium ")}>{pop_up_boxData.type} {classNames(pop_up_boxData.state?"success":"fail")}</p>
                                    <p className={pop_up_boxData.state?"hidden":"mt-1 text-red-800 font-black"}>Please try again</p>
                                    <div className={pop_up_boxData.hash == ""? "hidden":""}>
                                        <Link legacyBehavior href={`https://explorer.sui.io/transaction/${pop_up_boxData.hash}?network=https%3A%2F%2Fwallet-rpc.devnet.sui.io%2F` } target="_Blank">
                                            <a className={classNames(pop_up_boxData.state?
                                                    "bg-green-50 text-green-500 hover:bg-green-100"
                                                    :
                                                    "bg-red-50 text-red-500 hover:bg-red-100",
                                                "mt-1 underline font-semibold ")}
                                               target="_Blank">
                                                View on Explorer
                                            </a></Link>

                                    </div>

                                </div>
                                <div className="-mt-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className={classNames(pop_up_boxData.state?
                                                "bg-green-50 text-green-500 hover:bg-green-100"
                                                :
                                                "bg-red-50 text-red-500 hover:bg-red-100",
                                            "inline-flex rounded-md  p-1.5")}
                                        onClick={() => {
                                            setSop_up_boxState(false)
                                        }}
                                    >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}


const OpenBox = () =>{
    const [openBox,setOpenBox] =useAtom(OpenBoxState)
    const [openBoxLoading,setOpenBoxLoading] =useAtom(OpenBoxLoadingState)
    const [boxImg,setBoxImg] = useAtom(BoxImg)
    return(
        <>
            <Transition.Root show={openBox} as={Fragment}>
                <Dialog as="div" className="relative z-40" onClose={()=>false}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="">
                                    <div className={boxImg==""?"":"hidden"}>
                                        <img className={openBoxLoading?"w-97":"w-72 mt-14"} src={openBoxLoading?"/openBoxLoading.gif":"/loading.gif"} alt=""/>
                                    </div>
                                    <img className={boxImg==""?"hidden":"w-72 mt-14"} src={boxImg} alt=""/>
                                    <div>
                                        <button className={boxImg==""?"hidden":" px-5 py-1.5 bg-white rounded-lg mt-5"} onClick={()=>setOpenBox(false)}>
                                            confirm
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}


const ComingBox = () =>{


    const [comingState,setComingState] = useAtom(ComingState)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(comingState){
            time = setTimeout(()=>{
                setComingState(false)
            },6000)
        }
        const Pop_up_box = document.getElementById('ComingBox');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setComingState(false)

            },3000)
        }
    },[comingState])
    return(
        <div
            id="ComingBox"
            aria-live="assertive"
            className="pointer-events-none z-50 fixed inset-0 top-12 flex items-end px-4 py-6 sm:items-start sm:p-6 "
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={comingState}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg  ">
                        <div className="p-4 bg-white">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900">Coming Soon!</p>
                                    {/*<p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>*/}
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-white text-gray-400 "
                                        onClick={() => {
                                            setComingState(false)
                                        }}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )

}
export {Pop_up_box,OpenBox,ComingBox}
