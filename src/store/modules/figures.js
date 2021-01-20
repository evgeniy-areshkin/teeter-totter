import { v4 as uuidv4 } from 'uuid';

const newFigure = () => {
    const types = ['rect', 'triangle', 'circle']
    const minWeight = 1
    const maxWeight = 10
    const minStep = 1
    const maxStep = 4
    return {
        id: uuidv4(),
        type: types[Math.floor(Math.random() * types.length)],
        weight: Math.floor(Math.random() * (maxWeight - minWeight + 1) ) + minWeight,
        color: Math.floor(Math.random()*16777215).toString(16),
        positionX: Math.floor(Math.random() * (maxStep - minStep + 1) ) + minStep,
    };
}

export const state = {
    figures: [],
    staticFigures: [],
    isOnPause: false,
    isInProgress: false,
    isEnded: false,
    index: 0
}

export const mutations = {
    updateFigures(state, payload = []) {
        state.figures = payload
    },
    updateStaticFigures(state, payload = []) {
        state.staticFigures = payload
    },
    togglePause(state, payload = !state.isOnPause) {
        state.isOnPause = payload
    },
    setProgress(state, payload) {
        state.isInProgress = payload
    },
    setFigureWeight(state, payload) {
        state.figures = state.figures.map((figure) => { 
            if(figure.id === payload.id) {
                figure.positionX = payload.newPositionX
            }
            return figure
         })
    },
    toggleEndState(state, payload = !state.isEnded) {
        state.isEnded = payload
    },
}

export const actions = {
    addFigure({ commit, state, dispatch }) {
        commit('togglePause', false)
        commit('setProgress', true)
        commit('updateFigures', [
            ...state.figures,
            {
                ...newFigure(),
            }
        ]);
        dispatch('addStaticFigure')
    },

    addStaticFigure({ commit, state }) {
        commit('updateStaticFigures', [
            ...state.staticFigures,
            {
                ...newFigure(),
            }
        ]);
    },

    resetFigures({ commit }) {
        commit('updateFigures')
        commit('updateStaticFigures')
        commit('setProgress', false),
        commit('toggleEndState', false)
    },

    pauseSimulation({ commit }) {
        commit('togglePause')
    },

    stopSimulation({ commit }) {
        commit('togglePause')
        commit('toggleEndState')
    },
}
