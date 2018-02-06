export const state = () => ({
    sidebar: false,
    user: null
})

export const mutations = {
    toggleSidebar (state) {
        state.sidebar = !state.sidebar
    },
    SET_USER (state, user) {
        state.user = user || null
    }
}

export const getters = {
    isAuthenticated (state) {
        return !!state.user
    },
    loggedUser (state) {
        return state.user
    }
}
