"use client"

import Image from "next/image"
import { Clock } from "lucide-react"
import { type Game, gameList, meetings } from "@/data/history"
import { Badge } from "@/components/ui/badge"

function renderGameImage(game: Game, index: number) {
  let imageSrc
  if (game.coverArt) {
    imageSrc = game.coverArt
  } else if (game.steamAppId) {
    imageSrc = `https://steamcdn-a.akamaihd.net/steam/apps/${game.steamAppId}/library_600x900.jpg`
  } else {
    imageSrc = "/assets/missing.svg"
  }

  const imageElement = (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={game.name}
      width={200}
      height={300}
      className="rounded-lg transition-all hover:scale-105"
      priority={index < 3}
    />
  )

  if (game.url) {
    return (
      <a href={game.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
        {imageElement}
      </a>
    )
  }

  if (game.steamAppId) {
    return (
      <a
        href={`https://store.steampowered.com/app/${game.steamAppId}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0"
      >
        {imageElement}
      </a>
    )
  }

  return imageElement
}

export function GameClub() {
  return (
    <div className="divide-y divide-border px-4 sm:px-6 lg:px-8">
      {meetings
        .slice()
        .reverse()
        .map((meeting, meetingIndex) => (
          <div key={meetingIndex} className="py-8 first:pt-0 border-b border-border last:border-b-0">
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight">{meeting.title}</h2>
              <p className="text-sm text-muted-foreground">
                {new Date(meeting.date + "T00:00:00Z").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </p>
            </div>
            {meeting.location && (
              <Badge variant="secondary" className="mt-2">
                {meeting.location}
              </Badge>
            )}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-4 px-4 sm:px-6 lg:px-8">
              {meeting.games.map((gameKey, gameIndex) => {
                const game = gameList[gameKey]
                return (
                  <div key={gameIndex} className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold tracking-tight">
                        <a
                          href={game.steamAppId ? `https://store.steampowered.com/app/${game.steamAppId}/` : game.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {game.name}
                        </a>
                      </h3>
                      {game.playtime && (
                        <>
                          <span className="text-muted-foreground">&middot;</span>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{game.playtime}h</span>
                          </div>
                        </>
                      )}
                    </div>
                    {renderGameImage(game, meetingIndex)}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
    </div>
  )
}
