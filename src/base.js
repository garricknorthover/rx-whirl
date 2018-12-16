export const TICK = 135
export const LENGTH = 75

export function gaussian (i) {
  const variance = 0.6
  const shift = 2
  const x = (shift * 2 * i) / (LENGTH - 1) - shift
  return (
    Math.exp(-Math.pow(x, 2) / (2 * variance)) /
    Math.sqrt(2 * Math.PI * variance)
  )
}
