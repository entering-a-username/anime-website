import React, { useState } from 'react'
import { RiMessageLine, RiLink, RiUserAddLine } from '@remixicon/react'

export default function Profile() {

    const [activeTab, setActiveTab] = useState("blogs");

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    // ADD PROFILE TO SIDEBAR LOGIN SIGNIP
    // general template layout, with own will have logic
  return (


    // CARD COMPONENT FOR DISPLAY??
    <>

        <main className="profile">

            <div className="user-info">

                <a href="/edit-profile">Edit Profile</a>
                
                <div className="img-div">
                    <img src="" alt="" />
                </div>

                <h1>USERNAME <span>FLAG</span> </h1>
                <h3>JOINED DATE</h3>
                <h2>last online</h2>
                

                <div className="interact-btns">
                    <button><RiMessageLine size={25}></RiMessageLine></button>
                    <button><RiUserAddLine size={25}></RiUserAddLine></button>

                </div>

{/* unfollow lfollow systme */}
                <h2>FOLLOWERS FOLLOWING</h2>

                <p>BIOGRAPHY IF EXISTS</p>
                {/* link add system */}

                <div className="social">
                    <span>Find me on</span>
                    <div className="links">

                    </div>
                </div>


            
            </div>

            <div className="profile-nav">
                <ul>
                    <li onClick={() => handleTabChange('blogs')} className={activeTab === 'blogs' ? 'active' : ''}>Blogs</li>
                    <li onClick={() => handleTabChange('polls')} className={activeTab === 'polls' ? 'active' : ''}>Polls</li>
                    <li onClick={() => handleTabChange('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</li>

                </ul>

                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quibusdam minus, sit inventore sed impedit maxime ducimus rerum nulla quam sequi eaque aspernatur ipsum quisquam. Dignissimos fugit ab inventore! Ipsum consectetur quaerat vel quia reprehenderit distinctio a iure nulla ab minus exercitationem illum earum magni optio, pariatur non ipsam ipsa eius reiciendis, animi quam? Earum eaque et velit obcaecati optio rerum eligendi libero! Sit alias aut consectetur quae voluptates magnam vero odio ipsam exercitationem doloremque inventore dolor delectus consequuntur ducimus magni, facilis eveniet nesciunt dolorem eligendi quis aperiam. Ullam esse deserunt quae? Odio, accusamus laborum nemo nihil veniam exercitationem fugit.
                    {/* {activeTab === 'blogs' && <BlogsComponent />}
                    {activeTab === 'polls' && <PollsComponent />}
                    {activeTab === 'reviews' && <ReviewsComponent />} */}
                </div>
            </div>
        </main>

        {/* show more and antoher page on lcick */}



    </>
  )
}
