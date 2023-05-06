import Header from "../../components/Header";
import { Container } from '../../components/Container'
import Footer from "../../components/Footer";
import {useEffect, useState} from "react";
import {ComingBox, OpenBox, Pop_up_box} from "../../components/pop_up_box";
import Heads from "../../components/head";
import {InertiaTitle, Title, TweenTitle} from "../../components/Title";

const Hero = () =>{
    return(
        <>
            <OpenBox/>
            <Pop_up_box/>
            <ComingBox/>
            <div className=" bg-black relative h-screen bg-repeat bg-center "  style={{backgroundImage:"url('/Background_map_of_official_website.gif')"}} >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0B]" />
            <img className="absolute z-10 bottom-1/2 lg:bottom-24" src="LOGO.gif" alt=""/>

            </div>
        </>
    )
}

const Story = () =>{
    return(
        <div id="story">
            <div className="md:flex justify-between  ">
                <div className=" ">
                    <InertiaTitle>
                    <div className="text-[#FFEA68] font-semibold text-3xl">
                        The birth of crazy robots
                    </div>
                    <div className="text-white mt-4">
                        After centuries of development, AI has evolved into a superintelligence capable of knowing and doing everything, while humans have gradually lost their capacity for empathy and their desires have become numb and indifferent.
                        In order to change this, humanity has united to launch a secret project.
                        Some volunteers will serve as human pioneers and experimenters, abandoning their carbon-based lives to transition to silicon-based life in search of the ultimate solution to these problems.
                    </div>
                    </InertiaTitle>
                </div>
                    <img className="md:w-7/12 mt-48 lg:mt-0" src="/story_robots.gif" alt=""/>

            </div>
        </div>
    )
}

const Work = () =>{
    return(
        <div id='work'>

            <div className="pt-36">
                <div className="text-center text-4xl font-semibold text-[#FFEA68]">
                    IN THE WORKS
                </div>
                <div className="flex justify-center text-center py-10 border-b border-[#4F4F4F]">
                    <div >
                        <div className="flex justify-center">
                        <Title>
                        <img className="w-24" src="/work/join_community.gif" alt=""/>
                        </Title>
                        </div>
                        <Title>
                        <div className="my-5 text-white font-black text-xl">
                            JOIN THE COMMUNITY
                        </div>
                        </Title>
                        <div className="text-[#959595]">
                            {/*White NFT is the lowest threshold <br/>to enter the community*/}
                            Unlock your identity and privileges
                        </div>
                    </div>
                </div>
                <div className="md:flex justify-between   ">
                    <div className="flex p-10 border-b md:border-b-0 md:border-r border-[#4F4F4F]">
                    <Title>
                        <img className="w-64 xl:w-48 h-24" src="/work/tokens.gif" alt=""/>
                    </Title>
                        <div className="ml-10">
                        <Title>
                            <div className="text-white font-black text-xl">
                               Treasury
                            </div>
                    </Title>
                            <Title>
                            <div className="text-[#959595]">
                                Open up access to the vault in the future and apply for funds to develop the community through proposals
                            </div>
                            </Title>
                          </div>
                    </div>

                    <div className="flex  p-10">
                    <Title>
                        <img className="w-64 xl:w-48 h-24" src="/work/vote.gif" alt=""/>
                </Title>
                        <div className="ml-10">
                            <Title>
                            <div className="text-white font-black text-xl">
                                Governance
                            </div>
                            </Title>
                            <Title>
                            <div className="text-[#959595]">
                                In the future, NFT holders get the right to vote on governance to determine community development
                            </div>
                            </Title>
                        </div>

                    </div>

                </div>
                {/*<div className="text-center font-semibold mt-10">*/}
                {/*    <div className="text-white">*/}
                {/*        Rights and Interests*/}
                {/*    </div>*/}
                {/*    <div className="text-[#F24544]">*/}
                {/*        You can get rewards for cooperation with other ecological projects.*/}
                {/*        <br/>*/}
                {/*        Community governance voting.*/}
                {/*        <br/>*/}
                {/*        Proposal right of treasury use.*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}

const Roadmap = () =>{
    const list = [
        {
            h1:"Twitter、Discord、Website Build"
        },
        {
            h1:"Community team building, community stewards, mod recruitment"
        },
        {
            h1:"Work with the official and ecological projects to build the market and influence, so that the community user growth"
        },
        {
            h1:"Mint 1000 NFT"
        },
        {
            h1:"Community governance product goes live, opens voting and vault"
        },
        {
            h1:"More updates will be available in the next phase"
        },

    ]
    return(
        <div id="roadmap" className="pt-36">

            <div className="text-center text-4xl font-semibold text-[#FFEA68]">
                ROADMAP
            </div>
            <div className="py-10 flex justify-center">
                <img className="w-48 " src="/roadmap.gif" alt=""/>
            </div>
                <ol className="text-center text-white ">
                    {list.map(items=>(
                        <li key={items.h1} className="list-decimal list-inside">
                            {items.h1}
                        </li>
                    ))}

                </ol>

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
    const [length,setLength] =useState(0)
    const [goHome,setGoHome] =useState(false)
    useEffect(()=>{
        if(length*4<100){
            setTimeout(
                ()=>{
                    setLength(length+1)
                },50)
        }else {
            setTimeout(
                ()=>{
                    setGoHome(true)
                },500)

        }
    },[length])
    if(!goHome){
        return (
            <div className=" ease-in-out flex flex-col h-screen justify-center">
                <Heads/>
                <div className="flex justify-center">
                    <div className="relative w-64 h-14  bg-gray-400 rounded-lg">
                        <img className="absolute h-14" src="LOGO.svg" alt=""/>
                        <div className="bg-black h-14  bg-opacity-80 rounded-lg" style={{width:`${length*4}%`}}></div>
                    </div>

                </div>

                <div className="flex justify-center">
                    {length*4}%
                </div>
            </div>
        )

    }else {
        return (
            <div className=" bg-[#0B0B0B]">
                <Heads/>
                <div className="">
                    <Header/>

                    <Title>
                        <Hero/>
                    </Title>

                    <div className="">
                        <Container className={""}>

                            <Story/>

                            <Work/>

                            {/*<TweenTitle>*/}
                            {/*<Roadmap/>*/}
                            {/*    </TweenTitle>*/}

                            {/*<Team/>*/}

                        </Container>
                    </div>
                    <Footer/>
                </div>
            </div>

        )
    }

}

export default Home


