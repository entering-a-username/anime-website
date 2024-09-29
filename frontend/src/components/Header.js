import React, { useState } from 'react'

export default function Header() {
    const headerObj = {
        1: {
            id: 1,
            img: "/img/header/luffyy.png",
            color: "white",
            h1: "Rate the animes you love or hate and join the discussions with our community.",
            btn: "Join Us",
            path: "/signup",
            
        },
        2: {
            id: 2,
            img: "/img/header/mado.webp",
            color: "pink",
            h1: "Discover new anime and manga with one click or test your fate",
            btn: "Recommend",
            path: "/recommend",
        },
        3: {
            id: 3,
            img: "/img/header/jojo2.png",
            color: "rgba(159, 141, 39, .6)",
            h1: "Don't miss upcoming released with our calendar",
            btn: "Join Us",
            path: "/signup",
        }
    }

    const [selectedHeader, setSelectHeader] = useState(headerObj[1]);
    const [activeDot, setActiveDot] = useState(null);

    const handleHeaderChange = (index) => {
        setSelectHeader(headerObj[index]);
        setActiveDot(index);
    }

  return (
    <>
        <header style={{backgroundColor: selectedHeader.color}}>

            <div className="header-info">
                <img src={selectedHeader.img} alt="" />
                <div>
                    <h1>{selectedHeader.h1}</h1>
                    <button><a href={selectedHeader.path}>{selectedHeader.btn}</a></button>
                </div>


            </div>

            <div className="dots">
                {
                    Object.keys(headerObj).map(key => (

                        <div key={key}
                        className="dot"
                        data-index={key}
                        style={{
                            backgroundColor: activeDot === key ? "red" : "green",
                        }}
                        onClick={() => handleHeaderChange(key)}>
                        </div>
                    ))
                }
            </div>

        </header>
    </>
  )
}
