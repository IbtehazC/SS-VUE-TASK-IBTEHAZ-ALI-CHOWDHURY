<template>
  <v-card max-width="900px" class="mx-auto px-8 bg" elevation="2">
    <v-row class="ma-0">
      <v-col align-self="start" class="justify-start ml-4">
        <p class="text-subtitle-1">PROFILE IMAGE</p>
        <v-avatar
          class="profile avatar-center-heigth avatar-shadow"
          color="grey"
          size="180"
          tile
        >
          <v-btn v-if="editMode" class="upload-btn" large icon>
            <v-icon> mdi-camera </v-icon>
          </v-btn>
          <input
            ref="uploader"
            class="d-none"
            type="file"
            accept="image/*"
            :change="onFileChanged"
          />
          <v-img
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          ></v-img>
        </v-avatar>
      </v-col>
      <v-col class="px-0" align-self="start">
        <v-list-item color="#0000" class="ma-0 pt-0 px-0">
          <v-list-item-content>
            <p class="text-subtitle-1">ROLE</p>
            <v-select
              v-model="staff.type"
              class="text-h6 px-0"
              prepend-icon="mdi-account-badge"
              :items="employeeTypes"
              :solo="!editMode"
              flat
              :readonly="!editMode"
              :filled="editMode"
            ></v-select>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col>
        <p class="ml-5 my-0 caption">NAME</p>
        <v-text-field
          v-model="staff.name"
          class="text-h6 px-2"
          :solo="!editMode"
          flat
          :readonly="!editMode"
          :filled="editMode"
        ></v-text-field>
        <p class="ml-5 my-0 caption">JOB</p>
        <v-text-field
          v-model="staff.jobTitle"
          class="text-h6 px-2"
          :solo="!editMode"
          flat
          :readonly="!editMode"
          :filled="editMode"
        ></v-text-field>
        <p class="ml-5 my-0 caption">EMAIL</p>
        <v-text-field
          v-model="staff.email"
          class="text-h6 px-2 ml-3"
          prepend-icon="mdi-email"
          :solo="!editMode"
          flat
          :readonly="!editMode"
          :filled="editMode"
        ></v-text-field>
      </v-col>
      <v-col>
        <p class="ml-3 my-0 caption">PHONE NUMBER</p>
        <v-text-field
          v-model="staff.phoneNumber"
          class="text-h6 px-2 ma-0"
          prepend-icon="mdi-phone"
          :solo="!editMode"
          flat
          :readonly="!editMode"
          :filled="editMode"
        ></v-text-field>
        <p class="ml-3 my-0 caption">GENDER</p>
        <v-select
          v-model="staff.gender"
          class="text-h6 px-0"
          :items="genders"
          :solo="!editMode"
          flat
          :readonly="!editMode"
          :filled="editMode"
        ></v-select>
      </v-col>
    </v-row>
    <v-btn @click="save" class="my-8 ml-7" color="primary">
      <v-icon size="16" class="mr-2"> mdi-pencil </v-icon>
      {{ editMode ? "SAVE" : "EDIT" }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      genders: ["Male", "Female", "I don't want to disclose"],
      editMode: false,
      employeeTypes: ["Admin", "Employee"],
      staff: {
        id: "",
        img: "",
        name: "",
        email: "",
        phoneNumber: "",
        jobTitle: "",
        gender: "I don't want to disclose",
        type: "Employee",
      },
    };
  },
  props: ["id"],
  methods: {
    save() {
      this.editMode = !this.editMode;
      if (!this.editMode) {
        alert("Saved successfully");
      }
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
    },
    getStaffData() {},
  },
  created() {
    this.$store
      .dispatch("getStaffById", this.$route.params.id)
      .then((staff) => (this.staff = staff));
  },
};
</script>

<style>
.upload-btn {
  position: absolute !important;
  z-index: 999;
  top: 0;
  left: 120px;
  color: cadetblue;
  background: blueviolet;
  background: rgb(125, 198, 163);
  background: linear-gradient(
    50deg,
    rgba(125, 198, 163, 1) 0%,
    rgba(35, 216, 227, 1) 72%
  );
}

.avatar-shadow {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
