import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [
      {
        name: "John Wick",
        email: "johnwick@gmail.com",
        phone: "XXXX-XXXXXXX",
      },
      {
        name: "Uzumaki Naruto",
        email: "uzumakinaruto@gmail.com",
        phone: "XXXX-XXXXXXX",
      },
      {
        name: "Ayanokouji Kyotaka",
        email: "kyo@gmail.com",
        phone: "XXXX-XXXXXXX",
      },
      {
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        phone: "XXXX-XXXXXXX",
      },
    ],
  },
  getters: {
    getEmployee(state) {
      return state.employee;
    },
  },
  mutations: {
    setName(state, payload) {
      state.employee = payload;
    },
  },
  actions: {
    addEmployee({ commit }, employee) {
      commit("setName", employee);
    },
  },
});
