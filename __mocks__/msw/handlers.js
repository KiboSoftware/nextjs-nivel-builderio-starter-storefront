import { graphql, rest } from 'msw'

import {
  orderMock,
  locationInventoryCollectionMock,
  shippingRateMock,
  returnReasonsMock,
  createReturnMock,
} from '../stories'
import { cartItemMock } from '../stories/cartItemMock'
import { cartCouponMock, cartMock } from '../stories/cartMock'
import { categoryTreeDataMock } from '../stories/categoryTreeDataMock'
import { configuredProductMock } from '../stories/configuredProductMock'
import { createCustomerAccountCardMock } from '../stories/createCustomerAccountCardMock'
import { createOrderPaymentActionMock } from '../stories/createOrderPaymentActionMock'
import { customerAccountCardsMock } from '../stories/customerAccountCardsMock'
import { locationCollectionMock } from '../stories/locationCollectionMock'
import { orderCollection } from '../stories/orderCollection'
import { orderCouponMock } from '../stories/orderMock'
import { productSearchResultMock } from '../stories/productSearchResultMock'
import { searchSuggestionMock } from '../stories/searchSuggestionResultMock'
import { updateCustomerAccountCardMock } from '../stories/updateCustomerAccountCardMock'
import { updateCustomerAccountContactMock } from '../stories/updateCustomerAccountContact'
import { updateOrderBillingInfoMock } from '../stories/updateOrderBillingInfoMock'
import { userAddressMock } from '../stories/userAddressMock'
import { userMock, loginUserMock, registerUserMock } from '../stories/userMock'
import { wishlistMock } from '../stories/wishlistMock'

const baseUrl = 'http://localhost:3000'
const mockCreateCustomerAccount = {
  createCustomerAccountContact: updateCustomerAccountContactMock.updateCustomerAccountContact,
}

export const checkoutHandlers = [
  graphql.query('getCheckout', (_req, res, ctx) => {
    return res(ctx.data(orderMock))
  }),

  graphql.query('getOrCreateCheckout', (_req, res, ctx) => {
    return res(ctx.data(orderMock))
  }),

  graphql.mutation('getOrCreateCheckoutFromCart', (_req, res, ctx) => {
    return res(ctx.data(orderMock))
  }),

  // Details Step
  graphql.mutation('setPersonalInfo', (_req, res, ctx) => {
    return res(ctx.data(orderMock))
  }),

  // Shipping Step
  graphql.mutation('setShippingInformation', (_req, res, ctx) => {
    return res(ctx.data({ updateOrderFulfillmentInfo: orderMock.checkout.fulfillmentInfo }))
  }),

  graphql.query('getShippingRates', (_req, res, ctx) => {
    return res(ctx.data(shippingRateMock))
  }),

  // Payment Step
  graphql.mutation('setBillingInformation', (_req, res, ctx) => {
    return res(ctx.data(updateOrderBillingInfoMock))
  }),

  graphql.mutation('addPaymentMethod', (_req, res, ctx) => {
    return res(ctx.data(createOrderPaymentActionMock))
  }),

  graphql.mutation('createOrderPaymentPaymentAction', (_req, res, ctx) => {
    return res(
      ctx.data({
        createOrderPaymentPaymentAction: createOrderPaymentActionMock.createOrderPaymentAction,
      })
    )
  }),

  // Review Step
  graphql.mutation('createOrderAction', (_req, res, ctx) => {
    return res(ctx.data({ createOrderAction: orderMock.checkout }))
  }),
]

export const accountHandlers = [
  graphql.query('customerAccountCards', (_req, res, ctx) => {
    return res(ctx.data(customerAccountCardsMock))
  }),

  //userAddress
  graphql.query('getUserAddresses', (_req, res, ctx) => {
    return res(ctx.data(userAddressMock))
  }),

  graphql.mutation('createCustomerAccountContact', (_req, res, ctx) => {
    return res(ctx.data({ mockCreateCustomerAccount }))
  }),

  graphql.mutation('updateCustomerAccountContact', (_req, res, ctx) => {
    return res(ctx.data(updateCustomerAccountContactMock))
  }),

  graphql.mutation('deleteCustomerAccountContact', (_req, res, ctx) => {
    return res(ctx.data({ deleteCustomerAccountContact: true }))
  }),

  graphql.mutation('createCustomerAccountCard', (_req, res, ctx) => {
    return res(ctx.data(createCustomerAccountCardMock))
  }),

  graphql.mutation('updateCustomerAccountCard', (_req, res, ctx) => {
    return res(ctx.data(updateCustomerAccountCardMock))
  }),

  graphql.mutation('deleteCustomerAccountCard', (_req, res, ctx) => {
    return res(
      ctx.data({
        deleteCustomerAccountCard: true,
      })
    )
  }),

  graphql.mutation('updateCustomerData', (_req, res, ctx) => {
    return res(ctx.data({}))
  }),
]

