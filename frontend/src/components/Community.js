import React, {useState, useEffect} from 'react'
import { RiImageLine, RiFileGifLine, RiChatPollLine, RiEmojiStickerLine } from "@remixicon/react"

export default function Community() {
    function extractCookie(cookie) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookie}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    
    const jwt = extractCookie("jwt");

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            console.log("happen")
            const res = await fetch("http://localhost:3050/user", {
              method: "GET",
              credentials: "include",
              headers: {
                'Authorization': `${jwt}`,
              }
            });

            if (!res.ok) {
    
            } 
    
            const data = await res.json();
            console.log(data) 
     
            if (data._id) {
              setUser(data);
            }
     
          } catch (err) {
    
          }
        }
    
        fetchUser();
    }, []);

  return (
    <>
        <main className="community">

            {
                user && (
                    <div className="create-div">
                        <div className="input">
                            <div className="img"><img src={user.profilePicture} alt="" /></div>
                            <div>
                                <textarea name="" id="" placeholder='Whats up?'></textarea>
                                <div className="poll">
                                    
                                </div>
                            </div>
                        </div>

                        

                        <div className="hr"> &nbsp; </div>

                        <div className="btns">
                            <RiImageLine size={26} />
                            <RiFileGifLine size={26} />
                            <RiChatPollLine size={26} />
                            <RiEmojiStickerLine size={26} />

                        </div>
                    </div>
                )
            }


            <div className="content">
                <div>
                    <ul className="content-list">
                        <li>Posts</li>
                        <li>Polls</li>
                    </ul>
                </div>

                
            </div>

            <div className="content-text">
                    
            </div>

        </main>
    </>
  )
}
