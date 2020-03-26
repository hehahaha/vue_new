import {
  reqFoodKindInfo
} from '../api'

import {
  FOOD_KIND_INFO
} from './mutation-types'

export default {
  async getFoodKindInfo ({commit}) {
    const result = await reqFoodKindInfo()
    if (result.code === 0) {
      const foodKindInfo = result.data.foodKind
      commit(FOOD_KIND_INFO, {foodKindInfo})
    }
  }
}
