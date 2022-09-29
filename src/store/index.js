import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [
      {
        id: "1",
        img: "",
        name: "John Wick",
        email: "johnwick@gmail.com",
        phoneNumber: "9088289",
        jobTitle: "Assassin",
        gender: "Male",
        type: "Employee",
      },
      {
        id: "2",
        img: "",
        name: "Uzumaki Naruto",
        email: "uzumakinaruto@gmail.com",
        phoneNumber: "123445",
        jobTitle: "Ninja",
        gender: "Male",
        type: "Employee",
      },
      {
        id: "3",
        img: "",
        name: "Ayanokouji Kyotaka",
        email: "kyo@gmail.com",
        phoneNumber: "1234400",
        jobTitle: "Student",
        gender: "Male",
        type: "Employee",
      },
      {
        id: "4",
        img: "",
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        phoneNumber: "0000000",
        jobTitle: "Commander of the Night Watch",
        gender: "Male",
        type: "Employee",
      },
    ],
    admins: [
      {
        id: "5",
        img: "",
        name: "Uchiha Itachi",
        email: "itachi@gmail.com",
        phoneNumber: "000000000",
        jobTitle: "Rouge Ninja",
        gender: "Male",
        type: "Admin",
      },
      {
        id: "6",
        img: "",
        name: "Namizake Minato",
        email: "rasengan@gmail.com",
        phoneNumber: "00000000",
        jobTitle: "Hokage",
        gender: "Male",
        type: "Admin",
      },
    ],
  },
  getters: {},
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
    getStaffById({ commit }, id) {
      var staff = this.state.employees.find((s) => s.id === id);
      if (staff == null) {
        staff = this.state.admins.find((s) => s.id === id);
      }
      return new Promise((resolve, reject) => {
        if (staff != null) {
          resolve(staff);
        } else {
          reject("Error");
        }
      });
    },
    getEmployeeById({ commit }, id) {
      var employee = this.state.employees.find((e) => e.id === id);
      return new Promise((resolve, reject) => {
        if (employee != null) {
          resolve(employee);
        } else {
          reject("Error");
        }
      });
    },
    getAdminsById({ commit }, id) {
      var admin = this.state.admins.find((a) => a.id === id);
      return new Promise((resolve, reject) => {
        if (admin != null) {
          resolve(admin);
        } else {
          reject("Error");
        }
      });
    },
  },
});
