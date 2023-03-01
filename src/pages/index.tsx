import type { NextPage } from 'next';
import {useRouter} from "next/router";
import Home from "./home";

import UnboxingAnimation from "./go";

const IndexPage: NextPage = () => {
    const router = useRouter()
  return (
      <main>
      <Home/>
      </main>
  )
}

export default IndexPage