export const productHandlers = [
  graphql.mutation('configureProduct', (_req, res, ctx) => {
    return res(ctx.data(configuredProductMock))
  }),
]

export const searchSuggestionHandlers = [
  // useSearchSuggestions
  graphql.query('getSearchSuggestions', (_req, res, ctx) => {
    return res(ctx.data(searchSuggestionMock))
  }),
]

export const categoryHandlers = [
  rest.get(`${baseUrl}/api/category-tree`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoryTreeDataMock.categoriesTree.items))
  }),
]

export const productSearchHandlers = [
  // useProductSearch
  graphql.query('ProductSearch', (_req, res, ctx) => {
    return res(ctx.data({ products: productSearchResultMock }))
  }),
]
export const userHandlers = [
  // useUser
  graphql.query('getUser', (_req, res, ctx) => {
    return res(ctx.data(userMock))
  }),

  // login
  graphql.mutation('login', (_req, res, ctx) => {
    return res(ctx.data(loginUserMock))
  }),
  // create account or registration
  graphql.mutation('registerUser', (_req, res, ctx) => {
    return res(ctx.data(registerUserMock))
  }),
]

export const cartHandlers = [
  graphql.query('cart', (_req, res, ctx) => {
    return res(ctx.data(cartMock))
  }),

  graphql.mutation('addToCart', (_req, res, ctx) => {
    return res(
      ctx.data({
        addItemToCurrentCart: cartItemMock,
      })
    )
  }),

  graphql.mutation('updateCartItemQuantity', (_req, res, ctx) => {
    return res(
      ctx.data({
        updateCartItemQuantity: cartItemMock,
      })
    )
  }),

  graphql.mutation('deleteCartItem', (_req, res, ctx) => {
    return res(
      ctx.data({
        deleteCartItemMutation: true,
      })
    )
  }),

  graphql.mutation('updateCurrentCartItem', (_req, res, ctx) => {
    return res(
      ctx.data({
        updateCurrentCartItem: cartItemMock,
      })
    )
  }),

  graphql.mutation('updateCartCoupon', (_req, res, ctx) => {
    return res(ctx.data(cartCouponMock))
  }),

  graphql.mutation('deleteCartCoupon', (_req, res, ctx) => {
    return res(
      ctx.data({
        deleteCartCoupon: '1234',
      })
    )
  }),
]

export const storeHandlers = [
  graphql.query('GetISPULocations', (_req, res, ctx) => {
    return res(ctx.data(locationCollectionMock))
  }),
]

export const wishlistHandlers = [
  // useWishlistQueries
  graphql.query('wishlists', (_req, res, ctx) => {
    return res(ctx.data({ wishlists: wishlistMock }))
  }),

  graphql.mutation('createWishlist', (_req, res, ctx) => {
    const { customerAccountId, id, name } = wishlistMock?.items[0]
    return res(ctx.data({ createWishlist: { customerAccountId, id, name, items: [] } }))
  }),
  // useAddToWishlistMutation
  graphql.mutation('createWishlistItem', (_req, res, ctx) => {
    return res(ctx.data({ createWishlistItem: wishlistMock?.items[0].items[0] }))
  }),
  // useRemoveWishlistItemMutation
  graphql.mutation('deletewishlistitem', (_req, res, ctx) => {
    return res(
      ctx.data({
        deleteWishlistItem: true,
      })
    )
  }),
]

export const orderHandlers = [
  graphql.query('getOrders', (_req, res, ctx) => {
    return res(ctx.data(orderCollection))
  }),
  graphql.query('returnReasons', (_req, res, ctx) => {
    return res(ctx.data({ items: returnReasonsMock.reaturnReasons.items }))
  }),
  graphql.mutation('updateOrderCoupon', (_req, res, ctx) => {
    return res(ctx.data(orderCouponMock))
  }),
  graphql.mutation('deleteOrderCoupon', (_req, res, ctx) => {
    return res(
      ctx.data({
        deleteOrderCoupon: '1234',
      })
    )
  }),
  graphql.mutation('createReturn', (_req, res, ctx) => {
    return res(ctx.data(createReturnMock))
  }),
]

export const inventoryHandlers = [
  graphql.query('productLocationInventory', (_req, res, ctx) => {
    return res(ctx.data(locationInventoryCollectionMock))
  }),
]

export const handlers = [
  ...checkoutHandlers,
  ...searchSuggestionHandlers,
  ...categoryHandlers,
  ...productSearchHandlers,
  ...userHandlers,
  ...productHandlers,
  ...cartHandlers,
  ...storeHandlers,
  ...wishlistHandlers,
  ...accountHandlers,
  ...orderHandlers,
  ...inventoryHandlers,
]
