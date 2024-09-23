import React from 'react'

import Polls from "./Polls";
import Forums from "./Forums";
import Header from "./Header";
import NewFeature from "./NewFeature";
import _Browse from "./_Browse";

export default function Home() {
  return (
    <>
        <Header />
        <NewFeature />
        <_Browse />
        <Polls />
        <Forums />
        

    </>
  )
}
