import React, {useState} from 'react'
import { RiBookmarkLine, RiEditLine } from '@remixicon/react';

export default function Recommend() {

    const [fetchedData, setFetchedData] = useState(false);

    function setData(data) {

        // if (data)
        console.log(data.genres)
        setFetchedData(data);
    }

    async function fetchData(url) {
        // disable btn on click
        const res = await fetch(url);
        const data = await res.json();
        let finalData = data.data;

        if (finalData.genres && finalData.genres.length > 0) {
            for (let i = 0; i < Math.min(3, finalData.genres.length); i++) {
                if (finalData.genres[i].name === "Hentai") {
                    return fetchData(url);
                }
            }
        }

        console.log(finalData)
        setFetchedData(finalData);
    }


  return (
    <>
        <main className="recommend">
            <h1>Don't know what to watch/read?</h1>
            <h3>Challenge yourself</h3>

            {/* accoet tgen added */}

            <div className="btns">
                <button onClick={() => fetchData("https://api.jikan.moe/v4/random/anime")}>Random Anime</button>
                <button onClick={() => fetchData("https://api.jikan.moe/v4/random/manga")}>Random Manga</button>
            </div>

            <span>or <a href="/calculate">calculate</a> your next animanga based on your preferences</span>
            <div className="card">

                {fetchedData && (
                    <>
                        <img src={fetchedData.images.jpg.image_url} alt={fetchedData.title} />

                        <div className="info-div">
                            <h1>{fetchedData.title}</h1>
                            <h2>{fetchedData.genres.slice(0, 3).map(genre => (
                                `${genre.name} `
                            ))}</h2>
                        </div>
                    </>
                )}
            </div>
            <a href={`/${fetchedData.type}/${fetchedData.mal_id}`} target="_blank">See More</a>
            
        </main>
    </>
  )
}
