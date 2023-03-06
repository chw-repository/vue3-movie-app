import axios from "axios";
import Search from "../components/Search.vue";

export default {
    namespaced: true,
    state: () => ({
        movies: []
    }),
    getters: {
        // movieIds(state) {
        //     return state.movies.map(m => m.imdbID)
        // }
    },
    mutations: {
        // assignMovies(state, Search) {
        //   state.movies = Search
        // },
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    },
    actions: {
        async searchMovies({commit}, payload) {
            const {title, type, number, year} = payload;
            const OMDB_API_KEY = '7035c60c'
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            console.log(res)
            const {Search, totalResults} = res.data
            commit('updateState', {
                movies: Search
            })
        }
    }
}