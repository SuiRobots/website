import Header from "../../components/Header";
import {useEffect, useState} from "react";


const IMG = [
    {
        img:"IMG_0644.PNG",
        title:""
    },
    {
        img:"IMG_0645.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0644.PNG",
        title:""
    },
    {
        img:"IMG_0645.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0644.PNG",
        title:""
    },
    {
        img:"IMG_0645.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0660.PNG",
        title:""
    },
    {
        img:"IMG_0661.PNG",
        title:""
    },
    {
        img:"IMG_0655.PNG",
        title:""
    },
    {
        img:"IMG_0653.PNG",
        title:""
    },
    {
        img:"IMG_0652.PNG",
        title:""
    },
    {
        img:"IMG_0644.PNG",
        title:""
    },
    {
        img:"IMG_0645.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0644.PNG",
        title:""
    },
    {
        img:"IMG_0645.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0647.PNG",
        title:""
    },
    {
        img:"IMG_0644.PNG",
        title:""
    },
    {
        img:"IMG_0645.PNG",
        title:""
    },
    {
        img:"IMG_0646.PNG",
        title:""
    },
    {
        img:"IMG_0660.PNG",
        title:""
    },
    {
        img:"IMG_0661.PNG",
        title:""
    },
    {
        img:"IMG_0655.PNG",
        title:""
    },
    {
        img:"IMG_0653.PNG",
        title:""
    },
    {
        img:"IMG_0652.PNG",
        title:""
    },


]
const Go = () =>{
    const [time,setTime] =useState(50)


    useEffect(()=>{
        return ()=> {
            clearInterval(time1)
        }
    },[])
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
            <div  className=" mb-96 bg-white grid grid-cols-4 gap-10 mx-48">
                {IMG.map((items=>(
                    <img className="" key={items.img} src={items.img} alt=""/>
                )))}
            </div>

        </div>
    )
}

export default Go


