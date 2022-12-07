import { renderHook } from '@testing-library/react-hooks'

import { useCategorySearchQueries } from './useCategorySearchQueries'
import { categorySearchResultMock } from '@/__mocks__/stories/categorySearchResults'
import { createQueryClientWrapper } from '@/__test__/utils/renderWithQueryClient'

describe('[hooks] useCategorySearchQueries', () => {
  it('should return category search result based on categoryCodes', async () => {
    const categoryCodes = ['SleepingFoundation', 'BackPack']
    const { result, waitFor } = renderHook(() => useCategorySearchQueries(categoryCodes), {
      wrapper: createQueryClientWrapper(),
    })

    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toStrictEqual(categorySearchResultMock)
  })
})
