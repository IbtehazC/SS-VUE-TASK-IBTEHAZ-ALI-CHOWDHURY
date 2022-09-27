import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [
      {
        img: "",
        name: "John Wick",
        email: "johnwick@gmail.com",
        phoneNumber: "XXXXXXXXXXX",
      },
      {
        img: "",
        name: "Uzumaki Naruto",
        email: "uzumakinaruto@gmail.com",
        phoneNumber: "XXXXXXXXXXX",
      },
      {
        img: "",
        name: "Ayanokouji Kyotaka",
        email: "kyo@gmail.com",
        phoneNumber: "XXXXXXXXXXX",
      },
      {
        img: "",
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        phoneNumber: "XXXXXXXXXXX",
      },
    ],
    admins: [
      {
        img: "",
        name: "Uchiha Itachi",
        email: "itachi@gmail.com",
        phoneNumber: "XXXXXXXXXXX",
      },
      {
        img: "",
        name: "Namizake Minato",
        email: "rasengan@gmail.com",
        phoneNumber: "XXXXXXXXXXX",
      },
    ],
  },
  getters: {
    getEmployee(state) {
      return state.employees;
    },
    getAdmins(state) {
      return state.admins;
    },
  },
  mutations: {
    setEmployees(state, payload) {
      state.employees.unshift(payload);
    },
    setAdmins(state, payload) {
      state.admins.unshift(payload);
    },
  },
  actions: {
    addEmployee({ commit }, employee) {
      commit("setEmployees", employee);
    },
    addAdmin({ commit }, admin) {
      commit("setAdmins", admin);
    },
  },
});
