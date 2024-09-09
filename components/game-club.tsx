'use client'

import Image from 'next/image'
import { Clock } from 'lucide-react'
import { Game, gameList, meetings } from '@/data/history'
import styles from './game-club.module.css'
import Suggestion from './suggestion';


function renderGameImage(game: Game) {
  let imageSrc;
  if (game.coverArt) {
    imageSrc = game.coverArt;
  } else if (game.steamAppId) {
    imageSrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steamAppId}/library_600x900.jpg`;
  } else {
    imageSrc = '/assets/missing.svg';
  }

  const imageElement = (
    <Image
      src={imageSrc}
      alt={game.name}
      width={200}
      height={300}
      className={`${styles.gameImage} rounded-lg`}
    />
  );

  if (game.url) {
    return (
      <a href={game.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
        {imageElement}
      </a>
    );
  }

  if (game.steamAppId) {
    return (
      <a href={`https://store.steampowered.com/app/${game.steamAppId}/`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
        {imageElement}
      </a>
    );
  }

  return imageElement;
}


export function GameClub() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Video Game Club Meeting History</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <ul className="space-y-8">
          <Suggestion games={Object.values(gameList)} />
          {meetings.slice().reverse().map((meeting, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-blue-600">{new Date(meeting.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                  <p className="text-lg font-medium text-blue-600">{meeting.title}</p>
                </div>
                {meeting.location && <p className="text-gray-600 mb-4">{meeting.location}</p>}
                <div className="flex flex-wrap gap-4 mb-4">
                  {meeting.games.map((gameKey, gameIndex) => {
                    const game = gameList[gameKey];
                    return (
                      <div key={gameIndex} className="flex flex-col items-start space-y-4">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-semibold text-blue-400">
                            <a href={game.steamAppId ? `https://store.steampowered.com/app/${game.steamAppId}/` : game.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                              {game.name}
                            </a> &middot;
                          </h3>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{game.playtime || 0}</span>
                          </div>
                        </div>
                        <div>
                          {renderGameImage(game)}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
   </div>
  )
}