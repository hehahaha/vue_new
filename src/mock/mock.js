import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/foodKindInfo', {code: 0, data: data.foodKind})