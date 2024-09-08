'use client'

import Image from 'next/image'
import { Clock } from 'lucide-react'
import { gameList, meetings } from '@/data/history'


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
          {meetings.slice().reverse().map((meeting, index) => (
            <li key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">{new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                  <p className="text-lg font-medium text-blue-600">{meeting.title}</p>
                </div>
                {meeting.location && <p className="text-gray-600 mb-4">{meeting.location}</p>}
                <div className="flex flex-wrap gap-4 mb-4">
                  {meeting.games.map((gameKey, gameIndex) => {
                    const game = gameList[gameKey];
                    return (
                      <div key={gameIndex} className="flex items-start space-x-4">
                        {game.coverArt ? (
                          <Image
                            src={game.coverArt}
                            alt={game.name}
                            width={150}
                            height={150}
                            className="rounded-lg"
                          />
                        ) : game.steamAppId ? (
                          <a href={`https://store.steampowered.com/app/${game.steamAppId}/`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <Image
                              src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.steamAppId}/library_600x900.jpg`}
                              alt={game.name}
                              width={150}
                              height={150}
                              className="rounded-lg hover:opacity-80 transition-opacity"
                            />
                          </a>
                        ) : (
                          <Image
                            src="/missing.svg"
                            alt="Missing cover art"
                            width={150}
                            height={150}
                            className="rounded-lg"
                          />
                        )}
                        <div>
                          <h3 className="text-xl font-semibold">
                            <a href={`https://store.steampowered.com/app/${game.steamAppId}/`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                              {game.name}
                            </a>
                          </h3>
                          <p className="text-gray-600 mb-2">{game.description || ""}</p>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{game.playtime || 0}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <p className="text-gray-700">{meeting.description || ""}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
   </div>
  )
}