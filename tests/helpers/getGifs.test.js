import { getGifs } from '../../src/helpers/getGifs'

describe('getGifs helper tests', () => {
  it('must return an array with gifs', async () => {
    const gifs = await getGifs('One Punch')

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })

    expect(gifs[0].url.startsWith('https://')).toBeTruthy()
  })
})
