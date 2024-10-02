const express = require('express');
const Jikan = require('jikan4.js');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const client = new Jikan.Client();

async function searchManga(searchStr) {
    const result = (await client.manga.search(searchStr)).map((manga) => {
        return {
            type: "manga",
            id: manga.id,
            title: manga.title.default,
            year: manga.year,
            url: manga.url,
            img: manga.image.jpg.default,
            score: manga.score,
            scoredBy: manga.scoredBy,
            rank: manga.rank,
            popularity: manga.popularity,
            synopsis: manga.synopsis,
            episodes: manga.episodes,
            genres: manga.genres,
            // status: manga.airInfo.status,
        }
    })

    return result;
}

async function searchAnime(searchStr) {
    const result = (await client.anime.search(searchStr)).map((anime) => {
        return {
            type: "anime",
            id: anime.id,
            title: anime.title.default,
            year: anime.year,
            url: anime.url,
            img: anime.image.jpg.default,
            score: anime.score,
            scoredBy: anime.scoredBy,
            rank: anime.rank,
            popularity: anime.popularity,
            synopsis: anime.synopsis,
            episodes: anime.episodes,
            genres: anime.genres,
            // status: anime.airInfo.status,
        }
    })

    return result;
}

module.exports.search = async (req, res) => {
    console.log(req.body.animanga)
    // get rid of hentai
    try {
        const animeResult = await searchAnime(req.body.animanga);
        const mangaResult = await searchManga(req.body.animanga);
        const sumArr = [];

        for (let i = 0; i < 25; i++) {
            if (animeResult[i] != null) {
                sumArr.push(animeResult[i]);
            }
            if (mangaResult[i] != null) {
                sumArr.push(mangaResult[i]);
            }
            
        }

        res.json(sumArr);

    } catch (err) {
        console.error(err);
    }
}