
export const state = {
    balance: 0,
    maxBalance: 30
}

export const mutations = {
    setBalance(state, payload = 0) {
        state.balance = payload
    }
}

export const actions = {
    calculateBalance({commit, rootState, dispatch}) {
        const leftForce = rootState['figures'].figures.reduce((acc, figure) => {
            return acc += figure.weight * (4 - figure.positionX + 1)
        }, 0)
        const rightForce = rootState['figures'].staticFigures.reduce((acc, figure) => {
            return acc += figure.weight * (figure.positionX + 1)
        }, 0)
        
        const totalForce = leftForce > rightForce ? 
            ((leftForce - rightForce) / leftForce) * -100 :
            ((rightForce - leftForce) / rightForce) * 100

        if(totalForce >= state.maxBalance) {
            commit('setBalance', state.maxBalance)
            dispatch('figures/stopSimulation', null, { root: true })
            return
        }
        if(totalForce <= -state.maxBalance) {
            commit('setBalance', -state.maxBalance)
            dispatch('figures/stopSimulation', null, { root: true })
            return
        }
        commit('setBalance', totalForce / 2)
    },
    resetBalance({commit}) {
        commit('setBalance')
    }
}
