import { fetcher } from '@/lib/api/util'
import type { NextApiRequest, NextApiResponse } from 'next'
import { searchProductsQuery } from '@/lib/gql/queries/product-search'

function getFacetValueFilter(categoryCode: any, filters = []) {
  let facetValueFilter = ''
  if (categoryCode) {
    facetValueFilter = `categoryCode:${categoryCode},`
  }
  return facetValueFilter + filters.join(',')
}

const buildProductSearchVars = ({
  categoryCode = null,
  pageSize = 30,
  filters = {},
  startIndex = 0,
  sort = '',
  search = '',
}: {
  categoryCode: null
  pageSize: number
  filters: any
  startIndex: number
  sort: string
  search: string
}): any => {
  let facetTemplate = ''
  let filter = ''
  if (categoryCode) {
    facetTemplate = `categoryCode:${categoryCode}`
    filter = `categoryCode req ${categoryCode}`
  }
  const facetFilterList = Object.keys(filters)
    .filter((k) => filters[k].length)
    .reduce((accum, k) => {
      return [...accum, ...filters[k].map((facetValue) => `Tenant~${k}:${facetValue}`)]
    }, [])

  const facetValueFilter = getFacetValueFilter(categoryCode, facetFilterList)
  return {
    query: search,
    startIndex,
    pageSize,
    sortBy: sort,
    filter: filter,
    facetTemplate,
    facetValueFilter,
  }
}

export default async function search(searchParams: any) {
  try {
    const variables = buildProductSearchVars(searchParams)
    console.log(variables)
    return await fetcher({ query: searchProductsQuery, variables })
  } catch (error) {
    console.error(error)
  }
}
