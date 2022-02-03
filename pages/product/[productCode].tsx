import type {
  NextPage,
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetServerSidePropsContext,
} from 'next'
import getProduct from '@/lib/api/operations/get-product'
import { ProductDetailTemplate } from '@/components/page-templates'
import { useRouter } from 'next/router'

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const { productCode } = params as any
  const product = await getProduct(productCode)
  return {
    props: { product }, // will be passed to the page component as props
    revalidate: 60,
  }
}
export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  return { paths: ['/product/MS-JKT-001', '/product/MS-CYCL-004'], fallback: true }
}
// // This gets called on every request
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const product = await getProduct('MS-BTL-002');
//   return {
//     props: { product }, // will be passed to the page component as props
//   };
// }

const ProductDetailPage: NextPage = ({ product }: any) => {
  const name = product?.content?.productName || 'no name'
  const { isFallback } = useRouter()

  if (isFallback) {
    return <>Fallback</>
  }
  return (
    <>
      <ProductDetailTemplate product={product} />
    </>
  )
}

export default ProductDetailPage
