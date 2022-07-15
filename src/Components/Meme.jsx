import React from 'react'
import { useState } from 'react';
import memeData from '../memeData';

export default function Meme() {

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    
    const getRandomMeme = (e) => {
        e.preventDefault();
        const meme = shuffle(memeData.data.memes)[0];
        return meme.url
    }

  return (
    <main>
      <form className="form">
          <input 
              type="text"
              placeholder="Top text"
              className="form--input"
          />
          <input 
              type="text"
              placeholder="Bottom text"
              className="form--input"
          />
          <button 
              className="form--button"
              onClick={getRandomMeme}
          >
              Get a new meme image 🖼
          </button>
      </form>
  </main>
  )
}
