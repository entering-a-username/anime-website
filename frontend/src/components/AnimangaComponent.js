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

                console.log(data.details)

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
                                    <h2>Studio {fetchedData.studios[0].name}</h2>
                                    <h3>serialization</h3>
                                    {/* authrs? */}
                                    <button>add to list stuff</button>
                                </div>

                                <h3>Also known as:</h3>
                                <div className="horiz">
                                    <ul className="alt-titles">
                                        {
                                            fetchedData.titles.map((title, index) => (
                                                <li key={index}>{title.type}: {title.title}</li>
                                            ))
                                        }
                                    </ul>
                                    {/* maybe share btns */}
                                    <div className="information">
                                        <ul>
                                            <li>Type: {type.toUpperCase()}</li>
                                            <li>{type === "anime" ? `seasons: ${fetchedData.seasons}` : `volumes: ${fetchedData.volumes}`}</li>
                                            <li>{type === "anime" ? `episodes: ${fetchedData.episodes}` : `chapters: ${fetchedData.chapters}`}</li>
                                            <li>Status: {fetchedData.airInfo.status}</li>
                                            <li>Published: {fetchedData.year}</li>
                                            {/* clicable */}
                                            <li className="genres">Genres:
                                                {fetchedData.genres.slice(0,4).map(genre => (
                                                    <span>{genre.name}</span>
                                                ))}</li>
                                            <li>Demographic: 
                                                {fetchedData.demographics.slice(0,3).map(demo => (
                                                    <span>{demo.name}</span>
                                                ))}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="extra">
                                <div className="extra-title">
                                    <h1>TITLE</h1>
                                    <h2>Auhrs</h2>
                                    <h3>serialization</h3>
                                </div>
                                <ul className="stats">
                                    <div className="score">
                                        <span className="score-span">Score</span>
                                        <span>8.05</span>
                                        <span>3,6950 users</span>
                                    </div>
                                    <li>Ranked</li>
                                    <li>Popularity</li>
                                    <li>Members</li>
                                </ul>
                                <div className="text">
                                    <h1>Synopsis</h1>
                                    <hr />
                                    <p>syno</p>
                                    <h1>Background</h1>
                                    <hr />
                                    <p>backg </p>
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
