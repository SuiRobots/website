import {atom} from "jotai";

const OpenBoxState = atom(false)

const SellPop_up_boxState = atom(false)

const SellState = atom({
    type:"",
    hash:"",
    state:false
})

const OpenBoxLoadingState = atom(false)

const BoxImg = atom("")

const ComingState = atom(false)

export {ComingState,OpenBoxState,OpenBoxLoadingState,SellPop_up_boxState,SellState,BoxImg}
