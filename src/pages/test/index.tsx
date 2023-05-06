import * as React from 'react'
import {Title} from "../../components/Title";
import {useState} from "react";
import {animated, useSpring} from '@react-spring/web';

import {ConnectButton} from '@suiet/wallet-kit'

const PAGE_TITLES = ["Don't", 'you', 'just', 'hate', 'popups?']


const  App = () => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 10000 } })


    return (
        <ConnectButton/>


    )
}


export default App
