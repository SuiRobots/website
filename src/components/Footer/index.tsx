import {Container} from "../Container";
import Link from "next/link";

const Footer = () =>{

    return(
        <div className="bg-[#0B0B0B]  ">
            <Container className={"py-24  "}>
                <div className="flex justify-center">
                    <Link href="https://discord.gg/ceETxS2eTa" legacyBehavior>
                        <a target="_blank">
                            <img className="rounded-full w-24 mr-10" src="discord.svg" alt=""/>
                        </a>

                    </Link>
                    <Link href="https://twitter.com/suirobots" legacyBehavior>
                        <a target="_blank">
                            <img className="rounded-full w-24" src="twitter.svg" alt=""/>
                        </a>
                    </Link>
                </div>
                <div className="text-white text-center xl:mx-24 mt-10">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    {/*After humans leave, humanoid robots are orderly, spontaneous and organized to establish or restore the earth's ecology. They develop ecological technology on the earth, create a series of new plants, and plant them in polluted areas.*/}
                    {/*After repeated failures, a robot made of gold finally created a kind of intelligent plant that can absorb pollutants......*/}
                </div>
            </Container>
            <div className="md:px-20 xl:px-32 p-5 flex flex-col text-center md:flex-row justify-between font-semibold text-white text-xs">
                <div className="flex justify-center">
                    <div>
                        MADE WITH LOVE
                    </div>
                    <div className="text-[#FFEA68] ml-1">
                        BY SUIPOBOTS
                    </div>
                </div>
                {/*<div className="text-[#FFEA68] underline decoration-[#FFEA68] py-3 md:py-0">*/}
                {/*    TERMS & CONDITIONS*/}
                {/*</div>*/}
                <div className="flex items-center justify-center">
                    ©️ 2023 SUIROBOTS
                </div>

            </div>
        </div>
    )
}
export default Footer
