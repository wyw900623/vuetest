import Mock from 'mockjs'

import {
    getUserInfo
} from './response/user'

Mock.setup({
    timeout: '200-400'
})

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
export default Mock
