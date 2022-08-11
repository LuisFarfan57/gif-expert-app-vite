export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xnF9JPu4j832TecwP2PKFWLNuY9GNhRB&q=${category}&limit=10`
  const response = await fetch(url)

  const { data = [] } = await response.json()

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url
  }))

  return gifs
}
