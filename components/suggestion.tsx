import { useEffect, useState } from 'react'
import { Game } from '@/data/history'

const Suggestion = ({ games } : { games: Game[] }) => {
  const [suggestion, setSuggestion] = useState('')

  useEffect(() => {
    const fetchSuggestion = async () => {
      const response = await fetch('/api/suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ games }),
      })

      if (!response.ok) {
        console.error('Failed to fetch suggestion')
        return
      }

      const data = await response.json()
      console.log(data)
      setSuggestion(data.result.text)
    }

    fetchSuggestion()
  }, [games])

  return (
    <div className="suggestion">
      <h2>Suggested games to play next:</h2>
      <pre>{suggestion}</pre>
    </div>
  )
}

export default Suggestion
