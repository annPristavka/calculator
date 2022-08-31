const font = "'Pathway Gothic One', sans-serif"

// Color palette
const black = '#000000'
const white = '#ffffff'
const grey = '#DCDCDC'
const darkGrey = '#696969'
const dark = '#2b2b2b'
const snow = '#FFFAFA'
const gradientWhite = `linear-gradient(
  90deg,
  rgba(242, 242, 245, 1) 0%,
  rgba(212, 212, 224, 0.29175420168067223) 51%,
  rgba(232, 249, 252, 1) 100%
)`

const length = [
  500, 1000, 1200, 520, 14, 96, 300, 20, 400, 60, 16, 80,
  170, 560, 150, 32,
]

export default {
  font,
  length,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 40, 56, 72, 80, 17, 18,
  ],
  borderRadius: [5],
  fontWeight: [500, 400],
  padding: [20, 10, 25, 30],
  letterSpacing: [0.3],
  opacity: [1, 0.5],
  gap: [10],
  border: [1, 2, 3],
  margin: [10],
  colors: {
    black,
    white,
    gradientWhite,
    grey,
    darkGrey,
    dark,
    snow,
  },
}
