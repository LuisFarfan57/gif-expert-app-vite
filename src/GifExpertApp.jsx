import { useState } from 'react'
import { AddValue, GifGrid } from './components'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const addCategory = (category) => {
    if (categories.map(category => category.toLowerCase()).includes(category.toLowerCase())) return
    setCategories([category, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* usar la palabra on cuando se esta emitiendo un evento */}
      <AddValue onNewValue={addCategory} placeholder="Write the new category" />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

export default GifExpertApp
