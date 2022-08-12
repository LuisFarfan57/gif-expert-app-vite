import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('GifExpertApp tests', () => {
  it('renders correctly', () => {
    const { container } = render(<GifExpertApp />)

    expect(container).toMatchSnapshot()
  })

  const category1 = '  One Punch Man  '
  const category2 = '  Boku no hero  '
  const categoryRepeated = 'BoKu NO HERO'

  it('adds new categories in the h3 headings when we enter new categories', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: category1 } })
    fireEvent.keyUp(input, { key: 'Enter' })
    fireEvent.input(input, { target: { value: category2 } })
    fireEvent.keyUp(input, { key: 'Enter' })

    // And also is trimmed
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(2)
    expect(headings[0].innerHTML).toBe(category2.trim())
  })

  it('do not adds the new category if it is repeated', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: category1 } })
    fireEvent.keyUp(input, { key: 'Enter' })
    fireEvent.input(input, { target: { value: category2 } })
    fireEvent.keyUp(input, { key: 'Enter' })
    fireEvent.input(input, { target: { value: categoryRepeated } })
    fireEvent.keyUp(input, { key: 'Enter' })

    // And checks that even if it is in different case, doesn't add the category
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)
  })
})
