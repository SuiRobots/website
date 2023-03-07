import Header from "../../components/Header";
import {useEffect, useState} from "react";


const IMG = [
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },
    {
        img:"/team/恶魔.svg",
        title:""
    },
    {
        img:"/team/水晶.svg",
        title:""
    },
    {
        img:"/team/燃烧.svg",
        title:""
    },
    {
        img:"/team/玻璃.svg",
        title:""
    },
    {
        img:"/team/黄金.svg",
        title:""
    },


]
const Go = () =>{
    const [time,setTime] =useState(50)

    const [length,setLength] =useState(0)

    useEffect(()=>{
        console.log(length)
        if(length*4<100){
            setTimeout(
                ()=>{
                    setLength(length+1)
                },50)
        }

        // return ()=> {
        //     clearInterval(time1)
        // }
    },[length])
    let index = 0

    let time1

    const spin = () =>{
        time1 =  setInterval(() => {
            index = index + 2
            if(typeof window !== 'undefined'){

                if(document.getElementById("carousel")){
                    const left = document.getElementById("carousel")
                    console.log(index)
                    if (index <=200) {
                        left.style.marginLeft  = -index + "rem"
                    } else {
                        setTime(1000)
                        index=10
                        left.style.marginLeft = -10 + "rem"
                        // clearInterval(time1)
                        // setTime(1000)
                    }

                }
            }
        }, time)

    }



    return (
        <div>
            <Header/>

            <div className=" relative   w-96 overflow-hidden mx-auto" >

                <div className="flex w-96  py-32 transition-all duration-700 "  id="carousel">
                    <div className="border-2 h-12   absolute left-1/2 border-black">

                    </div>
                    {IMG.map(items=>(
                        <div key={items.title} className="w-full ">
                            <div  className="rounded-2xl w-12 mr-2 border border-black">
                                <img className="rounded-t-2xl " src={items.img} alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={spin}>
                w
            </button>

            <div className="flex justify-center">
                <div className="relative w-72 h-56  h-4 bg-gray-400 ">
                    <img className="absolute" src="群体机器人.png" alt=""/>
                    <div className="bg-black h-56  bg-opacity-80" style={{width:`${length*4}%`}}></div>
                </div>

            </div>

                <div className="flex justify-center">
                    {length*4}%
                </div>


        </div>
    )
}

export default Go


