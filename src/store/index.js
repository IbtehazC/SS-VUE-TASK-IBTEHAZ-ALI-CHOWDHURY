import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    staffs: [
      {
        id: "017fa872-596b-47e8-b184-8f2f6a9fec70",
        img: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "Marion Byrd",
        email: "marion.byrd@example.com",
        phoneNumber: "2216164248",
        jobTitle: "Marketing Manager",
        gender: "Male",
        type: "employee",
      },
      {
        id: "9f85cb5a-3dc6-4dba-9026-edd8f8de9c62",
        img: "https://randomuser.me/api/portraits/women/17.jpg",
        name: "Debbie Welch",
        email: "debbie.welch@example.com",
        phoneNumber: "9112834380",
        jobTitle: "UI/UX Designer",
        gender: "Female",
        type: "employee",
      },
      {
        id: "17301b96-2ad4-4ffb-a35f-49b1d7695ab6",
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Jerome Hicks",
        email: "jerome.hicks@example.com",
        phoneNumber: "4554185593",
        jobTitle: "Jr. Developer",
        gender: "Male",
        type: "employee",
      },
      {
        id: "c7b9e8ec-b35a-48c0-833f-54a767842346",
        img: "https://randomuser.me/api/portraits/men/96.jpg",
        name: "Walter Beck",
        email: "walter.beck@example.com",
        phoneNumber: "3132701845",
        jobTitle: "Jr. Developer",
        gender: "Male",
        type: "employee",
      },
      {
        id: "5d6f1e47-47aa-4868-9b2f-10996232ed41",
        img: "https://randomuser.me/api/portraits/women/94.jpg",
        name: "Kristen Shelton",
        email: "kristen.shelton@example.com",
        phoneNumber: "3084537916",
        jobTitle: "Project Manager",
        gender: "Female",
        type: "admin",
      },
      {
        id: "6",
        img: "https://randomuser.me/api/portraits/women/87.jpg",
        name: "Veronica Bennett",
        email: "veronica.bennet@example.com",
        phoneNumber: "5438600462",
        jobTitle: "Sr. Developer",
        gender: "Female",
        type: "admin",
      },
      {
        id: "066f4a02-1901-4da5-b85e-5e1c2f59bbd9",
        img: "https://randomuser.me/api/portraits/men/94.jpg",
        name: "Glen Silva",
        email: "glen.silva@example.com",
        phoneNumber: "4045391555",
        jobTitle: "UI/UX Designer",
        gender: "Male",
        type: "employee",
      },
      {
        id: "7988b3c7-8f01-41b9-a123-4afe61eb229b",
        img: "https://randomuser.me/api/portraits/women/97.jpg",
        name: "Tammy Marshall",
        email: "tammy.marshal@example.com",
        phoneNumber: "7609545565",
        jobTitle: "Marketing Manager",
        gender: "Female",
        type: "employee",
      },
      {
        id: "c420e878-0d8b-415d-a481-43539f7f14b3",
        img: "https://randomuser.me/api/portraits/women/70.jpg",
        name: "Pauline Hart",
        email: "pauline.hart@example.com",
        phoneNumber: "8386151928",
        jobTitle: "Jr. Developer",
        gender: "Female",
        type: "employee",
      },
      {
        id: "d0f47dcd-d5f5-40ff-9992-815764fa1d61",
        img: "https://randomuser.me/api/portraits/men/57.jpg",
        name: "Norman Long",
        email: "norman.long@example.com",
        phoneNumber: "2333392071",
        jobTitle: "Marketing Head",
        gender: "Male",
        type: "admin",
      },
      {
        id: "eb5b4f4c-6320-48e1-a0d1-ae1117c5e768",
        img: "https://randomuser.me/api/portraits/women/61.jpg",
        name: "Suzanne Harvey",
        email: "suzanne.harvey@example.com",
        phoneNumber: "(781) 564-2261",
        jobTitle: "Marketing Manager",
        gender: "Female",
        type: "employee",
      },
      {
        id: "aa321b63-56d8-43c0-8268-eeb1a37a4cfc",
        img: "https://randomuser.me/api/portraits/women/70.jpg",
        name: "Bill Banks",
        email: "bill.banks@example.com",
        phoneNumber: "(744) 407-5635",
        jobTitle: "Developer",
        gender: "Male",
        type: "employee",
      },
      {
        id: "5d4e45ef-e16e-4078-9e95-c08b24349b24",
        img: "https://randomuser.me/api/portraits/men/0.jpg",
        name: "Stanley Pena",
        email: "stanley.pena@example.com",
        phoneNumber: "(708) 826-6053",
        jobTitle: "Designer",
        gender: "Male",
        type: "employee",
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
    getStaffCount(state) {
      return state.staffs.length;
    },
    getStaffByEmail: (state) => (email) => {
      return state.staffs.find((todo) => todo.email === email);
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
