const mutations = {
    SET_NEW_NAME: (state, params) => {
        state.myName = params.myName
    },
    SET_VER: (state, params) => {
        state.verison = params
    }
}
export default mutations