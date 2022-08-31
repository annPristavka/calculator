export const localeStorageSetTheme = (theme) => {
  localStorage.setItem('theme', JSON.stringify(theme))
}

export const localeStorageGetTheme = () => {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'Light Theme'
}
