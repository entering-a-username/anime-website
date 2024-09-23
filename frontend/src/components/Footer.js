import React from 'react'
import { RiInstagramFill, RiTiktokFill, RiYoutubeFill, RiTwitterFill } from '@remixicon/react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="icons">
          {/* href inside */}
          <a href=""><RiInstagramFill size={34} className="icon" /></a>
          <a href=""><RiTiktokFill size={34} className="icon" /></a>
          <a href=""><RiYoutubeFill size={34} className="icon" /></a>
          <a href=""><RiTwitterFill size={34} className="icon" /></a>
        </div>

        <div className="app-download">
          <img src="/img/play-store-icon.png" alt="" />
          <img src="/img/app-store-icon.png" alt="" />
        </div>
      </div>

      <div className="info">
        <h1>©2024 All Rights Reserved.</h1>
        <span>copyright text</span>
      </div>
    </footer>
  )
}
