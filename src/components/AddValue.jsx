import { useState } from 'react'

export const AddValue = ({ onNewValue, placeholder }) => {
  const [newValue, setNewValue] = useState('')

  const handleChange = ({ target }) => {
    setNewValue(target.value)
  }

  const handleKeyPress = ({ key }) => {
    const cleanValue = newValue.trim()
    if (key === 'Enter' && cleanValue.length > 1) {
      onNewValue(cleanValue)
      setNewValue('')
    }
  }

  return (
    <input
      type="text"
      name='newValueInput'
      placeholder={placeholder}
      onChange={handleChange}
      value={newValue}
      onKeyUp={handleKeyPress}
    />
  )
}
