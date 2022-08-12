import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs custom hook tests', () => {
  it('must return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'))
    const { isLoading, images } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  it('must return an array with images and isLoading as false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )
    const { isLoading, images } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
