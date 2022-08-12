import { render, fireEvent, screen } from "@testing-library/react"
import { AddValue } from "../../src/components/AddValue"

describe('AddValue tests', () => {
  const inputValue = '  Saitama  '
  const onNewValue = jest.fn()

  it('have to change the value in the textBox', () => {
    const { getByRole } = render(<AddValue onNewValue={onNewValue} placeholder="Write category" />)

    const input = getByRole('textbox')

    fireEvent.input(input, { target: { value: inputValue } })

    expect(input.value).toBe(inputValue)
  })

  it('do not submit the value when its lenght is less than 2', () => {
    const { getByRole } = render(<AddValue onNewValue={onNewValue} placeholder="Write category" />)

    const input = getByRole('textbox')

    fireEvent.input(input, { target: { value: 'a' } })
    fireEvent.keyUp(input, { key: 'Enter' })

    expect(input.value).toBe('a')
    expect(onNewValue).toHaveBeenCalledTimes(0)
  })

  it('submits the value when enter key is pressed', () => {
    const { getByRole } = render(<AddValue onNewValue={onNewValue} placeholder="Write category" />)

    const input = getByRole('textbox')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.keyUp(input, { key: 'Enter' })

    expect(input.value).toBe('')
    expect(onNewValue).toHaveBeenCalled()
    expect(onNewValue).toHaveBeenCalledWith(inputValue.trim())
  })
})
