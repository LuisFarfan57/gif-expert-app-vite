import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('GifGrid tests', () => {
  const category = 'One Punch Man'

  it('shows the loading test at start', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  it('shows the loading test at start', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'abc',
        url: 'https://hola.com/abc.jpg'
      },
      {
        id: 'abcd',
        title: 'abcd',
        url: 'https://hola.com/abcd.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    const images = screen.getAllByRole('img')

    expect(images.length).toBe(2)
    expect(images[0].alt).toBe(gifs[0].title)
    expect(images[0].src).toBe(gifs[0].url)
  })
})
