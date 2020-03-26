import {
  FOOD_KIND_INFO,
  SHOP_LIST
} from './mutation-types'

export default {
  [FOOD_KIND_INFO] (state, {foodKindInfo}) {
    state.foodKindInfo = foodKindInfo
  },
  [SHOP_LIST] (state, {shopList}) {
    state.shopList = shopList
  }
}
