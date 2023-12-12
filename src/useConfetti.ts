import party from 'party-js'
import { useCallback, useState } from 'react'

interface UseConfettiProps {
  targetId: string
}

export const useConfetti = ({ targetId }: UseConfettiProps) => {
  const [variant, setVariant] = useState(false)

  const throwConfetti = useCallback(() => {
    const source = document.getElementById(targetId)
    if (!source) {
      console.log('Target source for confetti not found!')
      return
    }

    if (variant) {
      party.confetti(source, {
        count: party.variation.range(0, 100),
        size: party.variation.range(0.6, 1.4),
      })
    } else {
      party.sparkles(source, {
        count: party.variation.range(10, 60),
        speed: party.variation.range(50, 300),
      })
    }

    setVariant(!variant)
  }, [variant, setVariant])

  return {
    throwConfetti,
  }
}
