import { ModeToggle } from "@/components/mode-toggle"

export function FloatingHeader() {
  return (
    <header className="fixed top-0 right-0 m-4 z-50">
      <ModeToggle />
    </header>
  )
}
