const categorySearchQuery = /* GraphQL */ `
  query getCategories($startIndex: Int, $pageSize: Int, $filter: String) {
    searchResult: categories(startIndex: $startIndex, pageSize: $pageSize, filter: $filter) {
      items {
        categoryCode
        content {
          name
          slug
          categoryImages {
            imageUrl
          }
        }
      }
    }
  }
`

export default categorySearchQuery
