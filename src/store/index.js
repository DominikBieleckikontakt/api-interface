import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    users: [],
    currentPage: 1,
    postsPerPage: 10,
  },
  getters: {
    paginatedPosts(state) {
      let start = (state.currentPage - 1) * state.postsPerPage;
      let end = start + state.postsPerPage;
      return state.posts.slice(start, end);
    },
    totalPages(state) {
      return Math.ceil(state.posts.length / state.postsPerPage);
    },
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUsers(state, users) {
      state.users = users;
    },
    deletePost(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const postsRes = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const usersRes = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("setPosts", postsRes.data);
      commit("setUsers", usersRes.data);
    },
  },
});
