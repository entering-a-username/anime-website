import React, {useState, useEffect} from 'react'
import { RiBookmarkLine, RiEditLine } from '@remixicon/react';

export default function _Browse() {
    const [animeData, setAnimeData] = useState([]);
    const [mangaData, setMangaData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Anime");

    useEffect(() => {
        async function fetchData() {
            try {
                const resAnime = await fetch('https://api.jikan.moe/v4/top/anime');
                const resManga = await fetch('https://api.jikan.moe/v4/top/manga');
                const dataAnime = await resAnime.json();
                const dataManga = await resManga.json();

                // why await?
                await setAnimeData(dataAnime.data);
                await setMangaData(dataManga.data);


            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
        
    }, []);

    const handleCategoryChange = category => setSelectedCategory(category);

  return (
    <>
        <div className='main-page-browse'>
            <div className="categories">
                <h1>Trending {selectedCategory} </h1>
                <ul>
                    <li onClick={() => handleCategoryChange('Anime')} className={selectedCategory === 'Anime' ? 'hidden active' : ''}>Anime</li>
                    <li onClick={() => handleCategoryChange('Manga')} className={selectedCategory === 'Manga' ? 'hidden active' : ''}>Manga</li>
                </ul>
            </div>

            <section className="main-cards" id="mainCards">
                {
                    // make this cleaner
                    
                    selectedCategory === "Anime" ? 
                        animeData.slice(0, 15).map((item, index) => (
                            <a key={index} href={`/anime/${item.mal_id}`} target="_blank">
                                <div className="card" key={item.mal_id}>
                                    <img src={item.images.jpg.image_url} alt={item.title} />
                            
                                    <div className="info-div">
                                        <h1>{item.title}</h1>
                                        <h2>{item.genres.slice(0, 3).map(genre => (
                                            `${genre.name} `
                                        ))}</h2>
                                    </div>
                                    
                                    <div className="hover-card">
                                        <h1>{item.title}</h1>
                                        <span>{Math.round(item.score)} ★ ({Math.round(item.scored_by / 10)})</span>
                                        <p>{item.synopsis?.substring(0, 160)}...</p>
                                        <div className="functional-div">
                                            <RiBookmarkLine size={18} color="" />
                                            <RiEditLine size={18} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )) : mangaData.slice(0, 15).map((item, index) => (
                            <a key={index} href={`/manga/${item.mal_id}`} target='_blank'>
                                <div className="card" key={item.mal_id}>
                                    <img src={item.images.jpg.image_url} alt={item.title} />
                            
                                    <div className="info-div">
                                        <h1>{item.title}</h1>
                                        <h2>{item.genres.slice(0, 3).map(genre => (
                                            `${genre.name} `
                                        ))}</h2>
                                    </div>
                                    
                                    
                                    <div className="hover-card">
                                        <h1>{item.title}</h1>
                                        <span>{Math.round(item.score)} ★ ({Math.round(item.scored_by / 10)})</span>
                                        <p>{item.synopsis?.substring(0, 160)}...</p>
                                        <div className="functional-div">
                                            <RiBookmarkLine size={18} color="" />
                                            <RiEditLine size={18} />
                                        </div>
                                    </div>
                                </div>

                            </a>
                        ))
                }
            </section>
        </div>
    </>
  )
}
