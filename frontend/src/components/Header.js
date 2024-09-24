import React, { useState } from 'react'

export default function Header() {
    const headerObj = {
        1: {
            id: 1,
            img: "/img/header/header-1.png",
            h1: "Rate the animes you love or hate and join the discussions with our community.",
            btn: "Join Us",
            
        },
        2: {
            id: 2,
            img: "/img/header/header-1.png",
            h1: "Discover new anime and manga with one click or test your fate",
            btn: "Recommend",
        },
        3: {
            id: 3,
            img: "/img/header/header-1.png",
            h1: "Don't miss upcoming released with our calendar",
            btn: "Join Us",
        }
    }

    const [selectedHeader, setSelectHeader] = useState(headerObj[1]);

    const handleHeaderChange = (index) => {
        setSelectHeader(headerObj[index]);
    }

  return (
    <>
        <header>
{/* change with transition */}
            <div className="header-info">
                {/* <img src={selectedHeader.img} alt="" /> */}
                <h1>{selectedHeader.h1}</h1>
                <button>{selectedHeader.btn}</button>


            </div>

            <div className="dots">
                {Object.keys(headerObj).map(key => (
                    <div key={key}
                    className="dot"
                    data-index={key}
                    onClick={() => handleHeaderChange(key)}>
                    </div>
                ))

                }
            </div>

        </header>
    </>
  )
}
