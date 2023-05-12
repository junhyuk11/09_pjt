import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const TMDB_API = 'https://api.themoviedb.org/3/movie/popular?'

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
    ],
    movieData: null
  },
  getters: {
  },
  mutations: {
    CREATE_WATCH_LIST_MOVIE(state, movie) {
      state.movies.push(movie)
    },
    TOGGLE_STRIKE(state, watchItem) {
      // state.movies 배열에서 클릭한 item을 찾고 해당 isStriked를 반전
      state.movies = state.movies.map((movie) => {
        if (movie === watchItem) {
          movie.isStriked = !movie.isStriked
        }
        return movie
      })
    },
    SAVE_MOVIE_DATA(state, movieData) {
      state.movieData = movieData
    }
  },
  actions: {
    getPopularMovies (context) {
      axios({
        method: 'get',
        url: TMDB_API,
        params: {
        'api_key': 'a24275eaaea1118ecc0e95751086b277'
        }
      })
      .then((response) => {
        const movieData = response.data.results
        console.log(movieData)
        console.log(typeof(movieData))
        context.commit('SAVE_MOVIE_DATA', movieData)
      })
      
    },
    createWatchListMovie (context, title) {
      const movie = {
        title: title,
        isStriked: false,
      }
      context.commit('CREATE_WATCH_LIST_MOVIE', movie)
    },
    toggleStrike (context, watchItem) {
      context.commit('TOGGLE_STRIKE', watchItem)
    },
  },
  modules: {
  }
})
