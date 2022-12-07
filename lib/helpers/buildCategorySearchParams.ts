import type { CategoryPagedCollectionParams } from '../types'
import type { QueryCategoriesArgs } from '@/lib/gql/types'

export const buildCategorySearchParams = ({
  pageSize = 16,
  startIndex = 0,
  filter = '',
}: CategoryPagedCollectionParams): QueryCategoriesArgs => {
  return {
    startIndex,
    pageSize: Number(pageSize),
    filter,
  }
}
