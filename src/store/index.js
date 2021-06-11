import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '@/api/index';
import { PACKAGES_BY_QUERY } from "@/api/routes.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    dialogVisible: false,
    currentPackage: {},
  },
  mutations: {
    setPackages(state, packages) {
      state.packages = packages;
    },
    showDialog(state) {
      state.dialogVisible = true;
    }, 
    hideDialog(state) {
      state.dialogVisible = false;
    },
    setCurrentPackage(state, payload) {
      state.currentPackage = payload;
    }
  },
  actions: {
    fetchPackages({commit}, query) {
      return axiosInstance.get(PACKAGES_BY_QUERY(query))
      .then(({data}) => {
        const {objects} = data;
        commit('setPackages', objects);
      })
    }
  },
  getters: {
    getPackages(state) {
      return state.packages.map(e => e.package.keywords = e.package.keywords.slice(0, 10));
    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentPackage: (state) => state.currentPackage,
    // getDialogVisible(state) {
    //   return state.dialogVisible
    // },
    // getCurrentPackage(state) {
    //   return state.currentPackage;
    // },
  },
  modules: {
  }
})
