import {
  FOOD_KIND_INFO,
  SHOP_LIST,
  SHOP_LIST_ITEM
} from './mutation-types'

export default {
  [FOOD_KIND_INFO] (state, {foodKindInfo}) {
    state.foodKindInfo = foodKindInfo
  },
  [SHOP_LIST] (state, {shopList}) {
    state.shopList = shopList
  },
  [SHOP_LIST_ITEM] (state, {shopList}) {
    state.shopListItem = shopList
  }
}
