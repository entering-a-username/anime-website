import React, { useState, useEffect } from 'react'
import { RiMessageLine, RiLink, RiUserAddLine, RiInstagramLine, RiFacebookLine, RiTwitterLine, RiDiscordLine } from '@remixicon/react'
import { useParams } from 'react-router-dom';
import { getFlags } from "../utils/flags";

export default function Profile({user}) {

    
    const [activeTab, setActiveTab] = useState("blogs");
    const [profileInfo, setProfileInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const { username } = useParams();

    const isOwnProfile = username ? false : true;

    // flag emoji
    // const flag = getFlags(profileInfo.country);

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    // links section
    const socialIcons = {
        instagram: <RiInstagramLine size={40} />,
        facebook: <RiFacebookLine size={40} />,
        twitter: <RiTwitterLine size={40} />,
        discord: <RiDiscordLine size={40} />,
    };

    useEffect(() => {
        async function fetchProfile() {
            try {
                setLoading(true);
                let res;

                if (username) {
                    res = await fetch(`http://localhost:3050/api/profile?username=${username}`);
                } else if (user) {
                    res = await fetch("http://localhost:3050/api/profile", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            'Authorization': user,
                        }
                    })
                }

                const data = await res.json();
                console.log(data)
                setProfileInfo(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }
 
        fetchProfile();
    }, [username, user]);

    if (loading) {
        return <p>LOADING</p>
    }

    if (!profileInfo) {
        return <p>not ofund</p>
    } 

  return (

    <>

        <main className="profile">
    {/* setup multer for picture */}
    
            {
                profileInfo && (
                    <>
                            <div className="user-info">

                                {!username && (
                                    <a className="edit-link" href="/edit-profile">Edit Profile</a>
                                )}

                                <div className="img-div">
                                    <img src="" alt="" />
                                </div>

                                <h1> {profileInfo.username} <span> {getFlags(profileInfo.country)} </span> </h1>
                                <h3>Joined {new Date(profileInfo.joinedDate).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})} </h3>
                                <h2>last online</h2>

                                <div className="interact-btns">
                                    <button disabled={isOwnProfile}><RiMessageLine size={25}></RiMessageLine></button>
                                    <button disabled={isOwnProfile}><RiUserAddLine size={25}></RiUserAddLine></button>

                                </div>

                                {/* unfollow lfollow systme */}
                                <h2>FOLLOWERS FOLLOWING</h2>

                                <p>{ profileInfo.bio }</p>

                                {
                                    profileInfo.socials && (
                                        <div className="social">
                                            <span>Find me on</span>
                                            <div className="links">

{/* on hover show username? valdiate links */}
                                                {Object.keys(profileInfo.socials).map(link => (
                                                    profileInfo.socials[link] && (
                                                        <a key={link} className="icon" href={profileInfo.socials[link]} target="_blank">
                                                            {socialIcons[link]}
                                                        </a>
                                                    )
                                                ))}
                                            </div>  
                                        </div>
                                    )
                                }



                            </div>

                            <div className="other-info">

                                <div className="profile-nav">
                                    <ul>
                                        <li onClick={() => handleTabChange('watchlist')} className={activeTab === 'watchlist' ? 'active' : ''}>Watchlist</li>
                                        <li onClick={() => handleTabChange('blogs')} className={activeTab === 'blogs' ? 'active' : ''}>Blogs</li>
                                        <li onClick={() => handleTabChange('polls')} className={activeTab === 'polls' ? 'active' : ''}>Polls</li>
                                        <li onClick={() => handleTabChange('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</li>
                                    </ul>
                                    <div className="content">
                                        {/* {activeTab === 'blogs' && <BlogsComponent />}
                                        {activeTab === 'polls' && <PollsComponent />}
                                        {activeTab === 'reviews' && <ReviewsComponent />} */}
                                    </div>
                                </div>

                                <div className="statistics">

                                </div>
                            </div>
                    </>
                )
            }


        </main>

        {/* show more and antoher page on lcick */}



    </>
  )
}
