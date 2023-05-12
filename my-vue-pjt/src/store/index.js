import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dummy data
    movies: [
      {
        title: '스파이더맨',
        isStriked: false,
      },
      {
        title: '가오갤',
        isStriked: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_WATCH_LIST_MOVIE(state, movie) {
      state.todos.push(movie)
    },
    TOGGLE_STRIKE(state, watchItem) {
      // state.movies 배열에서 클릭한 item을 찾고 해당 isStriked를 반전
      state.movies = state.movies.map((movie) => {
        if (movie === watchItem) {
          movie.isStriked = !movie.isStriked
        }
        return movie
      })
    }
  },
  actions: {
    createWatchListMovie (context, title) {
      const movie = {
        title: title,
      }
      context.commit('CREATE_WATCH_LIST_MOVIE', movie)
    },
    toggleStrike (context, watchItem) {
      context.commit('TOGGLE_STRIKE', watchItem)
    }
  },
  modules: {
  }
})
