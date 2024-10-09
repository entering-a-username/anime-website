import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

export default function AnimangaComponent() {
    const { type, id } = useParams();

    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3050/search/${type}/${id}`);
                const data = await res.json();

                console.log(data)

                if (!data.errors) {
                    setFetchedData(data.details);
                }

            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

  return (
    <>
        <main className="animanga-page">

            {
                fetchedData && (
                    <>
                        <section>
                            <div className="main-info-div">
                                <div className="card">

                                    <div className="img-div"><img src={fetchedData.image.jpg.default} alt="" /></div>
                                    <h1>{fetchedData.title.default}</h1>
                                    <h2>Studio {fetchedData.studios ? fetchedData.studios[0].name : null}</h2>
                                    <h3>serialization</h3>
                                   
                                    <button>add to list stuff</button>
                                </div>

                                <div className="horiz">
                                    <ul className="alt-titles">
                                        <h3>Also known as:</h3>
                                        {
                                            fetchedData.titles.map((title, index) => (
                                                <li key={index}>{title.type}: {title.title}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className="information">
                                        <ul>
                                            <li>Type: {type.toUpperCase()}</li>
                                            <li>{type === "anime" ? `seasons: ${fetchedData.seasons}` : `volumes: ${fetchedData.volumes}`}</li>
                                            <li>{type === "anime" ? `episodes: ${fetchedData.episodes}` : `chapters: ${fetchedData.chapters}`}</li>
                                            <li>Status: {fetchedData.airInfo ? fetchedData.airInfo.status : null}</li>
                                            <li>Published: {fetchedData.year}</li>
                                            
                                            <li className="genres">Genres:
                                                <div>
                                                {fetchedData.genres.slice(0,4).map((genre, index) => (
                                                    <span key={index}>{genre.name}</span>
                                                ))}</div></li>
                                            <li>Demographic:  
                                                {fetchedData.demographics.slice(0,3).map(demo => (
                                                    <span> {demo.name}</span>
                                                ))}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="extra">
                                <div>
                                    <div className="extra-title">
                                        <h1>TITLE</h1>
                                        <h2>Auhrs</h2>
                                        <h3>serialization</h3>
                                    </div>
                                    <ul className="stats">
                                        <div className="score">
                                            <span className="score-span">Score</span>
                                            <span className="score-num">{fetchedData.score}</span>
                                            <span className="users">{fetchedData.scoredBy ? fetchedData.scoredBy : "unknown"} users</span>
                                        </div>
                                        <li>Ranked: #{fetchedData.rank}</li>
                                        <li>Popularity: #{fetchedData.popularity}</li>
                                        <li>Members: {fetchedData.members}</li>
                                    </ul>
                                    <div className="text">
                                        <h1>Synopsis</h1>
                                        <hr />
                                        <p>{fetchedData.synopsis}</p>
                                        <h1>Background</h1>
                                        <hr />
                                        <p>{fetchedData.background} </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }

        </main>
    </>
  )
}
