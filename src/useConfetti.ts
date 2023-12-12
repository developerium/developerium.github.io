import party from 'party-js'
import { useCallback } from 'react'

interface UseConfettiProps {
  targetId: string
}

export const useConfetti = ({ targetId }: UseConfettiProps) => {
  const throwConfetti = useCallback(() => {
    const source = document.getElementById(targetId)
    if (source) {
      party.confetti(source, {
        count: party.variation.range(50, 100),
      })
    } else {
      console.log('Target source for confetti not found!')
    }
  }, [])

  return {
    throwConfetti,
  }
}
