import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem tests', () => {
  const props = {
    title: 'Title',
    url: 'https://www.hola.com/'
  }

  it('renders correctly', () => {
    const { container } = render(<GifItem {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('shows the image and ALT correctly', () => {
    const { getByRole } = render(<GifItem {...props} />)

    const { src, alt } = getByRole('img')
    expect(src).toBe(props.url)
    expect(alt).toBe(props.title)
  })

  it('shows title as text', () => {
    const { getByText } = render(<GifItem {...props} />)

    expect(getByText(props.title)).toBeTruthy()
  })
})
