import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staffs: [
      {
        id: "1",
        img: "",
        name: "John Wick",
        email: "johnwick@gmail.com",
        phoneNumber: "9088289",
        jobTitle: "Assassin",
        gender: "Male",
        type: "employee",
      },
      {
        id: "2",
        img: "",
        name: "Uzumaki Naruto",
        email: "naruto@gmail.com",
        phoneNumber: "123445",
        jobTitle: "Ninja",
        gender: "Male",
        type: "employee",
      },
      {
        id: "3",
        img: "",
        name: "Ayanokouji Kyotaka",
        email: "kyo@gmail.com",
        phoneNumber: "1234400",
        jobTitle: "Student",
        gender: "Male",
        type: "employee",
      },
      {
        id: "4",
        img: "",
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        phoneNumber: "0000000",
        jobTitle: "Commander of the Night Watch",
        gender: "Male",
        type: "employee",
      },
      {
        id: "5",
        img: "",
        name: "Uchiha Itachi",
        email: "itachi@gmail.com",
        phoneNumber: "000000000",
        jobTitle: "Rouge Ninja",
        gender: "Male",
        type: "admin",
      },
      {
        id: "6",
        img: "",
        name: "Namizake Minato",
        email: "rasengan@gmail.com",
        phoneNumber: "00000000",
        jobTitle: "Hokage",
        gender: "Male",
        type: "admin",
      },
    ],
  },
  getters: {
    getEmployees(state) {
      return state.staffs.filter((staff) => staff.type === "employee");
    },
    getAdmins(state) {
      return state.staffs.filter((staff) => staff.type === "admin");
    },
  },
  mutations: {
    setStaff(state, payload) {
      state.staffs = payload;
    },
  },
  actions: {
    addStaff({ commit }, staffData) {
      const newStaffsArray = [staffData, ...this.state.staffs];
      console.log(newStaffsArray);
      commit("setStaff", newStaffsArray);
    },
    editStaff({ commit }, staffData) {
      const index = this.state.staffs.findIndex(
        (staff) => staff.id === staffData.id
      );
      const newStaffsArray = this.state.staffs;
      newStaffsArray.splice(index, 1, staffData);
      commit("setStaff", newStaffsArray);
    },
    deleteStaff({ commit }, id) {
      const index = this.state.staffs.findIndex((staff) => staff.id === id);
      const newStaffsArray = this.state.staffs;
      newStaffsArray.splice(index, 1);
      commit("setStaff", newStaffsArray);
    },
    getStaffById({ commit }, id) {
      var staff = this.state.staffs.find((s) => s.id === id);
      return new Promise((resolve, reject) => {
        if (staff != null) {
          resolve(staff);
        } else {
          reject("Error");
        }
      });
    },
  },
});
