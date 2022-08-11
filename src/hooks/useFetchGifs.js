import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchGifs = async () => {
    const images = await getGifs(category)
    setImages(images)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchGifs()
  }, [])

  return {
    images,
    isLoading
  }
}
