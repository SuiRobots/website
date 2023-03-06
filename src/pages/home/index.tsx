import Header from "../../components/Header";
import { Container } from '../../components/Container'
import Footer from "../../components/Footer";
import {ethos, EthosConnectStatus, SignInButton} from "ethos-connect";
import {useCallback} from "react";
import {useAtom} from "jotai";
import {BoxImg, OpenBoxLoadingState, OpenBoxState, SellPop_up_boxState, SellState} from "../../jotai";
import Loading from "../../components/loading";
import {OpenBox, Pop_up_box} from "../../components/pop_up_box";
import Heads from "../../components/head";

const Hero = () =>{
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
            <OpenBox/>
            <Pop_up_box/>
            <div className="bg-black "  >
                <Container className={"pt-48"}>
                    <div className=" items-center">
                    <div className="text-[#FFEA68] font-black text-6xl italic text-center">
                        <div className="mb-10">
                            Crazy Robots
                        </div>
                    </div>
                        <div className="flex justify-center md:justify-between py-56 bg-no-repeat  bg-center lg:bg-left-bottom"  style={{backgroundImage:"url('/群体机器人.png')"}}>
                            <div className="hidden md:block">

                            </div>
                            <div className="flex justify-center mt-20 md:mt-0">
                                {status === EthosConnectStatus.Loading ? (
                                    <div className="text-white">Loading...</div>
                                ) : status === EthosConnectStatus.NoConnection ? (
                                    <button onClick={ethos.showSignInModal}>
                                        <img className="w-24 " src="connect.png" alt=""/></button>
                                ) : (
                                    // status is EthosConnectStatus.Connected
                                    <button onClick={mint}>
                                        <img className="w-24 " src="mint.png" alt=""/>
                                    </button>
                                )}
                            </div>
                        </div>





                    </div>
                </Container>

            </div>
        </>
    )
}

const Story = () =>{
    return(
        <div id="story">
            <div className="md:flex justify-between items-center ">
                <div className="md:mt-32">
                    <div className="text-[#FFEA68] font-semibold text-3xl">
                        The birth of crazy robots
                    </div>
                    <div className="text-white mt-4">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        With the serious consumption of the earth's resources, the earth's biological system has
                        gradually collapsed. The last group of high-quality living humans created a humanoid
                        intelligent robot and transmitted their consciousness to the chip of the robot to replace
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        them on the earth and restore the earth's environment and biological system, so as to be
                        more suitable for human survival! So far, human beings flew to space on the newly developed
                        D1H9 spacecraft. After humans leave, humanoid robots are orderly, spontaneous and organized
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        to establish or restore the earth's ecology. They develop ecological technology on the earth,
                        create a series of new plants, and plant them in polluted areas. After repeated failures,
                        a robot made of gold finally created a kind of intelligent plant that can absorb pollutants......
                    </div>
                </div>
                <img className="md:w-7/12 " src="gif动图_故事介绍区域.gif" alt=""/>

            </div>
        </div>
    )
}

const Work = () =>{
    return(
        <div id='work'>

            <div className="py-36">
                <div className="text-center text-4xl font-semibold text-[#FFEA68]">
                    IN THE WORKS
                </div>
                <div className="flex justify-center text-center py-10 border-b border-[#4F4F4F]">
                    <div >
                        <div className="flex justify-center">
                        <img className="w-24" src="/work/加入社区gif.gif" alt=""/>
                        </div>
                        <div className="my-5 text-white font-black text-xl">
                            JOIN THE COMMUNITY
                        </div>
                        <div className="text-[#959595]">
                            {/*White NFT is the lowest threshold <br/>to enter the community*/}
                            Unlock your identity and privileges
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-between   ">
                    <div className="flex p-10 border-b md:border-b-0 md:border-r border-[#4F4F4F]">
                        <img className="w-24 h-24" src="/work/tokens_gif.gif" alt=""/>
                        <div className="ml-10">
                            <div className="text-white font-black text-xl">
                                Governance
                            </div>
                            <div className="text-[#959595]">
                                In the future, NFT holders get the right to vote on governance to determine community development </div>
                        </div>
                    </div>

                    <div className="flex  p-10">
                        <img className="w-24 h-24" src="/work/投票治理gif.gif" alt=""/>
                        <div className="ml-10">
                            <div className="text-white font-black text-xl">
                                Treasury
                            </div>
                            <div className="text-[#959595]">
                                Open up access to the vault in the future and apply for funds to develop the community through proposals</div>
                        </div>

                    </div>

                </div>
                <div className="text-center font-semibold mt-10">
                    <div className="text-white">
                        Rights and Interests
                    </div>
                    <div className="text-[#F24544]">
                        You can get rewards for cooperation with other ecological projects.
                        <br/>
                        Community governance voting.
                        <br/>
                        Proposal right of treasury use.
                    </div>

                </div>
            </div>
        </div>
    )
}

const Team = () =>{
    const teamList = [
        {
            img:"team/恶魔.svg",
            name:"DAVID XING",
            position:"Creative Director",
            role:"Founder",
        },
        {
            img:"team/水晶.svg",
            name:"DAVID XING",
            position:"Creative Director",
            role:"Founder",
        },
        {
            img:"team/燃烧.svg",
            name:"DAVID XING",
            position:"Creative Director",
            role:"Founder",
        },
        {
            img:"team/玻璃.svg",
            name:"DAVID XING",
            position:"Creative Director",
            role:"Founder",
        },
        {
            img:"team/黄金.svg",
            name:"DAVID XING",
            position:"Creative Director",
            role:"Founder",
        },
        {
            img:"team/小丑.svg",
            name:"DAVID XING",
            position:"Creative Director",
            role:"Founder",
        },
    ]
    return(
        <div id="team" className="py-36">
            <div className="text-center text-4xl font-semibold text-[#FFEA68]">
                A WORLD CLASS TEAM, WITH A BIG MISSION
            </div>
            <div className=" mt-10 ">
                <div className="text-center text-[#959595] md:mx-24 xl:mx-72">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    After humans leave, humanoid robots are orderly, spontaneous and organized to establish or restore the earth's ecology.
                    They develop ecological technology on the earth, create a series of new plants, and plant them in polluted areas.

                    <div className="mt-5">
                    After repeated failures,
                    a robot made of gold finally created a kind of intelligent plant that can absorb pollutants......
                    </div>

                </div>
            </div>
            <div className="flex justify-center mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-x-24 md:gap-y-10">
                {teamList.map((item=>(
                    <div key={item.img} className=" items-center text-white text-sm md:text-base text-center">
                        <img className="w-full " src={item.img} alt=""/>
                        <div className="text-[#F24544] font-semibold   mt-4" >
                            {item.name}
                        </div>
                        <div>
                            {item.position}
                        </div>
                        <div>
                            {item.role}
                        </div>

                    </div>
                )))}

            </div>
            </div>
        </div>
    )
}
const Home = () =>{

    return (
        <>
            <Heads/>
            <div className="">
                <Header/>

                <Hero/>
                <div className="bg-black">
                    <Container className={"py-48"}>
                        <Story/>
                        <Work/>
                        <Team/>
                    </Container>

                </div>
                <Footer/>
            </div>


        </>


    )
}

export default Home


