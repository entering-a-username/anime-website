import React from 'react'

import Polls from "./Polls";
import Forums from "./Forums";
import Header from "./Header";
import NewFeature from "./NewFeature";
import Browse from "./Browse";

export default function Home() {
  return (
    <>
        <Header />
        <NewFeature />
        <Browse />
        <Polls />
        <Forums />
        

    </>
  )
}
