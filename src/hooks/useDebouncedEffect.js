import { useEffect } from "react"

/**
 * Debounce effect
 * @param {Function} effect effect funciton
 * @param {Array} deps Dependencies
 * @param {Number} delay delay time
 */
const useDebouncedEffect = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay)

    return () => clearTimeout(handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay])
}

export default useDebouncedEffect
