import { CategoryPagedCollection } from '@/lib/gql/types'

export const categorySearchResultMock: CategoryPagedCollection = {
  pageCount: 8,
  pageSize: 0,
  startIndex: 0,
  totalCount: 0,
  items: [
    {
      categoryId: 1,
      updateDate: '',
      categoryCode: 'BackPack',
      content: {
        name: 'Back Packs',
        slug: 'back-packs',
        categoryImages: [
          {
            imageUrl:
              '//cdn-sb.mozu.com/26507-41315/cms/41315/files/27e1e2e7-baf2-4327-a091-219e775aae31',
          },
        ],
      },
    },
    {
      categoryId: 2,
      updateDate: '',
      categoryCode: 'Tents',
      content: {
        name: 'Tents',
        slug: 'tents',
        categoryImages: [],
      },
    },
    {
      categoryId: 3,
      updateDate: '',
      categoryCode: 'CampElec',
      content: {
        name: 'Camp Electronics',
        slug: 'camp-electronics',
        categoryImages: [],
      },
    },
    {
      categoryId: 4,
      updateDate: '',
      categoryCode: 'CampKitchen',
      content: {
        name: 'Camp Kitchen',
        slug: 'camp-kitchen',
        categoryImages: [],
      },
    },
  ],
}
