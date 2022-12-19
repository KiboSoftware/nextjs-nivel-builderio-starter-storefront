import getConfig from 'next/config'

import type { CategoryPagedCollectionParams } from '../types'
import type { QueryCategoriesArgs } from '@/lib/gql/types'

const { publicRuntimeConfig } = getConfig()

export const buildCategorySearchParams = ({
  pageSize = publicRuntimeConfig?.productListing?.pageSize,
  startIndex = 0,
  filter = '',
}: CategoryPagedCollectionParams): QueryCategoriesArgs => {
  return {
    startIndex,
    pageSize: Number(pageSize),
    filter,
  }
}
