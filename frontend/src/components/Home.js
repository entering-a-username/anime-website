import React from 'react'

import Polls from "./Polls";
import Forums from "./Forums";
import Header from "./Header";
import NewFeature from "./NewFeature";
import _Browse from "./_Browse";
import NewComp from "./NewComp";

export default function Home({user}) {
  return (
    <>
        <Header />
        {
          user && <NewComp user={user} />
        }
        <NewFeature />
        <_Browse />
        <Polls />
        <Forums />
        

    </>
  )
}
