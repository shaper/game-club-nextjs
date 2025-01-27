import { GameClub } from "@/components/game-club"
import { FloatingHeader } from "@/components/floating-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingHeader />
      <main className="container py-6 md:py-12">
        <GameClub />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex h-14 items-center justify-center text-sm">
          It&apos;s dangerous to go alone. Take this!
        </div>
      </footer>
    </div>
  )
}
