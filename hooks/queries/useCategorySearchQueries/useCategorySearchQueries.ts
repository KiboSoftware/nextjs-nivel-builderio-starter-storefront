import { useQuery } from 'react-query'

import { makeGraphQLClient } from '@/lib/gql/client'
import { categorySearchQuery } from '@/lib/gql/queries'
import { buildCategorySearchParams } from '@/lib/helpers'
import { categorySearchResultKeys } from '@/lib/react-query/queryKeys'
import type { CategoryPagedCollectionParams } from '@/lib/types'

import type { CategoryPagedCollection } from '@/lib/gql/types'

export interface CategorySearchResponse {
  data: CategoryPagedCollection
  isLoading: boolean
  isSuccess: boolean
  isFetching: boolean
}

const fetchCategorySearch = async (searchParams: CategoryPagedCollectionParams) => {
  const categorySearchInput = buildCategorySearchParams(searchParams)
  const client = makeGraphQLClient()
  const response = await client.request({
    document: categorySearchQuery,
    variables: categorySearchInput,
  })

  return response.searchResult
}

export const useCategorySearchQueries = (categoryCodes: Array<string>): CategorySearchResponse => {
  const categroyCodeFilter: Array<string> = []
  categoryCodes?.forEach((code) => {
    categroyCodeFilter.push(`categoryCode eq ${code}`)
  })
  const searchParams = buildCategorySearchParams({
    filter: categroyCodeFilter.join(' or '),
    pageSize: categoryCodes?.length,
  }) as CategoryPagedCollectionParams
  const { data, isLoading, isSuccess, isFetching } = useQuery(
    categorySearchResultKeys.searchParams(searchParams),
    () => fetchCategorySearch(searchParams),
    {
      enabled: !!searchParams.filter,
    }
  )

  return { data, isLoading, isSuccess, isFetching }
}
