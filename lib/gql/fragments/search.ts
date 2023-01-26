import { productInfo } from './product'

export const searchFacets = /* GraphQL */ `
  fragment searchFacets on Facet {
    label
    facetType
    field
    values {
      label
      value
      filterValue
      isDisplayed
      count
      isApplied
      childrenFacetValues {
        label
        count
        value
        filterValue
        isDisplayed
        count
      }
    }
  }
`

export const searchResults = /* GraphQL */ `
  fragment searchResults on ProductSearchResult {
    totalCount
    pageSize
    pageCount
    startIndex
    items {
      ...productInfo
    }
    facets {
      ...searchFacets
    }
  }
  ${searchFacets}
  ${productInfo}
`
export const searchResultsLite = /* GraphQL */ `
  fragment searchResults on ProductSearchResult {
    totalCount
    pageSize
    pageCount
    startIndex
    items {
      productCode
      variationProductCode
      productUsage
      content {
        productName
        productImages {
          imageUrl
          imageLabel
          mediaType
          altText
        }
        price {
          price
          salePrice
        }
        priceRange {
          lower { price, salePrice}
          upper { price, salePrice }
        }
    }
    facets {
      ...searchFacets
    }
  }
  ${searchFacets}
  ${productInfo}
`
