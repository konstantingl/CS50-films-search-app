export const fetchFilms = async (s, callback) => {
  let request = 'http://www.omdbapi.com/?apikey=e3b724fa&s=' + s
  const response = await fetch(request)
  const results = await response.json()
  return results
}
