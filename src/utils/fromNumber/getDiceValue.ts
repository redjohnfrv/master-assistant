export const getDiceValue = (): number => {
  const max = 7
  const min = 1

  return Math.floor(Math.random() * (max - min) + min)
}