import {
  FOOD_KIND_INFO
} from './mutation-types'

export default {
  [FOOD_KIND_INFO] (state, {foodKindInfo}) {
    state.foodKindInfo = foodKindInfo
  }
}
