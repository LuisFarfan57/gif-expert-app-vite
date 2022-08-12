import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import { Loading } from './Loading'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      <Loading isLoading={isLoading} />

      <div className='card-grid'>
        {images.map((image) => <GifItem key={image.id} {...image} />)}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
