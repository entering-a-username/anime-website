import React, { useState } from 'react'

export default function Header() {
    const headerObj = {
        1: {
            id: 1,
            img: "../../public/img",
            content: "Trending anime name"
        },
        2: {
            id: 2,
            img: "../../public/img",
            content: "recent release"
        },
        3: {
            id: 3,
            img: "../../public/img",
            content: "new feature!!! check it out"
        }
    }

    const [selectedHeader, setSelectHeader] = useState(headerObj[1]);

    const handleHeaderChange = (index) => {
        setSelectHeader(headerObj[index]);
    }

  return (
    <>
        <header>

            <div className="header-info">
                <img src={selectedHeader.src} alt="" />
                <p>{selectedHeader.content}</p>

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
