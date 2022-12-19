import { composeStories } from '@storybook/testing-react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as stories from './CategorySlider.stories' // import all stories from the stories file
import { categorySearchResultMock } from '@/__mocks__/stories/categorySearchResults'

const { Common } = composeStories(stories)

const ProductCardMock = () => <div data-testid="product-card-mock" />
jest.mock('../../product/ProductCard/ProductCard', () => () => ProductCardMock())

describe('[component] CategorySlider component', () => {
  it('should render the product cards', async () => {
    render(<Common {...Common.args} />)
    await waitFor(() => {
      const productCard = screen.getAllByTestId('product-card-mock')
      expect(productCard.length).toBe(categorySearchResultMock?.items?.length)
    })
  })
})
