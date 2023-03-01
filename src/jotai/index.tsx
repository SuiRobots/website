import {atom} from "jotai";

const LoadingState = atom(false)

const SellPop_up_boxState = atom(false)

const SellState = atom({
    type:"",
    hash:"",
    state:false
})

export {LoadingState,SellPop_up_boxState,SellState}
