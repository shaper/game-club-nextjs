import type { NextApiRequest, NextApiResponse } from 'next'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { Game } from '@/data/history'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { games } = req.body
  const prompt =
    `Here is a list of games: ${games.map((game: Game) => game.name).join(', ')}.` +
    ` Suggest 5 games to play next based on new games released in the last two ` +
    `months. Don't include any games already in the provided list. List games as ` +
    `simple titles prefixed with '- '. Don't include any other prose.`
  const result = await generateText({
    model: openai('gpt-4o'),
    prompt: prompt,
  })
  res.status(200).json({ result })
}

export default handler
