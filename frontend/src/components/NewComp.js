import React, {useState, useEffect} from "react";
import {RiAddCircleLine, RiCloseLine} from "@remixicon/react"

export default function NewComp({user}) {
    // make one big request on app?

    function extractCookie(cookie) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookie}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    
    const jwt = extractCookie("jwt");

    const [user1, setUser1] = useState(null);

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
              setUser1(data);
            }
     
          } catch (err) {
    
          }
        }
    
        fetchUser();
    }, []);

  

    return (
      // functs: gif, emoji, pics, who can reply, user pic
        <>
        {
            user1 && (
                <div className="new-comp">
                    <h1>Welcome back, {user1.username}</h1>
                    <h2>Anything on your mind?</h2>
                    
                    {/* remainders possibly */}


{/* modal funct */}
                    
                </div>
            ) 
        }
        </>
    )
}