import {
  reqFoodKindInfo,
  reqShopList
} from '../api'

import {
  FOOD_KIND_INFO,
  SHOP_LIST
} from './mutation-types'

export default {
  async getFoodKindInfo ({commit}) {
    const result = await reqFoodKindInfo()
    if (result.code === 0) {
      const foodKindInfo = result.data.foodKind
      commit(FOOD_KIND_INFO, {foodKindInfo})
    }
  },
  async getShopList ({commit}) {
    const result = await reqShopList()
    if (result.code === 0) {
      const shopList = result.data.shopList
      commit(SHOP_LIST, {shopList})
    }
  }
}
